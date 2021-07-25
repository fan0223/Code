const express = require("express");
const bodyparser = require("body-parser");
const data = require(__dirname + "/data.js")


const app = express();
app.use(express.static("public"))
app.use(bodyparser.urlencoded({
  extended: true
}));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const day = data.getData();
  res.render("list", {
    ListTitle: day,
    newListItems: items
  });
});
app.post("/", (req, res) => {
  const item = req.body.newitem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

// work list
app.get("/work", (req, res) => {
  res.render("list", {
    ListTitle: "Work",
    newListItems: workItems
  })
});

app.get("/about", (req,res)=>{
  res.render("about")
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  console.log("Server started on port 3000");
});
