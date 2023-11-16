const mongoose = require("mongoose");

const { Schema } = mongoose;

/**
 * keterangan: hadir, ijin, sakit, telat, alfa
 */

const tableSchema = new Schema({
  nis: {
    type: String,
    required: true,
    unique: true,
  },
  tanggal: {
    type: Date,
    required: true,
  },
  keterangan: {
    type: String,
    required: true,
  },
});

const table = mongoose.model("Attendance", tableSchema);

module.exports = table;
