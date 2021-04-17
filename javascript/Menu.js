i = 0
//ANIMAÇÃO-MENU\\
var menu = document.querySelector(".hamburgue").addEventListener("click", () => {
    let move = document.querySelector(".menu-content")
    let video = document.querySelector(".content-video")
    let somb = document.querySelector("#sombra")
    let hid = document.querySelector(".content-video")
    let list = document.querySelector(".lista-main ul")
    let v = document.querySelector(".video-gif")
    let v1 = document.querySelector(".video-gif1")
    let v2 = document.querySelector(".video-gif2")
    let v3 = document.querySelector(".video-gif3")
    let v4 = document.querySelector(".video-gif4")
    let v5 = document.querySelector(".video-gif5")
    let v6 = document.querySelector(".video-gif6")
    let v7 = document.querySelector(".video-gif7")
    let v8 = document.querySelector(".video-gif8")
    //MOSTRA-O-MENU\\
    p=0
    if (i <= 0) {
        hid.style.overflow = "hidden"
        move.style.transform = ("translateX(0px)")
        video.style.width = "81vw"
        window.setTimeout(function () {
            somb.classList = ("sombra")
        }, 200)
        list.style.transform = "translateX(150px)"
        v.style.width = '250px'
        v1.style.width = '250px'
        v2.style.width = '250px'
        v3.style.width = '250px'
        v4.style.width = '250px'
        v5.style.width = '250px'
        v6.style.width = '250px'
        v7.style.width = '250px'
        v8.style.width = '250px'
    }
    //END MOSTRA-O-MENU\\

    //REMOVE-MENU-SE-CLICA-NA-SOMBRA\\
    let remS = document.querySelector("#sombra").addEventListener("click", () => {
        move.style.transform = ("translateX(-300px)")
        hid.style.overflow = ""
        somb.classList.remove("sombra")
        video.style.width = "95vw"
        list.style.transform = "translateX(0px)"
        v.style.width = '300px'
        v1.style.width = '300px'
        v2.style.width = '300px'
        v3.style.width = '300px'
        v4.style.width = '300px'
        v5.style.width = '300px'
        v6.style.width = '300px'
        v7.style.width = '300px'
        v8.style.width = '300px'
        i = 0
    })
    // END REMOVE-MEU-SE-CLICA-NA-SOMBRA

    i++

    //REMOVE-MENU\\
    if (i >= 2) {
        move.style.transform = ("translateX(-300px)")
        hid.style.overflow = ""
        somb.classList.remove("sombra")
        video.style.width = "95vw"
        list.style.transform = "translateX(0px)"
        v.style.width = '300px'
        v1.style.width = '300px'
        v2.style.width = '300px'
        v3.style.width = '300px'
        v4.style.width = '300px'
        v5.style.width = '300px'
        v6.style.width = '300px'
        v7.style.width = '300px'
        v8.style.width = '300px'
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

