i = 0
var menu = document.querySelector(".hamburgue").addEventListener("click", () => {
    var move = document.querySelector(".menu-content")
    if (i <= 0) {
        move.style.transform = ("translateX(-300px)")
    }
    i++
    if (i >= 2) {
        move.style.transform = ("translateX(0px)")
        i = 0
    }
})
n = 0
var op1 = document.querySelector(".option1").addEventListener("click", () => {
    var op0 = document.querySelector(".option1")
    if (n <= 0) {
        op0.style.backgroundColor = ("rgba(255, 255, 255, 0.171)")
    }
    n++
    if (n >= 2) {
        op0.style.backgroundColor = ("transparent")
        n = 0
    }
})