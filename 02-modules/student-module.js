//console.log('My module')

//private
const thisIsPrivate = "Encapsulated variable"

function findStudentByName(studentName) {
    return function callback(student) {
        if(!studentName) return false
        return student.name.toLowerCase().includes(studentName.toLowerCase())
    }
}

function getStudentName() {
    return process.argv[2] || 'nobody'
}

//public
module.exports = {
    findStudentByName,
    getStudentName
}