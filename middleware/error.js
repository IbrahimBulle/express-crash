// const error =(err,req,res,next)=>{
//     if(err.status){
//         res.status(err.status).json({msg:err.message})
//     }
//     res.status(500).json({msg:err.message})
// }
// export default error
const error = (err, req, res, next) => {
    // Check if headers have already been sent to avoid setting them again
    if (res.headersSent) {
      return next(err);  // Pass the error to the default error handler
    }
  
    // If there's a status property, use it; otherwise, set to 500
    res.status(err.status || 500).json({ msg: err.message });
  };
  
  export default error;
  