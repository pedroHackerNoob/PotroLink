import type { Request, Response,NextFunction } from 'express';
import {validationResult} from "express-validator";

export const handleInput = (req:Request,res:Response,next:NextFunction) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()){
        res.status(400).json({errors : errors.array()})
        return console.log("from validation.ts\n",errors.array())
    }
    next();
};