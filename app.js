let val

// number -> String
val = String(555)
val = String(4+4)
val = String(5.8)

// boolean -> String
val = String(true)
val = String(false)

// object -> String
val = String(new Date())

// Null -> String
val = String(null)

// Array -> String
val = String([1, 2, 3, 4, 5])

// undefined -> String
val = String(undefined)

// toString()
val = (true).toString()

// String -> Number
val = Number('5')

// Boolean -> Number
val = Number(true) // true == 1, false == 0

// Null -> Number
val = Number(null)

// String -> Number
val = Number("test")

// Array -> Number
val = Number([1, 2, 3])

// String -> Integer
val = parseInt('100.3')

// String -> Float
val = parseFloat('100.30')
console.log(val)