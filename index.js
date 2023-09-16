const express = require("express");
const cars = require("./routes/cars");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

app.use("/cars", cars);

const port = process.env.PORT || 9002;

app.listen(port, () => {
  console.log("Starting proxy at : " + port);
});
