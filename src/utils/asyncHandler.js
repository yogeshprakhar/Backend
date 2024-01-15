const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
// (err,req,res,next) if i am using next it means it giving direction to go to the next function (my work is done)
export { asyncHandler };

// same upper function in try catch way
// const asyncHandler = (fn) => async(req,res,next) =>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }
