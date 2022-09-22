console.log("For loop")

for (let numbers = 0; numbers < 10; i++) {
    if (numbers == 5) {
        continue
    }
    console.log(numbers)
}

console.log("while looping")
let numbers1 = 0;

while (numbers1 < 10) {
    console.log(numbers1)
    let number = numbers1++;
}

console.log("do while loop")
let numbers2 = 11;

do {
    console.log(numbers2)
    numbers2++
} while (numbers2 < 10)

const cars = ["Audi", "Tesla", "BMW"]
cars.forEach(car) => {
    console.log(car)
}

const person = {
    firstname: "Kadi",
    surname: "Tamm",
    age: 40
}

for (let personKey in person) {
    console.log(person[personKey])
}

