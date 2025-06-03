import { CorsOptions } from 'cors'

export const corsConfig : CorsOptions= {
    origin: function (origin, callback) {
        if (origin ==='http://localhost:5173') {
            callback(null, true)
            console.log('allowed')
        }else {
            callback(new Error('Not allowed by CORS'))
            console.log('not allowed')
        }
    }
}