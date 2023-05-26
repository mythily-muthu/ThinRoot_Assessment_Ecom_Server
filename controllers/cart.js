import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        // get user's cart details using userId
        let userCart = await Cart.findOne({ userId });// return user's cart obj 
        console.log("user Carts", userCart);

        // user doesn't have single product then add new cart
        if (!userCart) {
            userCart = new Cart({
                userId,
                products: [{
                    productId,
                    quantity,
                }]
            })

            await userCart.save();
            return res.status(200).send({ message: "product added to new cart successfully" })
        }
        else {
            // check the product already exist in the cart ?
            // its returns exact index position of product ,if product not exist it returns -1;
            const productIndex = userCart.products.findIndex((product) => product.productId.equals(productId));
            if (productIndex !== -1) {
                userCart.products[productIndex].quantity += quantity; // add quantity to particular product
                // return res.status(200).send({ message: "product quantity updated successfully" })
            }
            else {
                //its new product to cart, add it
                userCart.products.push({ productId, quantity });

            }
            await userCart.save();
            return res.status(200).send({ message: "product added to cart successfully" })

        }
    } catch (error) {
        console.log("error:", error.message)
        res.status(500).json({ error: error.message })
    }
}
// get user cart
export const getUserCarts = async (req, res) => {
    try {
        const { userId } = req.params;

        // get user's cart using userId
        let userCart = await Cart.findOne({ userId });
        return res.status(200).send({
            carts: userCart
        })
    } catch (error) {
        console.log("error:", error.message)
        res.status(500).json({ error: error.message })
    }
}

//delte cart
export const deleteSingleCartProduct = async (req, res) => {
    try {
        return res.status(200).send({
            message: "Deleted successfully"
        })
    } catch (error) {
        console.log("error:", error.message)
        res.status(500).json({ error: error.message })
    }
}