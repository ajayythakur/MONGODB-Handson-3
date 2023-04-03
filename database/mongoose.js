const mongoose = require("mongoose");
const url = "mongodb+srv://ajayythakur:Ajay123@cluster0.2btgmaj.mongodb.net/Human_Resource?retryWrites=true&w=majority";

const connect = async () => {
    try {
        console.log("Connecting to mongodb");
        dbConn = await mongoose.connect(url);
        console.log("Connected=>")
    }
    catch (error) {
        console.log("Error in Connecting", error)
    }
}
module.exports = connect;
