export default (router)=>{
    (req,res,next)=>{
        next()
       res.render('position')
    }
}
