// const express=require("express");
// const app=express();

// //setting up parser for form
// //for converting unreadable form into readable form

// app.use(express.json());//for body and json
// app.use(express.urlencoded({extended:true}));

// app.get("/",(req,resp)=>{
//     resp.send("It is working");
// })

// app.listen(3000,()=>{
//     console.log("http://localhost:3000");
// })

//-----------------------------------------------------------

//setting up ejs for ejs page
//step 1:intstall ejs using npm

// const express=require("express");
// const app=express();

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.set('view engine','ejs');

// app.get("/",(req,resp)=>{
//     resp.render("index");
// })

// app.listen(3000,()=>{
//     console.log("http://localhost:3000");
// // })
// ----------------------------------------------------------------

// setting up public static file
//ie we can write code of css,javascript,-----
// const express = require("express");
// const app = express();
// const path = require("path");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ✅ yahan Path → path
// app.use(express.static(path.join(__dirname, "public")));

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.listen(3000, () => {
//   console.log("http://localhost:3000");
// });
// -----------------------------------------

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("index");
});

app.get("/Profile/:username", (req, res) => {
//   res.send(req.params);  
//   res.send(`${req.params.username}`);
  res.send(`Welcome, ${req.params.username}`);

});

app.get("/Profile/:username/:Age", (req, res) => {
//   res.send(req.params);  
//   res.send(`${req.params.username}`);
  res.send(`Welcome, ${req.params.username} of age ${req.params.Age}`);

});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
