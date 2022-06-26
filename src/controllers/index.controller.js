export const indexCtrl = {}



//Home page
indexCtrl.renderIndex = (req,res)=> {
    res.render('index')
}
//About route
indexCtrl.renderAbout = (req,res)=> {
    res.render('about')
}
