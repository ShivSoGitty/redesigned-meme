function addUser(){
    username = document.getElementById("username").value;

    localStorage.setItem("usernamekey", username);

    window.location = "kwitter_room.html";
}