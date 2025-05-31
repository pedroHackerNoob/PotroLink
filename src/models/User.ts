import mongoose from 'mongoose';
export interface IUser {
    name: string,
    email: string,
    password: string,
}
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
    }
})
const User = mongoose.model<IUser>('User', userSchema)
export default User