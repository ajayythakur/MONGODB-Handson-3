const { Information } = require("../models/employee");
const empDetails = async (req, res) => {
    const empData = req.body;
    const employee = new Information({
        "firstName": empData.firstName,
        "lastName": empData.lastName,
        "salary": empData.salary,
        "department": empData.department,
        "lastCompany": empData.lastCompany,
        "lastSalary": empData.lastSalary,
        "overallExp": empData.overallExp,
        "contactInfo": empData.contactInfo,
        "yearGrad": empData.yearGrad,
        "gradStream": empData.gradStream
    });

    await employee.save();
    res.json({
        status: 200,
        message: "Employee Detials has been saved",
        data: employee
    })
}

const allDocuments = async (req, res) => {
    const query = req.query;
    const result = await Information.find()
    console.log(result);
    return res.status(200).send({ message: "DATA =>", result })
}

const salaryQuery = async (req, res) => {
    const query = { salary: { $gt: '30000' } };
    const result = await Information.find(query)
    console.log(result);
    return res.status(200).send({ message: "DATA =>", result });
}

const experienceQuery = async (req, res) => {
    const query = { overallExp: { $gt: '2' } };
    const result = await Information.find(query)
    console.log(result);
    return res.status(200).send({ message: "DATA =>", result });
}

const gradExpquery = async (req, res) => {
    const query = ({ yearGrad: { $gt: '2015' } } && { overallExp: { $gt: '1' } });
    const result = await Information.find(query)
    console.log(result);
    return res.status(200).send({ message: "DATA =>", result });
}


const salaryUpdate = async (req, res) => {
    const query = ({ "salary": 70000 }, { '$set': { "salary": 65000 } });
    const result = await Information.updateMany(query)
    console.log(result);
    return res.status(200).send({ message: "DATA =>", result });
}


const deleteQuery = async (req, res) => {
    const query = ({ lastCompany: "Y" });
    const result = await Information.deleteMany(query)
    console.log(result);
    return res.status(200).send({ message: "DATA =>", result });
}
module.exports = { empDetails, allDocuments, salaryQuery, experienceQuery, gradExpquery, salaryUpdate, deleteQuery }