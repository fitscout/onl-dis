let greet_to = document.getElementById('greet_username')
let greet_from = JSON.parse(localStorage.getItem("UserData")).username;
let greet_message = document.getElementById('greet_message');
let sendBtn = document.getElementById("send_greet");

// Send Greetings


sendBtn.addEventListener('click',(e)=>{
  if(greet_to.value == "" || greet_message == ""){
    alert("Попълни необходимите полета за да продълиш.");
  }else{
    let greeting_data = {
      from:greet_from,
      to:greet_to.value,
      message:greet_message.value
    }
    socket.emit("greetings_sent", {
      greeting_data: greeting_data
    })
  }
  greet_message.value = '';
  greet_to.value = '';
})

// Recieve Greetings
 socket.on('new_greet', (data) => {
  try{
     $('#greeting_message').html(`<b>${data.greets.greeting_data.from}</b></br> поздравява </br> <b>${data.greets.greeting_data.to}</b> </br> ${data.greets.greeting_data.message}`)
  }
  catch(err){
   return;
  }
 })
