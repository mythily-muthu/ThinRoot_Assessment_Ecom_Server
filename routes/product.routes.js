
import express from "express";
import { getAllProducts, getSingleProduct } from "../controllers/product.js";

const router = express.Router();

// get all products route
router.get("/", getAllProducts)

// get single product route
router.get("/:productid", getSingleProduct)

export default router;

