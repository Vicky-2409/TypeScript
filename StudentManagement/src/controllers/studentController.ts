import express, { request } from "express"
import { StudentModel } from "../db/studentModel"

class StudentController{

    getAllStudents = async (request:express.Request, response:express.Response)=>{
        try {
            const students = await StudentModel.find()
            return response.status(200).json({data:students})
        } catch (error) {
            return response.sendStatus(400);
        }
    }

    getStudent = async (request:express.Request, response:express.Response)=>{
        try {
            const {id} = request.params;
            const student= await StudentModel.findById(id)
            return response.status(200).json({data:student})
        } catch (error) {
            return response.sendStatus(400);
        }
    }

    updateStudent = async (request:express.Request, response:express.Response)=>{
        try {
            const {id} = request.params;
            const {name,age,grade,email} = request.body;
            const student = await StudentModel.findById(id)
            if(student){
                student.name = name;
                student.age = age;
                student.grade = grade;
                student.email = email;
                await student.save()
                return response.status(200).json({data:student, message:"Student Updated"})
            }
            return response.status(400);
            
        } catch (error) {
            return response.sendStatus(400);
        }
    }

    createStudent = async (request:express.Request, response:express.Response)=>{
        try {
            const {name,age,grade,email} = request.body;
            const student = new StudentModel({
                name,
                age,
                grade,
                email
            });
            await student.save()
            return response.status(201).json({data:student, message:"Student Created"})
        } catch (error) {
            return response.sendStatus(400);
        }
    }

    deleteStudent = async (request:express.Request, response:express.Response)=>{
        try {
            const {id} = request.params;
            const student= await StudentModel.findByIdAndDelete({_id: id})
            return response.status(200).json({message:"Student Deleted"})
        } catch (error) {
            return response.sendStatus(400);
        }
    }


}

export default new StudentController();