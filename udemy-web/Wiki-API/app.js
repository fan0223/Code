const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const articleSchema = {
  title: String,
  content: String
};
const Article = mongoose.model("Article", articleSchema);


app.route("/articles")

  .get((req, res) => {
    Article.find({}, (err, foundArticle) => {
      if (!err) {
        res.send(foundArticle);
      } else {
        res.send(err);
      }
    });
  })

  .post((req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    });
    newArticle.save(function(err) {
      if (!err) {
        res.send("Successfully added a new article.")
      } else {
        res.send(err);
      }
    });
  })
//delete all the articles , so not query
  .delete((req, res) => {
    Article.deleteMany((err) => {
      if (!err) {
        console.log("Successfully deleted all artcles.");
      } else {
        console.log(err);
      }
    });
  });

app.route("/articles/:articleTitle")
  .get((req, res) => {
    Article.findOne({
      title: req.params.articleTitle
    }, (err, foundArticle) => {
      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send("No articles matching that title was found.");
      }
    })
  })
  .put((req, res) => {
    Article.update({
        title: req.params.articleTitle
      }, {
        title: req.body.title,
        content: req.body.content
      }, {
        overwrite: true
      },
      (err) => {
        if (!err) {
          res.send("Successfully updated article.");
        }
      }
    )
  })
  .patch((req, res)=>{
    Article.update(
      {title: req.params.articleTitle},
      {$set: req.body},
      (err)=>{
        if(!err){
          res.send("Successfully updated article.")
        }else{
          res.send(err)
        }
      }
    )
  })
  .delete((req, res)=>{
    Article.deleteOne(
      {title: req.params.articleTitle},
      (err)=>{
        if(!err){
          res.send("Successfully deleted the corresponding article.");
        }else{
          res.send(err);
        }
      }
    )
  });









app.listen(3000, (req, res) => {
  console.log("Server started on port 3000.");
});
