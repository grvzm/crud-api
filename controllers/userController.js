import User from '../models/UserModel.js';

const createUser = async (req,res)=>{
    const newUser = new User(req.body);
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch(err){
        res.json({error:err});
    }
}
const getAllUsers = async (req,res)=>{
    try{
        const users = await User.find({});
        res.status(200).json(users);
    } catch(err){
        res.json({error:err});
    }
}

const findAndUpdateUser = async (req,res)=>{
    const name = req.body.lastname;
    try{
        const updatedUser = await User.findOneAndUpdate(
            {_id:req.params.userid},
            {$set:{lastname:name}},
            {returnOriginal:false}
        );
        res.status(200).json(updatedUser);
    } catch(err){
        res.json({error:err});
    }
}


const findAndDeleteUser = async (req,res)=>{
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.userid)
        res.status(200).json(deletedUser);
    } catch(err){
        res.json({error:err});
    }
}

export {createUser,getAllUsers,findAndUpdateUser,findAndDeleteUser};