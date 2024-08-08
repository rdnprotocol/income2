const { Router } = require("express");

const {
  getAllCategories,
  createCategory,
  deleteCategory,
} = require("../controllers/category.controller");

const categoryRouter = Router();

categoryRouter
  .get("/", getAllCategories)
  .post("/create", createCategory)
  .delete("/delete", deleteCategory);

module.exports = { categoryRouter };
