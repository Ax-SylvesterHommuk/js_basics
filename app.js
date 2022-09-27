let val;

const list = document.querySelector('ul')
const listItems = document.querySelector('li')

val = list
val = list.childNodes
val = list.childNodes[1]
val = list.childNodes[1].nodeName
val = list.childNodes[1].nodeType

val = list.children
val = list.children[1].children

val = list.lastChild
val = list.lastElementChild

val = list.childElementCount

val = listItems.parentNode
val = listItems.parentElement
val = listItems.parentElement.parentElement

val = listItems.nextSibling
val = listItems.nextElementSibling
val = listItems.nextElementSibling.nextElementSibling


console.log(val)