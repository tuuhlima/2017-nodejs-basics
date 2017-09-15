const students = require('./students.json')

let maleCount = 0
let femaleCount = 0

for (var i = 0; i < students.length; i++) {
    var student = students[i];
    if(student.genre == 'Female') {
        femaleCount++
    }
    else {
        maleCount++
    }
}

console.log("Women Students: " + femaleCount)
console.log("Men Students: " + maleCount)
