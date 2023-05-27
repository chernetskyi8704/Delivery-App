const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  categoryId: { type: Schema.Types.ObjectId, ref: "category", required: true },
  name: { type: String, unique: true, require: true },
  image: { type: String, require: true },
  price: { type: String, require: true },
});

module.exports = model("productItem", UserSchema);
