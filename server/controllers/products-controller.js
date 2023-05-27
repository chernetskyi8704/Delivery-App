require("dotenv").config();
const productsService = require("../service/products-service");

class ProductsController {
  async addItem(req, res, next) {
    try {
      const { categoryId, name, image } = req.body;

      const productData = await productsService.addItem(
        categoryId,
        name,
        image
      );

      return res.json(productData);
    } catch (error) {
      next(error);
    }
  }
  async getItems(req, res, next) {
    const { category } = req.params;
    const categoryItems = await productsService.getItems(category);

    return res.json(categoryItems);
    try {
    } catch (error) {
      next(error);
    }
  }

  async addCategory(req, res, next) {
    try {
      const { categoryName } = req.body;

      const categoryData = await productsService.addCategory(categoryName);

      return res.json(categoryData);
    } catch (error) {
      next(error);
    }
  }
  async getAllCategories(req, res, next) {
    try {
      const allCategories = await productsService.getAllCategories();

      return res.json(allCategories);
    } catch (error) {
      next(error);
    }
  }

  async createOrder(req, res, next) {
    try {
      const orderData = req.body;
      const newOrder = await productsService.createOrder(orderData);

      return res.json(newOrder);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductsController();
