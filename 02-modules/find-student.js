const students = require('./students.json')
const { studentByName, getStudentName, printName } = require('./my-module')

const name = getStudentName()
const studentsFound = students.filter(studentByName(name))

if(studentsFound.length > 0) {
    studentsFound.forEach(printName)
}
else {
    console.log('Student not found!')
}
