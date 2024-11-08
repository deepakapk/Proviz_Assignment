import mongoose from "mongoose";
import validator from "validator";

const ApplicaionSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required: true,
        minLength:[3,"First Name Must Contain At least 3 characters"]
    },
    lastname:{
        type:String,
        required: true,
        minLength:[3,"First Name Must Contain At least 3 characters"]
    },
    email:{
        type:String,
        required:true,
        validate: [validator.isEmail, "Please Provide a valid Email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone Number must contain 10 digits"],
        maxLength:[10,"Phone Number must contain 10 digits"]
    },
    message:{
        type:String,
        required: true,  
    }
})

export const Application = mongoose.model("Application", ApplicaionSchema)