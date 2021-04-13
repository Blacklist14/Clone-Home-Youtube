i = 0
var menu = document.querySelector(".hamburgue").addEventListener("click", () => {
    var move = document.querySelector(".menu-content")
    var somb = document.querySelector("#sombra")
    var hid = document.querySelector(".content-video")
    if (i <= 0) {
        hid.style.overflow ="hidden"
        move.style.transform = ("translateX(0px)")
        window.setTimeout(function(){
            somb.classList=("sombra")
        },200)
    }
    i++
    if (i >= 2) {
        move.style.transform = ("translateX(-300px)")
        hid.style.overflow =""
        somb.classList.remove("sombra")
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