export const validatorForm = (name,lastname, email, password, password2)=>{
    let errors = []
    if(name.length < 3){
        errors.push(req.flash('error_msgs', 'The name must contain more than 3 letters'))
    }
    if(lastname.length < 3){
        errors.push(req.flash('error_msgs', 'The name must contain more than 3 letters'))
    }
    if(email.length <= 5 ){
        errors.push(req.flash('error_msgs', 'The name must contain more than 3 letters'))
    }
    if(password.length < 8){
        errors.push(req.flash('error_msgs', 'The name must contain more than 3 letters'))
    }
    if(password !== password2){
        errors.push(req.flash('error_msgs', 'The name must contain more than 3 letters'))
    }

    if(errors.length > 0){
        return errors
    }
}