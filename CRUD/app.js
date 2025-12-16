const express = require('express');
const app = express();

const userModel = require('./usermodel');


// Home
app.get("/", (req, res) => {
  res.send("Home Page");
});


// 🔹 CREATE → INSERT 5 RECORDS
app.get("/Create", async (req, res) => {
  const users = await userModel.create([
    {
      Name: "Dhrub Kumar Thakur",
      Study: "CSE",
      Roll_number: 101,
      Age: 22
    },
    {
      Name: "Amit Kumar",
      Study: "IT",
      Roll_number: 102,
      Age: 23
    },
    {
      Name: "Rohit Singh",
      Study: "ECE",
      Roll_number: 103,
      Age: 21
    },
    {
      Name: "Neha Sharma",
      Study: "ME",
      Roll_number: 104,
      Age: 22
    },
    {
      Name: "Priya Verma",
      Study: "CIVIL",
      Roll_number: 105,
      Age: 24
    }
  ]);

  res.send(users);
});


// 🔹 READ → ALL RECORDS
app.get("/Read", async (req, res) => {
  const users = await userModel.find();
  res.send(users);
});


// 🔹 UPDATE → findOneAndUpdate (TUMHARA STYLE)
app.get("/Update", async (req, res) => {
  const updatedUser = await userModel.findOneAndUpdate(
    { Roll_number: 101 },        // condition
    { Name: "Rakesh Thakur" },   // update
    { new: true }
  );

  res.send(updatedUser);
});


// 🔹 DELETE → findOneAndDelete
app.get("/Delete", async (req, res) => {
  const deletedUser = await userModel.findOneAndDelete(
    { Roll_number: 101 }
  );

  res.send(deletedUser);
});


// Server
app.listen(3000, () => {
  console.log("http://localhost:3000");
});


























// const express = require("express");
// const userModel = require("./usermodel");
// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hey, how are you!");
// });

// // CREATE user
// app.get("/create", async (req, res) => {
//   const createdUser = await userModel.create({
//     name: "Dhrub Kumar Thakur",
//     age: 22,
//     email: "dhrubkumarthakur267@gmail.com"
//   });
//   res.send(createdUser);
// });

// // UPDATE user
// app.get("/update", async (req, res) => {
//   const updatedUser = await userModel.findOneAndUpdate(
//     { name: "Dhrub Kumar Thakur" },           // Existing user filter
//     { name: "Rakesh Thakur", age: 25, email: "rakesh.gami.com" }, // Update data
//     { new: true }                             // Return updated document
//   );
//   res.send(updatedUser);
// });

// // READ users
// app.get("/read", async (req, res) => {
//   const readUser = await userModel.find();
//   res.send(readUser);
// });

// // DELETE user
// app.get("/delete", async (req, res) => {
//   const deletedUser = await userModel.deleteOne({ name: "Rakesh Thakur" });
//   res.send(deletedUser);
// });

// // Start server
// app.listen(3200, () => {
//   console.log("Server is running on http://localhost:3200");
// });
