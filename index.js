const express = require("express");
const app = express();
const PORT = 9000;
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(PORT, () => {
  console.log("server is running in PORT", PORT);
});
