const Router = require("express").Router;
const productsController = require("../controllers/products-controller");

const router = new Router();

router.post("/addItem", productsController.addItem);
router.get("/categories/:category", productsController.getItems);
router.post("/addCategory", productsController.addCategory);
router.get("/categories", productsController.getAllCategories);
router.post("/createOrder", productsController.createOrder);

module.exports = router;
