export const usersCtrl = {}
import User from "../models/User.js";


//Register form
usersCtrl.renderSignUpForm = (req,res)=>{
    res.render('users/signup', {errors:[] ,name: "", lastname: "", email: ""})
}


//Register
usersCtrl.signup = async (req,res)=>{
    try {        
        const {name,lastname, email, password, password2} = req.body
        
        const errors = []
        if(name.length < 3){
            errors.push({msg: 'The name must be at least 3 characters'})
        }
        if(lastname.length < 3){
            errors.push({msg: "The lastname must be at least 3 characters"})
        }
        if(email.length <= 5 ){
            errors.push({msg: "Email must be at least 6 characters"})
        }
        if(password.length < 8){
            errors.push({msg: "Password must be at least 8 characters"})
        }
        if(password != password2){
            errors.push({msg: "Password do not match"})
        }        
        if(errors.length > 0){
            res.render('./users/signup', {
                errors,
                name,
                lastname,
                email
            })
            console.log(errors)
        }else{
        const newUser = await new User ({name,lastname, email, password})
        await newUser.save()
        req.flash('success_msg', 'User created successfully, please login to continue')       
        res.status(201).redirect('/api/v1/users/sign-in')
        }        
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
