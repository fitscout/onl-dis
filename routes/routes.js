let middlewares = require('./middlewares');
const fs = require('fs');
let gifFile = require('./gifs.json')


module.exports = function (app) {
  app.get('/', (req, res) => {
    let index_css = {
      styles: fs.readFileSync('public/css/index.css','utf8')
    };
    res.render('index',{page:'index'});
  })

  app.post('/registerUser',(req,res)=>{
    // Save their username ib cookie 
    console.log(req.body.username);
    let username = req.body.username;
    res.cookie('Username', username, {
      maxAge: 90000000
    })
    res.redirect('/selectGifs')
  })

  app.get('/selectGifs',middlewares.checkUser,(req,res)=>{
    res.render('gifs',{page:'select_gifs'})
  })

  app.get('/api/getGifs',(req,res)=>{
    res.json(gifFile);
  })

  app.get('/danceFloor',middlewares.checkUser,(req,res)=>{
    res.render('home', {
      page: 'home'
    });
  })

  app.get('/setMusic',(req,res)=>{
    res.render('setMusic');
  })
}