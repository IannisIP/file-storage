const express = require("express");

const app = express();
app.use("/images", express.static(__dirname + "/public"));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log("Server started"));
