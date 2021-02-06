const express = require("express");

const app = express();
app.use("/images", express.static(__dirname + "/public"));
app.listen(8080, () => console.log("Server started"));
