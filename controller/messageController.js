import {Message} from '../models/messageSchema.js';

export const sendMessage=async(req,res,next)=>{
    const{firstname,lastname,Email,Phone,message}=req.body;
    if(!firstname || !lastname || !Email || !Phone || !message){
        return res.status(400).json({
            success:false,
            message:"please fill full form",
        });
    }
    await Message.create({firstname,lastname,Email,Phone,message});
    res.status(200).json({
        success:true,
        message:"Message send sucessfully"
    });
};