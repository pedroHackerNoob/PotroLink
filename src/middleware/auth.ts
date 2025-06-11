import type { Request, Response,NextFunction } from 'express';
import jwt from "jsonwebtoken";
import User, {IUser} from "../models/User";
declare global {
    namespace Express {
        interface Request {
            user?: IUser
        }
    }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers.authorization;
    if(!bearer){
        const error = new Error("token not found")
        res.status(401).json({error : error.message})
        return console.log(error.message)
    }
    const [,token] = bearer.split(" ");

    if(!token){
        const error = new Error("token not found")
        res.status(401).json({error : error.message})
        return console.log(error.message)
    }

    try {
        const result = await jwt.verify(token, process.env.JWT_SECRET)
        if(typeof result === 'object' && result.id){
            const user = await User.findById(result.id).select('-password')
            if(!user){
                const error = new Error("user not found")
                res.status(404).json({error : error.message})
                return console.log(error.message)
            }
            req.user = user;
            next()
        }
    }catch (err) {
        console.log(err)
        res.status(500).json({error : err.message})
    }
};