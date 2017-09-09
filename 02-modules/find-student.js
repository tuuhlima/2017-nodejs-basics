const students = require('./students.json')
const { getStudentName, findStudentByName } = require('./student-module')
const { printName } = require('./printer-module')

const studentName = getStudentName()
const studentsFound = students.filter(findStudentByName(studentName))

studentsFound.forEach(printName)

if(studentsFound.length === 0)
    console.log('Student not found!')
