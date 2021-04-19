let erroEvent = document.querySelectorAll(".erro")
let list = document.querySelector(".lista-main")
let video = document.querySelector(".content-video")
let buttonD = document.querySelector(".bottonD")
let buttonE = document.querySelector(".bottonE")
let addE = document.querySelector("#addErro")
erroEvent.forEach((props)=>{
    props.addEventListener("click",()=>{
        list.style.display = "none"
        addE.classList=("Em-produção")
        buttonD.style.display = "none"
        buttonE.style.display = "none"
        video.style.display = "none"
    })
})
let removeErro = document.querySelector(".option1").addEventListener("click",()=>{
    list.style.display = "flex"
    addE.classList =""
    buttonD.style.display = "flex"
    buttonE.style.display = "flex"
    video.style.display = "flex"
})