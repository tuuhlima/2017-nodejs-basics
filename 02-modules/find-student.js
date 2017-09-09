const students = require('./students.json')
const studentName = process.argv[2]

function studentByName(name) {
    return function callback(student) {
        const regexp = new RegExp(name, 'i')
        return regexp.test(student.name)
    }
}

function printName(student) {
    console.log(student.name)
}

const studentsFound = students.filter(studentByName(studentName))

if(studentsFound.length > 0) {
    studentsFound.forEach(printName)
}
else {
    console.log('Student not found!')
}
