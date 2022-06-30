export const usersCtrl = {}
import User from "../models/USer.js";

//Register form
usersCtrl.renderSignUpForm = (req,res)=>{
    res.render('./users/signup')
}


//Register
usersCtrl.signUp = async (req,res)=>{
    try {        
        const {name,lastname, email, password, password2} = req.body
        const newUser = await new User ({name,lastname, email, password})
        await newUser.save()
        req.flash('success_msg', 'User created successfully, please login to continue')       
        res.status(201).redirect('/api/v1/users/sign-in')
        } catch (error) {
            res.status(500).json({msg: error})    
        }    
}


//Login form
usersCtrl.renderSignInForm = (req,res)=>{
    res.render('./users/signin')
}

//Login
usersCtrl.signIn = (req,res)=>{
    res.redirect('/api/v1/notes')
}


//Logout
usersCtrl.logOut = (req,res)=>{
    res.session.destroy().redirect('/')
}
