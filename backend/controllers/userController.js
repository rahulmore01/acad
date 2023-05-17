import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";

// 1) controller function with error handler to get all courses
export const register = catchAsyncError(async (req, res, next) => {
    // keep below 3 items from client/frontend and take other items as default as in model
  const { name, email, password } = req.body;

  // const file =req.file;
  if (!name || !email || !password)
    return next(new ErrorHandler("Please enter all field", 400));
// see if the email u r registering with matches in the database of users
  let user = await User.findOne({ email });
//   if user email matches 
  if (user) return next(new ErrorHandler("User alrady exists", 409));
});
