import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
//module imports
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";

try {
    const app = express();

    const PORT = process.env.PORT || 8000;
    app.use(express.json())
    app.use(cors())
    //db connection using mongoose driver
    mongoose.set('strictQuery', true); // avoid deprecate warning

    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.log("Did not connect", error.message)
    })

    //middlewares
    app.use("/api/auth", userRoutes)
    app.use("/api/products", productRoutes);
    app.use("/api/carts", cartRoutes)

    //start server
    app.listen(PORT, function () {
        console.log('Server is running on port ', PORT);
    });

    // verfication in browser
    app.get("/", (req, res) => {
        res.status(200).send("<h2 >Server is running successfully </h2>");
    });
} catch (error) {
    console.log("error in connecting db", error.message);
}
//


