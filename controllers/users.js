
import bcrypt from "bcrypt";
import User from "../models/User.js";


//register user
export const registerUser = async (req, res) => {
    try {
        console.log(req.body)
        let {
            name,
            email,
            password
        } = req.body;
        // generate random string for hash password
        let salt = await bcrypt.genSalt();
        let passwordHash = await bcrypt.hash(password, salt);
        let newUser = new User(
            {
                name,
                email,
                password: passwordHash
            }
        )
        await newUser.save();
        res.status(201).json({ message: "Registered successfully" });

    } catch (error) {
        console.log("error:", error.message)
        res.status(500).json({ error: error.message })

    }
}

//login user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //get user details using gmail
        let userDetails = await User.findOne({ email });
        console.log("userDetails", userDetails)

        if (!userDetails) {
            return res.status(400).send({ message: "Enter registered email" })
        }
        //password check using bcrypt
        const isPasswordMatch = await bcrypt.compare(password, userDetails.password)
        if (!isPasswordMatch) {
            return res.status(400).send({ message: "Invalid Credentials, Enter correct password" })
        }

        return res.status(200).send({
            message: "Logged in successfully",
            userDetails: userDetails
        })

    } catch (error) {
        console.log("error:", error.message)
        res.status(500).json({ error: error.message })
    }
}