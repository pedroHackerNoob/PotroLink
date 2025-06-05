import colors from "colors";
import jwt, {JwtPayload} from "jsonwebtoken";

export const generateJWT =( payload: JwtPayload )=> {
    console.log( colors.blue('token generado') )
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "180d"});
}