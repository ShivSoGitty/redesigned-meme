
const firebaseConfig = {
      apiKey: "AIzaSyBUSf4cP086n1BfWjpL6nx9bgcSXxF27Jg",
      authDomain: "shivsofirebase.firebaseapp.com",
      databaseURL: "https://shivsofirebase-default-rtdb.firebaseio.com",
      projectId: "shivsofirebase",
      storageBucket: "shivsofirebase.appspot.com",
      messagingSenderId: "71513219830",
      appId: "1:71513219830:web:f1b60830c269f5576482d7",
      measurementId: "G-SM5V4XW94E"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    username = localStorage.getItem("usernamekey");
    document.getElementById("username").innerHTML = "Welcome " + username + "!";

    function addRoom(){
          roomname = document.getElementById("roomname").value;
          firebase.database().ref("/").child(roomname).update({
                purpose : "adding room name"
          });

          localStorage.setItem("roomname", roomname);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Server Name: " + Room_names);
row = "<div class = 'roomname' id = "+ Room_names +" onclick = 'redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      window.location = ("index.html");
      localStorage.removeItem("roomname");
      localStorage.removeItem("usernamekey");
}