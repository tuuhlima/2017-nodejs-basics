const students = require('./students.json')
const studentId = process.argv[2]

function findStudentById(studentId) {
    return function callback(student) {
        return studentId == student.id
    }
}

const student = students.find(findStudentById(studentId))
let output = student ? student.name : 'Student not found'

console.log(output)
