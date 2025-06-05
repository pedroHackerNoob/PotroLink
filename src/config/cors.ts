import { CorsOptions } from 'cors'
import colors from "colors";
// cors
export const corsConfig : CorsOptions= {
    origin: function (origin, callback) {
        const whitelist = [process.env.FRONTEND_URL]
        if(process.argv[2] ==='--api') {
            whitelist.push(undefined)
        }
        if (whitelist.includes(origin)) {
            callback(null, true)
            console.log(colors.bgGreen('Connection allowed by CORS'))
        }else {
            callback(new Error('Not connection allowed by CORS'));
            console.log(colors.bgRed('not allowed'))
        }
    }
}