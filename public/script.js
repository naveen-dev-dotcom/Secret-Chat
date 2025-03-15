var socket = io();
var container = document.getElementById("container"); 
var messagesList = document.getElementById("messages");

// Initially hide the container
container.style.display = "none";

function sendMessage() {
  var message = document.getElementById("message").value;

  if (message.trim() !== "") { // Ensure message is not empty
    socket.emit("chat message", message);
    document.getElementById("message").value = "";
  }
}

socket.on("chat message", function (msg) {
  if (messagesList.children.length === 0) {
    container.style.display = "block"; // Show container only after the first message
  }

  var item = document.createElement("li");
  item.textContent = msg;
  messagesList.appendChild(item);
});
