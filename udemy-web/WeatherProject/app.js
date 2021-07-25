const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/index.html")
});


app.post("/", (req, res)=>{

  const query = req.body.cityName;
  const apiKey ="19d9ad7905f52d9b0f2c49f15dba2cfd";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid="+ apiKey +"&units="+unit;
//api connection
  https.get(url, (response)=>{
    console.log(response.statusCode);

    response.on("data", (data)=>{
      var weatherData = JSON.parse(data);
      console.log(weatherData);
      var temp = weatherData.main.temp;
      var description = weatherData.weather[0].description;
      console.log(description);
      var weatherIcon = "http://openweathermap.org/img/wn/"+ weatherData.weather[0].icon +"@2x.png"
      res.write("<p>The weather is currently "+ description +"</p>");
      res.write("<h1>The temperature in " + query + " is "+ temp +"</h1>");
      res.write("<img src="+ weatherIcon +">");
      res.send();
    });

  });
}
);







app.listen(3000, ()=>{
  console.log("Server is running on port 3000");
})
