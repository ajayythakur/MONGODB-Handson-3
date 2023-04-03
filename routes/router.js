const express = require("express");
const employee = require("../controller/employee")

const router = express.Router();

router.post("/insert", employee.empDetails);
router.get("/find", employee.allDocuments)
router.get("/salary", employee.salaryQuery)
router.get("/expQuery", employee.experienceQuery)
router.get("/gradexpQuery", employee.gradExpquery)
router.get("/salaryUpdate", employee.salaryUpdate)
router.get("/delete", employee.deleteQuery)


module.exports = router;