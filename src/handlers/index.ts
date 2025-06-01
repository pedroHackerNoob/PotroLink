import User from "../models/User";
import type {Request,Response} from "express"
import { validationResult} from "express-validator"
import {hashPassword} from "../utils/auth";
import slug from "slug";

export const createAccount =  async (req : Request, res : Response) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()){
        res.status(400).json({errors : errors.array()})
        return console.log(errors.array())
    }
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
        res.status(201).send(`User created successfully:\n`+user)
        return console.log(`User created successfully:\n`+user)
    }
}