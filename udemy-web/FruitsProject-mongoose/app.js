const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
  name:{
    type:String
    // required:true
  },
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review:String
});
const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name:"Apple",
//   rating:8,
//   review:"Peach is yummy."
// });

// fruit.save();
//

const personSchema = new mongoose.Schema({
  name:String,
  age :Number,
  favouriteFruit: fruitSchema
});
const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name:"Jhon",
  age:37
});
// person.save((err)=>{
//   if(err) return console.log(err);
// });
const strawberry = new Fruit({
  name:"strawberry",
  rating:10,
  review:"The best fruit."
});
// strawberry.save();
Person.updateOne({name:"Jhon"}, {favouriteFruit:strawberry},(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("success");
  }
});
const kiwi = new Fruit({
  name:"Kiwi",
  rating:7,
  review:"Not bad."
});
const orange = new Fruit({
  name:"Orange",
  rating:8,
  review:"I like it."
});
const banana = new Fruit({
  name:"Banana",
  rating:7,
  review:"I like it."
});

//insert
// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Succesfully saved all the fruits to fruitsDB.");
//   }
// });
//
//read
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    fruits.forEach(function(item){
      console.log(item.name);
    })
  }
});
//更改
// Fruit.updateOne({_id:"60b636657f3e8f195c43d32c"}, {name:"Peach"}, (err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Success");
//   }
// })
// 刪除
// Fruit.deleteOne({name:"Peach"}, (err)=>{
//   if(err)
//   {
//     console.log(err)
//   }else{
//     console.log("Success")}
//   });
