
import express from "express";
import { addToCart, clearCart, deleteSingleCartProduct, getUserCarts } from "../controllers/cart.js";

const router = express.Router();

//create cart (add to cart)
router.post("/add", addToCart)
//get user cart user id
router.get("/:userId", getUserCarts)

// delete user cart using cart id;
router.put("/clearcart/:userId", clearCart)

// delete cart product using product id
router.delete("/:userId/:productId", deleteSingleCartProduct);


export default router;