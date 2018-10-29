
socket.emit("UserData", {
  username: JSON.parse(localStorage.getItem('UserData')).username,
  gif: JSON.parse(localStorage.getItem('UserData')).gif
})
socket.on('enterFloor', (data) => {
  $('.danceFloor').empty();
  console.log(data);
  data.forEach(d => {
  $('.danceFloor').append(`
   <div class="gif_member">
    <center><span class="heading">${d.UserData.username}</span><center><br>
    <img src=${d.UserData.gif}  height="165px"/>
   </div>`)
  })
})
