const students = require('./students.json')
const { getStudentName, findStudentByName } = require('./student-module')
const { printName, fancyPrint } = require('./printer-module')

const studentName = getStudentName()
const studentsFound = students.filter(findStudentByName(studentName))

studentsFound.forEach(fancyPrint)

if(studentsFound.length === 0)
    console.log('Student not found!')
