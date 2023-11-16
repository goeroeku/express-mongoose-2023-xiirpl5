const express = require("express");

const mongoose = require("./config/mongoose");

const attendanceRoute = require("./routes/attendace");

const app = express();

mongoose();
app.use(express.json());

app.use(attendanceRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
