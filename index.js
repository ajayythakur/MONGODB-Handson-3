const express = require('express');
const body = require("body-parser");
const router = require("./routes/router");
const connect = require("./database/mongoose");
const app = express();


app.use(body.json());
app.use(router);


app.listen(3001, async () => {
    console.log("Server is  listening to Port 3001");
    await connect();
})