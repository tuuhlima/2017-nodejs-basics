const students = require('./students.json')
const studentName = process.argv[2]

function studentById(id) {
    return function callback(student) {
        return student.id == id
    }
}

function studentByName(name) {
    return function callback(student) {
        return student.name.toLowerCase().includes(name.toLowerCase())
    }
}

const student = students.find(studentByName(studentName))
let output = student ? student.name : 'Student not found'

console.log(output)
