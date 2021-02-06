const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use("/images", express.static(__dirname + "/public"));
app.use("/project", express.static(__dirname + "/public"));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log("Server started"));
