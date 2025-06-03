import { CorsOptions } from 'cors'
// cors
export const corsConfig : CorsOptions= {
    origin: function (origin, callback) {
        if (origin === process.env.FRONTEND_URL) {
            callback(null, true)
            console.log('allowed')
        }else {
            callback(new Error('Not allowed by CORS'))
            console.log('not allowed')
        }
    }
}