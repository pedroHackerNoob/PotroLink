import User from "../models/User";
import type {Request,Response} from "express"
import {checkPassword, hashPassword} from "../utils/auth";
import slug from "slug";
import {generateJWT} from "../utils/jwt";

export const createAccount =  async (req : Request, res : Response) => {
    const {email,password} = req.body;
    const handle = slug(req.body.handle,"_")
    const handleExisted = await User.findOne({handle});
    // handle existed
    if (handleExisted){
        const error = new Error(" Handle already existed")
        res.status(409).json({error : error.message})
        return console.log(error.message)
    }
    const userExisted = await User.findOne({email});
    // user existed
    if(userExisted){
        const error = new Error(" email already existed")
        res.status(409).json({error : error.message})
        return console.log(error.message)
    }
    else if (!handleExisted && !userExisted){
        const user = new User(req.body);
        user.password = await hashPassword(password)
        user.handle = handle;
        await user.save();
        res.status(201).send(`User created successfully`)
        return console.log(`User created successfully`)
    }
}

export const login = async (req : Request, res : Response) => {
    //email
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if (!user){
        const error = new Error(" email not existed")
        res.status(404).json({error : error.message})
        return console.log("email not found")
    }
    //password
    const isPasswordCorrect=await checkPassword(password, user.password)
    if (!isPasswordCorrect){
        const error = new Error(" password incorrect")
        res.status(401).json({error : error.message})
        return console.log("password failed log")
    }

    const token = generateJWT({id: user._id})
    res.send("login success\n"+token)
    return console.log("login success log")
}

export const getUser = async (req : Request, res : Response) => {
    res.json(req.user)
    return console.log('desde USer')

}