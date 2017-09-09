function studentByName(name) {
    return function callback(student) {
        return student.name.toLowerCase().includes(name.toLowerCase())
    }
}

function printName(student) {
    console.log(student.name)
}

function getName() {
    return process.argv[2] || "nobody"
}

module.exports = {
    studentByName,
    printName,
    getName
}