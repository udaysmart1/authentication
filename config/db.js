const mongoose = require("mongoose");

//replace the password and username with your credintials in mondodb  (Replace this with your MONGOURI)
const MONGOURI = "mongodb+srv://username:<password>@cluster0.qnudkim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
