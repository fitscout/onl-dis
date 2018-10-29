module.exports = {
  checkUser:function(req,res,next){
    console.log
    if (!req.cookies.Username) {
      res.render('Error')
    }else{
      next();
    }
  }
}