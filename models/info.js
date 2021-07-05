const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const InfoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  phoneno: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
    enum: ["10am to 12noon","4pm to 6pm","9pm to 10pm"],
  },
  timestamp: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["Demo requested","Request checked","Demo scheduled","Demo done"],
    required: true,
  },
});

module.exports = Info = mongoose.model("Info", InfoSchema);