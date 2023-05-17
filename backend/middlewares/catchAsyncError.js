export const catchAsyncError=(passedFunction)=> (req,res,next)=>{
    Promise.resolve(passedFunction(req,res,next)).catch(next);
    // next keyword is used to call next middleware after workdone by this middleware

}