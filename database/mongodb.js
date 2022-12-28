const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);
// this keeps the database connection open continuosly
function connectToMongoDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MONGODB connected");
    })

    .catch((error) => {
      console.log(`DB connection failed ${error}`);
    });
}
module.exports = connectToMongoDB;
