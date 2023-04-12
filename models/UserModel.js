import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})

export default mongoose.model('User', userSchema);