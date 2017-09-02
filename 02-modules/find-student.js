const students = require('./students.json')

let studentId = process.argv[2]
let studentName = 'Student not found'

for (var i = 0; i < students.length; i++) {
    var student = students[i];
    if(student.id == studentId) {
        studentName = student.name
        break
    }
}

console.log(studentName)