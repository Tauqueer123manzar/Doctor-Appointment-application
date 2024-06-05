import mongoose  from "mongoose"; 
import validator from "validator";

const messageSchmea=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        minLength:[3,"First name must contain atleast three character!"],
    },
    lastname:{
        type:String,
        required:true,
        minLength:[3,"First name must contain atleast three character!"],
    },
    Email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"please provide a valid Email"],
    },
    Phone:{
        type:String,
        required:true,
        minLength:[11,"Phone number must contain Exact 11 number!"],
        maxLength:[11,"Phone number must contain Exact 11 number!"],
    },
    message:{
        type:String,
        required:true,
        minLength:[10,"Message must contain atleast 10 charcter!"],
    },
});

const Message = mongoose.model("Message",messageSchmea);
export { Message };