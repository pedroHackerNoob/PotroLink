import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
         const { connection } = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(`Mongo DB Connected: ${url}`)
    }catch(err) {
        console.log(err.message)
        process.exit(1)
    }
}