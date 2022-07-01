export const helpers = {}
 
helpers.isAuthenticated = (req,res,next) =>{
    if(req.isAuthenticated()){
        
        return next()
    }
    req.flash('errors_msg', 'Not authorized')
    res.redirect('/api/v1/users/sign-in')
}

