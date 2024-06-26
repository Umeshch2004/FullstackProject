const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  middleName: { type: String, require: false },
  idNumber: { type: String, require: true },
  contactNumber: { type: String, require: true },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isTeacher: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
