const express = require("express");

const app = express();

app.get("/", function(request, response){
  response.send("Hello~")
});
app.get("/about", function(req, res){
  res.send("I am learning web development")
});
app.get("/hobbies", function(req, res){
  res.send("<ul><li>Code</li><li>Workout</li><li>Basketball</li></ul>")
});

app.listen(3000, function(){
  console.log("Sever started on port 3000");
});
