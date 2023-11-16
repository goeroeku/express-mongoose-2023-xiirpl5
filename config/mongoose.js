const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/siakad-xiirpl5");

  console.log("Connected to Database...");
};

module.exports = main;
