import mongoose from 'mongoose';
import colors from "colors";

export const connectDB = async () => {
    try {
         const { connection } = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(colors.cyan.bold(`Mongo DB Connected: ${url}`))
    }catch(err) {
        console.log(colors.bgRed(`\n${err.message}\n`))
        process.exit(1)
    }
}