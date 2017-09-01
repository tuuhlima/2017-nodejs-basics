
function getName() {
    return process.argv[2] || "nobody"
}

console.log("Hello " + getName() + "!")
