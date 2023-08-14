const mongoose = require("mongoose")
const connectionString = process.env.DB_CONNECTION
mongoose.set("strictQuery", true)

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("T'es co, maintenant va courir"))
  .catch((errorMessage) => console.error(errorMessage))