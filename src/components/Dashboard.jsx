import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import AddStudent from './AddStudent';
import StudentList from './StudentList';
import data from '../data/students'

const Dashboard = () => {
  const [students,setStudents]=useState(data)

  const addStudent=(name,age,major,university,averageGrade)=>{
    const newStudent={
      id:uuidv4(),name,age,major,university,averageGrade
    }
    setStudents((prev)=>[...prev,newStudent])
  }

  const removeStudent=(studentId)=>{
    const updatedStudent = students.filter((student) => student.id !== studentId)
    setStudents(updatedStudent)
  }

  const editStudent=(studentId)=>{
    
  }

  return (
    <div className='dashboard-container'>
    {/* <h2>Dashboard</h2> */}
    <AddStudent addStudent={addStudent} />
    <StudentList students={students} removeStudent={removeStudent} editStudent={editStudent} />
    </div>
  )
}

export default Dashboard