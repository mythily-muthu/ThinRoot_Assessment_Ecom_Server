import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, min: 3, max: 40 },
        email: { type: String, required: true, max: 40, unique: true },
        password: { type: String, required: true, min: 5, max: 40 }

    },
    { timestamps: true }
)
let User = mongoose.model("User", UserSchema);

export default User;