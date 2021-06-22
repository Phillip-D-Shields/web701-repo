const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventId: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  userRole: {
    type: Boolean,
    required: true,
    default: false,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventTokenCreationDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

eventSchema.post("save", function (event, next) {
  console.log("eventSchema saved");
  next();
});

module.exports = mongoose.model("eventToken", eventSchema);
