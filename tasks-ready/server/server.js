const express = require("express");
const app = express();
const connectDB = require("./config/connection");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");

const PORT = 5000;
//middleware
app.use(express.json());
app.use(cors());
app.use("/", userRoutes);
app.use("/", taskRoutes);
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
