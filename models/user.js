const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/UsersDatabase")
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("Connection falied", err));

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  imageurl: String,
});

module.exports = mongoose.model("user", userSchema);
