var express = require('express');

// Create our app
var app = express();
// const means value can't be changed a const should be uppercase
// this configures our port for heroku
const PORT = process.env.PORT || 3001;

// this is our middleware
// this will redirect https to http
app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }

})
// express.static
app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT)
});
