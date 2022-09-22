const person = {
    firstname: "Kadi",
    surname: "Tamm",
    age: 40,
    email: "kadi.tamm@gmail.com",
    hobbies: ["tennis", "korvpall"],
    address: {
        city: "Võru",
        county: "Võrumaa"
    },
    getBirthYear: function (){
        return 2022 - this.age
    }
}

let val
val = person
val = person["firstname"]
val = person["hobbies"][1]
val = person.address.city
val = person.address["city"]
val = person.getBirthYear()
console.log(val)

// for (let i = 0; i < person.hobbies.length; i++){
//     console.log(person.hobbies[i])
// }

// person.hobbies.forEach(function (hobbie, index, hobbies){
//     console.log(hobbie + " on element indeksiga " + index)
//     console.log(hobbies)
// })

person.hobbies.forEach((hobbie, index) => {
    console.log(hobbie + " on element indeksiga " + index)
})