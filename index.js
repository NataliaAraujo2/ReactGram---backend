const express = require("express");
const path = require("path");
const cors = require("cors");

const port = 5000;
const app = express();

//Configure json to send text and form data to send images
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(port, () => {
  console.log(`App runing on port 5000`);
});
