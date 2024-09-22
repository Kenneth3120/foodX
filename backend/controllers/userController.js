import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

//Login user
const loginUser = async (req,res) =>{

    const {email, password} = req.body;
    try{
            const user = await userModel.findOne({email});

            if(!user){
                return res.json({success:false, message:"User Not Found"})
            }

            const isMatch = await bcrypt.compare(password,user.password);
            if(!isMatch){
                return res.json({success:false, message:"Incorrect Password"})
            }

            const token = createToken(user._id);
            res.json({success:true, token})
    }
    catch(error){
            console.log(error);
            res.json({success:false, message:"Error"})
    }

}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//Register user
const registerUser = async (req,res) =>{
    const {name,password,email} = req.body;
    try{
        // Check User whether already exists.
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:"User Already Exists"})
        }

        //validate email and password
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid email"})
        }

        if(password.length<8){
            return res.json({success:false, message:"Password should be at least 8 characters long"})
        }

        //Encrypt the password (hashing)
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        //save user in db
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true, message:"User Registered Successfully", token});

    }
    catch(error){
        console.log(error);
        res.json({success:false, message:"Error"})

    }

}

export { loginUser, registerUser}