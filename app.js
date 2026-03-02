//#express require
const express = require("express"); //express module
//create an object of express
const app = express();
const dbConnection = require("./src/utils/DBConnection")
dbConnection() //calling function...




const employeeRoutes = require("./src/routes/EmployeeRoutes")
app.use("/emp",employeeRoutes)


const productRoutes = require("./src/routes/ProductRoutes")
app.use("/prod",productRoutes)



//server creation...
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
