const express = require("express");
const route = express.Router();

const attendanceController = require("../controllers/attendance");

route.get("/attendances", attendanceController.list);

route.get("/attendances/:id", attendanceController.show);

route.post("/attendances", attendanceController.create);

route.put("/attendances/:id", attendanceController.update);

route.delete("/attendances/:id", attendanceController.remove);

module.exports = route;
