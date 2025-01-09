import {Request, Response} from "express";
import { newUser } from "../types/types";
import userModel from "../models/usersModel";

// function to signup users

export const  usersSignup = (req:Request<{},{}, newUser>, res:Response)=>{ 
    const {name, email, password, date} = req.body;
const myUser:newUser = {
    name, // is the same as name : name
    email,
    password,
    date
}
  userModel.create(myUser).then
   (user=> res.json({message:"Created",user})).catch
   (err=> res.json(err));
};


export const usersLogin = (req:Request, res:Response) => {
    const {email, password} = req.body;

    userModel.findOne({email:email}).then(
        (user)=>{
            if(user){
                if(user.password === password){
                    res.send({message:'Succes'})          //  login
                }
                else {
                    res.send({message:"Password not mutch"})  // here username correct but password
                }
            }
            else{
                res.send({message:"username not found"})
            }
        }
        
    )

}

export const listUsers = (req:Request, res:Response) => {
        userModel.find({}).
            then(user => res.json(user)).
            catch(err => res.json(err));
    };
    
    



  