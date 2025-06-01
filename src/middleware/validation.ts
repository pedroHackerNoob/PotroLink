import type { Request, Response } from 'express';
import {validationResult} from "express-validator";

export const handleInput = (req:Request,res:Response) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()){
        res.status(400).json({errors : errors.array()})
        return console.log(errors.array())
    }
};