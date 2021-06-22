const mongoose = require("mongoose");
// const passportLocalMongoose = require('passport-local-mongoose');

const tokenSchema = new mongoose.Schema({
  tokenId: {
    type: Number,
    required: true,
  },
  tokenName: {
    type: String,
    required: true,
  },
  tokenAssignedTo: {
    type: String,
    required: true,
  },
  tokenEvent: {
    type: String,
    required: true,
  },
  tokenEventDate: {
    type: Date,
    required: true,
  },
  tokenCreatedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  userHasAttendedEvent: {
    type: Boolean,
    required: true,
    default: false,
  },
});

tokenSchema.post("save", function (token, next) {
  console.log("tokenSchema saved");
  next();
});

module.exports = mongoose.model("volunteerToken", tokenSchema);