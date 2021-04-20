i = 0
//ANIMAÇÃO-MENU\\
document.querySelector(".hamburgue").addEventListener("click", () => {
    let move = document.querySelector(".menu-content")
    let list = document.querySelector(".lista-main ul")
    let buttonE = document.querySelector(".bottonE")
    //MOSTRA-O-MENU\\
    p = 0
    if (i <= 0) {

        move.style.transform = ("translateX(0px)")
        list.style.transform = "translateX(150px)"
        buttonE.style.transform =" translateX(150px)"
    }
    //END MOSTRA-O-MENU\\
    // END REMOVE-MEU-SE-CLICA-NA-SOMBRA

    i++

    //REMOVE-MENU\\
    if (i >= 2) {
        move.style.transform = ("translateX(-300px)")
        list.style.transform = "translateX(0px)"
        buttonE.style.transform =" translateX(0px)"
        i = 0
    }
    //END-REMOVE-MENU\\
})
//END ANIMAÇÃO-MENU\\
n = 0
var op0 = document.querySelector(".img")
op0.style.backgroundColor = ("rgba(255, 255, 255, 0.171)")
op0.classList = ("img option1")
document.querySelector(".img").addEventListener("click", () => {
    var op0 = document.querySelector(".img")
    if (n <= 0) {
        op0.style.backgroundColor = ("transparent")
        op0.classList = ("img")
    }
    n++
    if (n >= 2) {
        op0.style.backgroundColor = ("rgba(255, 255, 255, 0.171)")
        op0.classList = ("img option1")
        n = 0
    }
})

//MOVE AS TAGS
soma = 100
var b1 = document.querySelector(".bottonE")
document.querySelector(".bottonE").addEventListener("click", () => {
    let list = document.querySelector(".lista-main ul")
    if ("click") {
        list.style.transform = `translateX(${soma}px)`
        var s = soma += 130
        b2.style.display = "flex"
    }
    if (soma >= 70) {
        b1.style.display = "none"
        som = 0
    }

})
var b2 = document.querySelector(".bottonD")
som = 100
document.querySelector(".bottonD").addEventListener("click", () => {
    let list = document.querySelector(".lista-main ul")
    if ("click") {
        list.style.transform = `translateX(-${som}px)`
        som += 130
        console.log(som)
        b1.style.display = "flex"
    }
    if (som >= 560) {
        b2.style.display = "none"
        soma = -470
    }

})

function showBtn() {
    var calc = document.querySelector('body > main > section.lista-main').offsetWidth - document.querySelector('body > main > section.lista-main > ul').offsetWidth + (document.querySelector('body > main > section.lista-main > ul').offsetLeft * -1)
    console.log(calc)
    if (calc < 20) {
        document.querySelector('body > main > div.bottonD').style.display = 'flex';
    } else {
        document.querySelector('body > main > div.bottonD').style.display = 'none';
    }

    if (calc > -526) {
        document.querySelector('body > main > div.bottonE').style.display = 'flex';
        // document.querySelector('body > main > div.bottonE').style.left = '-80px';
    } else {
        document.querySelector('body > main > div.bottonE').style.display = 'none';
    }
}