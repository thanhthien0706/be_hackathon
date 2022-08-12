const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://thanhthien123:n4d1r1KYHKmGMrtu@cluster0.pscldft.mongodb.net/DB_HACKATHON?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connect mongo successfully ");
  } catch (e) {
    console.log("Connect mongo failed: " + e.message);
  }
}

module.exports = connectDatabase;
