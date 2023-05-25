
import express from "express";
import { addToCart, deleteSingleCartProduct, getUserCarts } from "../controllers/cart.js";

const router = express.Router();

//create cart (add to cart)
router.post("/add", addToCart)
//get user cart user id
router.get("/:userId", getUserCarts)

// delete cart using product id
router.delete("/:productId", deleteSingleCartProduct)
export default router;