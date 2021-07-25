if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}
const express = require("express")
const fetch = require("node-fetch")
const app = express()
const port = 3000;
app.use(express.static("public"))



//generator dinosaur name from api
app.get("/dinoname", async(req, res)=>{
    const fetchApi =  await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": process.env.API_KEY,
		"x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
	}
});
    const dinoNameResponse = await fetchApi.json();
    console.log(dinoNameResponse);
    res.json(dinoNameResponse);
});
// search dinosaur image with bing from api
app.get("/dinoimage", async(req, res)=>{
    const fetchApi =  await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=20", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.API_KEY,
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        }
    });
    const dinoImageResponse = await fetchApi.json();
    console.log(dinoImageResponse);
    res.json(dinoImageResponse);
});

app.listen(port, ()=>{
    console.log("server listening at 3000");
})