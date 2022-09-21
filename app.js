const firstname = "ax-Sylvester"
const surname = "Hommuk"

let val = firstname + " " + surname

val = "ax-Sylvester "
val += surname

val = firstname.toUpperCase()
val = surname.toLowerCase()

val = surname[0]
val = surname.indexOf("H")
val = surname.lastIndexOf("m")

val = surname.charAt(4)
val = surname.charAt(surname.length - 1)

val = surname.substring(0, 6)
val = surname.slice(0, 4)
val = surname.slice(-3)

const tags = 'JS, HTML, CSS'
val = tags.split(",")


console.log(val[1].trim())