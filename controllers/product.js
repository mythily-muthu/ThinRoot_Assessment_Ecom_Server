import Product from "../models/Product.js"

//get all products
export const getAllProducts = async (req, res) => {
    try {
        // get all product query
        let allProducts = await Product.find()

        return res.status(200).send({
            products: allProducts
        })
    } catch (error) {
        console.log("error:", error.message)
        res.status(500).json({ error: error.message })
    }
}

//get single product
export const getSingleProduct = async (req, res) => {
    try {
        let params = req.params;
        let productDetails = await Product.findById({ _id: params.productid });
        console.log('productDetails', productDetails)
        return res.status(200).send({
            product: productDetails
        })
    } catch (error) {
        console.log("error:", error.message)
        res.status(500).json({ error: error.message })
    }
}