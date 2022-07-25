const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const userRouter = require('./routes/userRoutes');
const { sequelize } = require("./config/sequelize.config");

const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Server is running...");
});



app.use("/users",userRouter);
sequelize.sync();
app.listen(PORT, () => {
  console.log("server is running in PORT", PORT);
});
