const User=require('../models/userSchema')

//post
const createdetails=async(req,res)=>{
    try{
        const {name,email,message}=req.body
    const user= await User.create({name,email,message})
    await user.save()
    res.status(200).json(user)
    }catch(err){
        res.status(500).json({message:"error in posting the data",err})
    }
}

//getall
const getAll=async(req,res)=>{
    try{
        const user=await User.find()
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({message:"error in getting all data",err})
    }
}

module.exports={createdetails,getAll}