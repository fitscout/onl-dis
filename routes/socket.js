let GreetingQueue = require('./GreetQueue');
module.exports = function (io) {

  let Users = [];
  let timeout = 10000; // Test
  let Greetings = new GreetingQueue(io,50);

  let home = io.of('/dancefloor').on('connection', (socket) => {
    console.log("A user has connected");

    socket.on('UserData', (data) => {
      Users.push({
        UserData: data,
        id: socket.id
      })

      home.emit('enterFloor',Users)
    })

    socket.on("messageSent", (data) => {
      console.log(data);
      home.emit("messageFromServer", {
        msgData: data,
        senderId: socket.id
      })
    })

    socket.on('greetings_sent', (greets) => {
      console.log("Inserting into Q");
      Greetings.insert_q(greets);
      console.log("Greetings:  "+Greetings.Q)
      })
    // Check for greetings every 2 seconds

    let interval = setInterval(function(){
      if(Greetings.Q.length == 0){
        home.emit("No_Greetings",{message:"Greetings Queue is empty.."});
      }else{
        home.emit("new_greet", {
          greets: Greetings.peek()
        });
        Greetings.delete_q();
      }
    },10000)
    
    socket.on('disconnect', () => {
      for(let i=0;i<Users.length;i++){
        if(Users[i].id == socket.id){
          Users.splice(i,1);
        }
      }
      console.log("DISCONNECTED")
    })
  })
}