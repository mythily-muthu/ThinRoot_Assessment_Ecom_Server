import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: String,
        category: String,
        image: String,

    },
    { timestamps: true }
)

const Product = mongoose.model("Product", ProductSchema);
export default Product;