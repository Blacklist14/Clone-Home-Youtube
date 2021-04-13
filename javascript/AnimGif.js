let v = document.querySelector(".video-gif")
let vi = document.querySelector(".video-gif").addEventListener("mouseover", () => {

    window.setTimeout(function () {
        v.setAttribute("src", "img/mqdefault_6s.webp")
    }, 1000)
    console.log("Opa")
})

let vid = document.querySelector(".video-gif").addEventListener("mouseleave",()=>{
    
    v.setAttribute("src", "https://i.ytimg.com/vi/V0FuAukFSzc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAz6j4HaNZO2vOARzmoTHFKQYXo1Q")
    console.log("BAH")
})

