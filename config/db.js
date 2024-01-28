const mongoose = require("mongoose");
const dbUser = process.env.DBUSER;
const dbPassword = process.env.DBPASSWORD;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@clusterreactgram.q9j9hej.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("Database Connected");

    return dbConn
  } catch (error) {
    console.log(error)
  }
};

conn()

module.exports = conn