let peopleOnline = document.getElementById('peopleOnline');
let sendBtn_chat = document.getElementById('sendBtn');
let messageData = document.getElementById('message');
// Events
socket.on('getPeoplLive', (data) => {
  peopleOnline.innerText = `People Online: ${data.count}`;
})

socket.on('messageFromServer', (data) => {
  console.log(data);
  $(".message_container").append(`<li class='list-group-item'>${data.msgData.username}:${data.msgData.message}</li>`)
})

messageData.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    sendBtn_chat.click();
  }
});

sendBtn_chat.addEventListener('click', (e) => {
  if (messageData.value == "") {
    alert("You must enter something");
  } else {
    socket.emit("messageSent", {
      message: messageData.value,
      username: JSON.parse(localStorage.getItem("UserData")).username
    })
    messageData.value = ""
  }
  e.preventDefault();
})
