const express = require("express")
const router = express.Router();
const studentData = require('../models/studentModel')

// Add Student
router.post('/addstudent', async (req, res) => {
    try {
        const { name, lastName, studentId, department, contact, email } = req.body

        const studentEmail = await studentData.findOne({ email });
        if (studentEmail) {
            return res.status(400).json({ message: 'Email Already Registered.' })
        }
        const existingStudentId = await studentData.findOne({ studentId });

        if (existingStudentId) {
            return res.status(400).json({ message: 'StudentId Already Assigned.' })
        }
        
        const createUser = new studentData({
            name,
            lastName,
            studentId,
            department,
            contact,
            email
        })
        await createUser.save();
        return res.status(200).json({ message: 'Student Registered Successfully' });
    } catch (error) {
        return res.status(400).json({message:error})
    }
})


module.exports=router