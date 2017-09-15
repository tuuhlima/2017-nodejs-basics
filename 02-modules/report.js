const students = require('./students.json')

let maleCount = 0
let femaleCount = 0
let repeatedNames = {}

for (var i = 0; i < students.length; i++) {
    var student = students[i];
    var firstName = student.name.split(" ")[0]

    if(repeatedNames[firstName] != null) {
        repeatedNames[firstName]++
    }
    else {
        repeatedNames[firstName] = 0
    }

    if(student.genre == 'Female') {
        femaleCount++
    }
    else {
        maleCount++
    }
}

let studentsWithTheSameName = Object.values(repeatedNames)
                              .reduce((previousValue, currentValue) => {
                                return previousValue + currentValue
                              })

console.log("Women Students: " + femaleCount)
console.log("Men Students: " + maleCount)
console.log("Repeated names " + (studentsWithTheSameName * 2))
