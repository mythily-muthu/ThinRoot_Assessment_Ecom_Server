import mongoose from "mongoose";

//create cart schema
let cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        products: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true,
                    default: 1
                }
            }
        ],

    },
    { timestamps: true }
)
//create model
let Cart = mongoose.model("Cart", cartSchema);
export default Cart;