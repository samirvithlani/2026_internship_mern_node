//#express require
const express = require("express"); //express module
//create an object of express
const app = express();
const dbConnection = require("./src/utils/DBConnection")
dbConnection() //calling function...




//require all routes
const userRoutes = require("./src/routes/UserRoutes")
//use routes in express
//http://localhost:3000/urls
//app.use(userRoutes)
//http://localhost:3000/user/urls
app.use("/user",userRoutes)

const employeeRoutes = require("./src/routes/EmployeeRoutes")
app.use("/emp",employeeRoutes)




//server creation...
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
