//#express require
const express = require("express"); //express module
//create an object of express
const app = express();

//require all routes
const userRoutes = require("./src/routes/UserRoutes")
//use routes in express
app.use(userRoutes)

const employeeRoutes = require("./src/routes/EmployeeRoutes")
app.use(employeeRoutes)

//server creation...
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
