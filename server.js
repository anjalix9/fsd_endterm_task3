const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

// register routes
app.use("/login", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
