import User from "../models/User";
import {Request,Response} from "express"
import {hashPassword} from "../utils/auth";

export const createAccount =  async (req : Request, res : Response) => {
    const {name,email,password } = req.body;
    const userExisted = await User.findOne({email});
    if (name === "" || email === "" || password === ""){
        res.status(204).send("Please fill all the fields")
    }
    else if (userExisted){
        const  error = new Error("User already exists");
        res.status(409 ).json({error : error.message,email})
    }else if (!userExisted ){
        const user = new User(req.body);
        user.password = await hashPassword(password)
        await user.save();
        res.status(201).send("User created successfully:")
    }
}