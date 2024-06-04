import {Message} from '../models/messageSchema.js'

export const sendMessage=async(req,res,next)=>{
    console.log('Request body:',req.body);
    const{firstname,lastname,Email,Phone,message}=req.body;
    if(!firstname || !lastname || !Email || !Phone || !message){
        return res.status(400).json({
            success:false,
            message:"please fill full form",
        });
    }
    try{
    await Message.create({firstname,lastname,Email,Phone,message});
    res.status(200).json({
        success:true,
        message:"Message send sucessfully"
    });
}catch(error){
    console.log('Error creating message:',error);
    res.status(500).json({
       success:false,
       message:"Failed to send message",
    });
  }
};