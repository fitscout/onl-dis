async function getGifs(){ 
  let gifReq = await axios.get('/api/getGifs');
  let gifData = await gifReq.data;

  return {gifs:gifData};
}
getGifs().then(data=>{
  // console.log(typeof data);
  // console.log(data);
  data.gifs.forEach(d=>{
    $('.gif_container').append(`
    <div class="gif">
      <img src=${d.URL} onclick="registerGif(this)" id="gif_image"/>
    </div>
  `)
  })
})
.catch(err=>{
  console.log(err);
})

function registerGif(e){
  console.log(e.src);
  let user_gif_src = e.src;
  let username = document.cookie.split("=")[1];
  let userData = {
    gif:user_gif_src,
    username:username
  }
  let lock_gifs = confirm("Сигурен ли си , че ще танцуваш така ? 0_о")
  if(lock_gifs){
    localStorage.setItem('UserData', JSON.stringify(userData));
    window.location = '/dancefloor'
  }else{
    return;
  }
}