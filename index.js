require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;
const app = express();

//Configure json to send text and form data to send images
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Solve cors problems. Remember to change the origin of requests
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//DB connection
require("./config/db.js")

//routes
const router = require("./routes/Router.js");
app.use(router);

app.listen(port, () => {
  console.log(`App runing on ${port}`);
});
