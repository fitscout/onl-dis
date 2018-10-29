const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const io = require('socket.io')(http);
// Middlewares

app.use(express.static(path.join(__dirname+'/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())

// Configured ejs 

app.set('view engine','ejs')

// Routes
var routes = require('./routes/routes.js')(app);
var sockets = require('./routes/socket.js')(io);

http.listen(process.env.PORT || 3000 ,function(){
    console.log("Server has started.")
})
