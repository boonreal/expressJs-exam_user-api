// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../configs/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const categoryProduct = db.define(
  "tbl_product_categories",
  {
    // Define attributes
    category_products_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    category_products_name: {
      type: Sequelize.STRING,
    },
    category_products_description: {
      type: Sequelize.STRING,
    },
    category_products_thumbnail: {
      type: Sequelize.STRING,
    },
    category_products_slug: {
      type: Sequelize.STRING,
    },
    category_products_status: {
      type: Sequelize.INTEGER,
    },
    category_products_parent_id: {
      type: Sequelize.INTEGER,
    },
    created_by: {
      type: Sequelize.INTEGER,
    },
    updated_by: {
      type: Sequelize.INTEGER,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
  }
);

// Export model Post
export default categoryProduct;
