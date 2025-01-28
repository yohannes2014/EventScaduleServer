import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import  userModel  from '../models/usersModel.js';



// Register route
export const userRegister = async (req, res) => {
  try{
    const { username, email, password } = req.body;
    
    const user = await userModel.findOne({ email });

    if (user) {
        return res.json('User email already exists, try another');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new userModel({
        username,
        email,
        password: passwordHash,
        date,
    });

    await newUser.save();
    res.status(201).json('Successfully registered');

}
catch(err){
    console.log(err);
    res.status(500).json({message:"Server error "})
}
};





// Login route
export const usersLogin = async (req, res) => {
  try{
    const { email, password } = req.body;
    
    const userFound = await userModel.findOne({ email });

    if (!userFound) {
        return res.json({login:false,message:'User not found'});
    }

    const passMatch = await bcrypt.compare(password, userFound.password);
    if (!passMatch) {
        return res.json({login:false, message:'Invalid password'});
    }

  const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Set token as a cookie
  res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'yohannes' });

  res.status(201).json({ message: 'Login successful', token });

  }
  catch(err){
    console.error(err);
    res.status(500).json({message: "Server error faild to login"})
  }
};





// Logout route
export const userLogout = (req, res) => {
 try{
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });

 }
 catch(err){
  console.error(err);
  res.status(500).json({message: "Server error logout faild"})
 }
};




