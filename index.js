const express = require("express");
const { sequelize } = require("./config/sequelize.config");
const app = express();
const PORT = 9000;
app.get("/", (req, res) => {
  res.send("Server is running...");
});

sequelize.sync();
app.listen(PORT, () => {
  console.log("server is running in PORT", PORT);
});
