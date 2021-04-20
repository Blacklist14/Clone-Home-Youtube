let erroEvent = document.querySelectorAll(".erro")
let list = document.querySelector(".lista-main")
let video = document.querySelector(".content-video")
let buttonD = document.querySelector(".bottonD")
let buttonE = document.querySelector(".bottonE")
let addE = document.querySelector("#addErro")
addE.style.display = "none"
erroEvent.forEach((props)=>{
    props.addEventListener("click",()=>{
        list.style.display = "none"
        addE.classList=("Em-produção")
        addE.style.display = "flex"
        buttonD.style.display = "none"
        buttonE.style.display = "none"
        video.style.display = "none"
    })
})
let removeErro = document.querySelector(".option1").addEventListener("click",()=>{
    list.style.display = "flex"
    addE.classList =""
    addE.style.display = "none"
    buttonD.style.display = "flex"
    buttonE.style.display = "flex"
    video.style.display = "flex"
})