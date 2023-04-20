const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbcon");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

connectDb();

app.use(express.json()); // to parse json data from the client side
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
