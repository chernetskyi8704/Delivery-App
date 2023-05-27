const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  categoryName: { type: String, unique: true, require: true },
});

module.exports = model("category", CategorySchema);
