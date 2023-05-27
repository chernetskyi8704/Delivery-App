const ItemModel = require("../models/productItem-model");
const CategoryModel = require("../models/category-model");
const OrderDataModel = require("../models/orderData-model");

class ItemService {
  async addItem(categoryId, name, image) {
    const item = await ItemModel.create({
      categoryId,
      name,
      image,
    });

    return item;
  }

  async getItems(category) {
    if (category === null) {
      return;
    }

    if (category !== null) {
      const allCategoryItems = await ItemModel.find({
        categoryId: category,
      });
      return allCategoryItems;
    }
  }

  async addCategory(categoryName) {
    const categoryItem = await CategoryModel.create({
      categoryName,
    });

    return categoryItem;
  }

  async getAllCategories() {
    const allCategories = await CategoryModel.find();

    return allCategories;
  }

  async createOrder(orderData) {
    try {
      const newOrder = await OrderDataModel.create(orderData);

      return newOrder;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ItemService();
