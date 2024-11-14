import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,  
    },
    lastName:{
        type:String,
        required:true,  
    },
    email:{
        type:String,
        required:true, 
        validate:[validator.isEmail,"Provide Valid Email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone Number can contain only 10"],
        minLength:[10,"Phone Number can contain only 10"]  
    },
    time:{
            type:String,
            required:true,
    },
});

export const Reservation=mongoose.model("Reservation",reservationSchema);