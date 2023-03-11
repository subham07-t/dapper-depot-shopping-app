const express = require("express");
const app = express();

// .env file configuration
require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoDbUrl = process.env.MONGO_DB_URL;

// routes define
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

// DB connection
const connectDB = require("./db/connect");
connectDB(mongoDbUrl)
  .then(() => console.log("DB connect successfully"))
  .catch((error) => console.log(error));

//middleware functions
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

// server listening
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
