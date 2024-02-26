const express = require("express");
const { connect } = require("mongoose");
require("dotenv").config();
const usercontroller = require("./routes/usercontrollers");
const items = require("./routes/Items");
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(cors());
app.use("/api/user", usercontroller);
app.use("/api/products", items);

connect(process.env.URI)
  .then(
    app.listen(3000, () =>
      console.log(`server running on port ${process.env.port}`)
    )
  )
  .catch((error) => console.log(error));
