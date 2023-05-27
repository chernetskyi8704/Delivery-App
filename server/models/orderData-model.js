const { Schema, model } = require("mongoose");

const orderDataSchema = new Schema({
  userData: {
    address: String,
    email: String,
    firstName: String,
    lastName: String,
    phone: String,
  },
  orderedItems: [
    {
      _id: { type: Schema.Types.ObjectId, ref: "productItem" },
      categoryId: { type: Schema.Types.ObjectId, ref: "category" },
      name: String,
      image: String,
    },
  ],
  totalPrice: Number,
});

const OrderDataModel = model("OrderData", orderDataSchema);

module.exports = OrderDataModel;
