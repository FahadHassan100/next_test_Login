import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        min:3,
        max:20
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    isActive:{
        type:Boolean,
        default: false
    }
},{
    timestamps: true
})
export const Users = mongoose.models.Users || mongoose.model("Users", usersSchema)