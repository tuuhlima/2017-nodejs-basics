//console.log('My other module')

function printName(student) {
    console.log(student.name)
}

function fancyPrint(student) {
    console.log("----> " + student.name + " <----")
}

module.exports = {
    printName,
    fancyPrint
}