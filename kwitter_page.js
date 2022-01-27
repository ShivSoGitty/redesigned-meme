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

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(roomname).push({
                name:username,
                message:msg,
                like: 0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data["message"];
like = message_data["like"];
nametag = "<h4>" + name + "<img class = 'user_tick' src = 'verified.png'></h4>";
messagetag = "<h4 class = 'message_h4'>" + message + "</h4>";
likebutton = "<button class = 'btn btn-outline-info' id = " + firebase_message_id + "value = " + like + "onclick = 'updateLike(this.id)'>";
spantag = "<span class = 'glyphicon glyphicon-thumbs-up'> like:" + like + "</span></button><hr>";
row = nametag + messagetag + likebutton + spantag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
      console.log("Clicked on the like button" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_like = Number(likes) + 1;
      console.log(update_like);
      firebase.database().ref(roomname).child(message.id).update({
            like:update_like
      });
}
function logout(){
      window.location = ("index.html");
      localStorage.removeItem("roomname");
      localStorage.removeItem("usernamekey");
}