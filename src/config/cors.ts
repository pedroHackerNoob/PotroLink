import { CorsOptions } from 'cors'
// cors
export const corsConfig : CorsOptions= {
    origin: function (origin, callback) {
        const whitelist = [process.env.FRONTEND_URL]

        if(process.argv[2] ==='--api') {
            whitelist.push(undefined)
            console.log(whitelist)
        }
        if (whitelist.includes(origin)) {
            callback(null, true)
            console.log('Connection allowed by CORS')
        }else {
            callback(new Error('Not connection allowed by CORS'))
            console.log('not allowed')
        }
    }
}