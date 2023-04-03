const mongoose = require("mongoose");

const informattionSchema = new mongoose.Schema({
    "firstName": { type: String },
    "lastName": { type: String },
    "salary": { type: Number },
    "department": { type: String },
    "lastCompany": { type: String },
    "lastSalary": { type: Number },
    "overallExp": { type: Number },
    "contactInfo": { type: Number },
    "yearGrad": { type: Number },
    "gradStream": { type: String }
});
const Information = mongoose.model("employee", informattionSchema)
module.exports = { Information };
