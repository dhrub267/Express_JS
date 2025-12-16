const mongoose=require('mongoose');

//connecting mongoose with express
// mongoose.connect(`mongodb://127.0.0.1:27017/mongopractise`);
mongoose.connect("mongodb://127.0.0.1:27017/mongopractise");

//creating schema 
const userSchema=mongoose.Schema({
  Name:String,
  Study:String,
  Roll_number:Number,
  Age:Number
})

//creating  modules

 module.exports=mongoose.model("User",userSchema);





























// const mongoose = require('mongoose');

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/mongopractice');
// //   .then(() => console.log("MongoDB connected successfully"))
// //   .catch((err) => console.log(err));

// // Create Schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   email: String
// });

// // Create Model
// module.exports = mongoose.model("User", userSchema);
