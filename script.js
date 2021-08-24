// # voor ID! . voor Class!
const button1 = document.querySelector('#mybutton')
const body = document.querySelector('#body')
const button2 = document.querySelector('#button2')
const change = document.querySelector('.blue-background')

button1.addEventListener('click', function(e){
    body.querySelector('p1').innerHTML = 'button clicked'

})

button2.addEventListener('click', function(a){
    //change.style.background = "green"
    //change.classList.add("red-background")
    change.classList.toggle("red-background")
})
