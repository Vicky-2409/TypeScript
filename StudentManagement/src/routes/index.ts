import express from "express";
import studentController from "../controllers/studentController";

const router = express.Router()

router.get('/student', studentController.getAllStudents)
router.get('/student/:id', studentController.getStudent)
router.post('/student', studentController.createStudent)
router.put('/student/:id', studentController.updateStudent)
router.delete('/student/:id', studentController.deleteStudent)

export default router;