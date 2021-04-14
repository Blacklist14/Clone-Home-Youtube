i = 0
//ANIMAÇÃO-MENU\\
var menu = document.querySelector(".hamburgue").addEventListener("click", () => {
    let move = document.querySelector(".menu-content")
    let somb = document.querySelector("#sombra")
    let hid = document.querySelector(".content-video")
    //MOSTRA-O-MENU\\
    if (i <= 0) {
        hid.style.overflow = "hidden"
        move.style.transform = ("translateX(0px)")
        window.setTimeout(function () {
            somb.classList = ("sombra")
        }, 200)
    }
    //END MOSTRA-O-MENU\\

    //REMOVE-MENU-SE-CLICA-NA-SOMBRA\\
    let remS = document.querySelector("#sombra").addEventListener("click", () => {
        move.style.transform = ("translateX(-300px)")
        hid.style.overflow = ""
        somb.classList.remove("sombra")
        i = 0
    })
    // END REMOVE-MEU-SE-CLICA-NA-SOMBRA

    i++

    //REMOVE-MENU\\
    if (i >= 2) {
        move.style.transform = ("translateX(-300px)")
        hid.style.overflow = ""
        somb.classList.remove("sombra")
        i = 0
    }
    //END-REMOVE-MENU\\
})
//END ANIMAÇÃO-MENU\\
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