const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");

const UserModel = new Schema(
  {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    password: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    slug: { slug: "name", type: String },
  },
  { timestamps: true }
);

mongoose.plugin(slug);

module.exports = mongoose.model("User", UserModel);
