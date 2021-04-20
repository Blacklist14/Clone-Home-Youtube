let sinoNot = document.querySelector(".sino-box")
let ham = document.querySelector(".hamburgue")
let sin = 0
let sino = document.querySelector(".sino").addEventListener("click",()=>{
    if(sin<=0){
        sinoNot.style.display = "block"
    }
    sin++
    if(sin>=2){
        sinoNot.style.display = "none" 
        sin=0
    }
})
let bo = document.querySelector(".main-content").addEventListener("mouseenter",()=>{
   if("mouseenter"){
    sinoNot.style.display = "none"
    sin=0
   }
})