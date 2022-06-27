export const indexCtrl = {}



//Home page
indexCtrl.renderIndex = (req,res)=> {
    res.render('pages/index')
    
}
//About route
indexCtrl.renderAbout = (req,res)=> {
    res.render('pages/about')
    
}
