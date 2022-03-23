const mongoose = require("mongoose");
const { Schema } = mongoose;

const pitchPleaseSchema = new Schema({
  tname: {
    type: String,
  },
  members: {
    type: Array,
  },
});

module.exports = mongoose.model("PitchPlease", pitchPleaseSchema);
