let red = document.querySelector(".red")
let yellow = document.querySelector(".yellow")
let green = document.querySelector(".green")

let lightRed = "rgb(241, 92, 92)"
let lightYellow = "rgb(231, 231, 55)"
let lightGreen = "rgb(84, 196, 84)"

setInterval(HandleRed, 3000)
setInterval(HandleYellow, 6000)
setInterval(HandleGreen, 9000)

function HandleRed() {
    red.style.backgroundColor = "red"
    red.style.backgroundColor = "lightRed"
    yellow.style.backgroundColor = "lightYellow"
    green.style.backgroundColor = "lightgreen"
    
}
function HandleYellow() {
    red.style.backgroundColor = "lightRed"
    yellow.style.backgroundColor = "yellow"
    green.style.backgroundColor = "lightgreen"
}
function HandleGreen() {
    red.style.backgroundColor = "lightRed"
    yellow.style.backgroundColor = "lightYellow"
    green.style.backgroundColor = "green"
}