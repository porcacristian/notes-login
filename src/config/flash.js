
export const flashMessages= (req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg')
    res.locals.errors_msg = req.flash('errors_msg')
    res.locals.error = req.flash('error')
    res.locals.user = req.user || null
    next()
}