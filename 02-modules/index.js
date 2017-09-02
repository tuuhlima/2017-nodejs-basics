const students = require('./students.json')
console.log('Total of students: ', students.length)

// for (var i = 0; i < students.length; i++) {
//     var student = students[i];
//     console.log(student.name)
// }

// function printName (student) {
//     console.log(student.name)
// }

const printName = (student) => console.log(student.name)

students.forEach(printName)
