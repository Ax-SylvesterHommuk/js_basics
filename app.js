let val;

// val = document.getElementById("task-form")
// val = document.getElementById("task-form").id
// val = document.getElementById("task").className

const taskTitle = document.getElementById("task-title")

// style
taskTitle.style.background = '#000000'
taskTitle.style.color = '#fff'
taskTitle.style.padding = '5px'
// taskTitle.style.display = 'none'

// content
taskTitle.textContent = 'Defined Tasks'
taskTitle.textContent = 'My Favorite Tasks'
taskTitle.innerHTML = '<b style="color: red">My Tasks</b>'

val = document.querySelector('#task-title')
val = document.querySelector('.card-title')
val = document.querySelector('ul')
const task = document.querySelector('li')
task.style.color = '#ffffff'

val = document.querySelector('li:last-child')
val = document.querySelector('li:nth-child(odd)').style.background = '#ddd'
val = document.querySelector('li:nth-child(even)').style.background = '#e7e7e7'

// multiple elements

val = document.querySelectorAll('li')
oddLi = document.querySelectorAll('li:nth-child(odd)')

oddLi.forEach((li) => {
    li.style.background = '#00ff66'
})



console.log(val)