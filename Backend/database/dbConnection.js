import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"RESTAURANT"
    }).then(()=>{
        console.log("Connected TO Database Successfully");
    }).catch(err=>{
        console.log("ERROR connecting database: "+err)
    })
};

