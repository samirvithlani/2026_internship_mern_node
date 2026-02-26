//#express require
const express = require("express"); //express module
//create an object of express
const app = express();

//API CREATION...

//http://localhost:3000/test
app.get("/test", (req, res) => {
  console.log("test api called....");
  res.send("Test Api Called...");
});

const user = {
  id: 101,
  name: "amit",
  age: 23,
  salary: 23000,
};
//http:localhost:3000/user
app.get("/user", (req, res) => {
  //res.json(user)
  res.json({
    message: "user fetched successfully!!",
    data: user,
  });
});

//dummy users array
const users = [
  { id: 1, name: "raj", age: 23 },
  { id: 2, name: "parth", age: 24 },
  { id: 3, name: "jay", age: 25 },
];

//http:localhost:3000/users
app.get("/users",(req,res)=>{
    res.json({
        message:"all users",
        data:users
    })
})


//url -->data
//http:localhost:3000/user/1234
app.get("/user/:id",(req,res)=>{
    //:id -->wild char --.
    //req.params -->id
    //req.params -->{} --> {id:..}
    console.log(req.params)
    console.log(req.params.id)

    //task --> id -->find that id record from dummy array
    //if record found send as response ..
    //if user not found from id / it is not available send response message user not found with id
    //HINT : find function
    //Note: dont forget to send response from both if and else

    res.json({
        message:"user fetched...",
    })
})


//server creation...
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
