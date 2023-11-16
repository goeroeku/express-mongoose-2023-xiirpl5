const Attendance = require("../models/attendance");

const list = async (req, res) => {
  const tables = await Attendance.find();

  res.status(200).json({ message: "success", data: tables });
};

const show = async (req, res) => {
  const { id } = req.params;

  const table = await Attendance.findById(id);

  res.status(200).json({ message: "success", data: table });
};

const create = async (req, res) => {
  const { body } = req;

  const table = await Attendance.create(body);

  res.status(201).json({ message: "success", data: table });
};
const update = async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  const table = await Attendance.findByIdAndUpdate(id, body, { new: true });
  res.status(202).json({ message: "success", data: table });
};
const remove = async (req, res) => {
  const { id } = req.params;

  await Attendance.findByIdAndDelete(id);
  res.status(204).json({ message: "success", data: {} });
};

module.exports = { list, show, create, update, remove };
