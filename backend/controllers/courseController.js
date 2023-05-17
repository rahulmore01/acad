import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Course } from "../models/Course.js";
import ErrorHandler from "../utils/errorHandler.js";

// 1) controller function with error handler to get all courses
export const getAllCourses = catchAsyncError(async (req, res, next) => {
    // .select("-lectures"); -- do not show lectures array in find method
  const courses = await Course.find().select("-lectures");
  res.status(200).json({ courses });
});



// 2)controller function with error handler to create course using post method
export const createCourse = catchAsyncError(async (req, res, next) => {
  // array destructuring - req 4 items from body
  const { title, description, category, createdBy } = req.body;

//   took only 4 main keys of the course model bcause others are by default and user will have access to these 4 mostly
  if (!title || !description || !category || !createdBy) {
    return next(new ErrorHandler("all feilds are necessory", 400));
  }

  await Course.create({
    title,
    description,
    category,
    createdBy,
    poster: {
      public_id: "temp",
      url: "temp",
    },
  });
  res.status(201).json({
    success: true,
    message:
      "Course creted successfully, u can now add lectures inside the course",
  });
});
