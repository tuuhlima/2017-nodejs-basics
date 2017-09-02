const students = require('./students.json')
const studentId = process.argv[2]

function findStudentById (studentId) {
    //console.log("Student ID: " + studentId) //1x
    return function callback(student, index) {
        //console.log('received id: ' + student.id) //nx
        return studentId == student.id
    }
}

const student = students.find(findStudentById(studentId))
let output = student ? student.name : 'Student not found'

console.log(output)
