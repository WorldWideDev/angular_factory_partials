// Load the express module (Where do you think this comes from?)
var express = require("express");
// invoke var express and store the resulting application in var app
var app = express();
// notice that the function is app.get(...) why do you think the function is called 
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// app.set('views', __dirname + '/views');

app.get("/", function (request, response){
    request.render('index.html')
})



app.listen(3030, function() {
  console.log("listening on port 3030");
})
// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)