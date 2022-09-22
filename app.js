/*
if (condition) {
    // if statements
} else {
    // else statements
}

== equals -> ===
!= dosen't equal -> !==
 */

let personID; // 55

if (personID === undefined){
    console.log("person is missing ID")
} else if (personID !== undefined) {
    console.log("person has ID")
} else {
    console.log("there was an error")
}

console.log(personID)

const color = "green"

if (color == "red") {
    console.log("Stop!")
} else if (color == "yellow") {
    console.log("Attention!")
} else if (color == "green") {
    console.log("Go!")
} else {
    console.log("Error!")
}

/*
condition1 && condition2 - and
condition1 || condition2 - and
 */

const name = "Kadi"
const age = 57

if (age > 0 && age <= 12) {
    console.log(`${name} on laps`)
} else if (age > 12 && age <= 18) {
    console.log(`${name} on nooruk`)
} else {
    console.log(`${name} on täiskasvanu`)
}

let id = 5

if (id === 100) {
    console.log("ok")
} else {
    console.log("not")
}

// ? - ternary
console.log(id === 100 ? 'Ok' : 'Not')

// switch
const color = "green"

switch (color) {
    case "red":
        console.log("Stop!")
        break;
    case "yellow":
        console.log("Start stopping!")
        break
    case "green":
        console.log("Go!")
        break;
    default:
        console.log("error")
        break;
}