const router = require("express").Router()
const employeeController = require("../controllers/EmployeeController")
router.get("/employees",employeeController.getAllEmployees)
module.exports = router