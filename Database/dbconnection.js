import mongoose from "mongoose";

export const dbconnection=()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_STACK_DOCTOR_APPOINTMENT_APPLICATION",
    })
    .then(()=>{
        console.log("Connected to Database");
    })
    .catch(err=>{
        console.log(`some error occured to the Database ${err}`);
    });
};