import express from "express";
const router = express.Router()

import { getAllCourses ,createCourse} from "../controllers/courseController.js";
import { Course } from "../models/Course.js";

// get all courses without lectures``
router.route('/courses').get(getAllCourses)
// create new course - only admin
router.route('/createcourse').post(createCourse)
// delete Course, get Course details, 

// add lecture, delete lecture

export default router;