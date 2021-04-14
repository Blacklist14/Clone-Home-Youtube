// DOM_CHAMADAS
let v = document.querySelector(".video-gif")
let v1 = document.querySelector(".video-gif1")
let v2 = document.querySelector(".video-gif2")
let v3 = document.querySelector(".video-gif3")
let v4 = document.querySelector(".video-gif4")
let v5 = document.querySelector(".video-gif5")
let v6 = document.querySelector(".video-gif6")
let v7 = document.querySelector(".video-gif7")
let v8 = document.querySelector(".video-gif8")
let v9 = document.querySelector(".video-gif9")
let v10 = document.querySelector(".video-gif10")
let v11 = document.querySelector(".video-gif11")

// EVENTO_MOUSE_HOVER
let vi = document.querySelector(".video-gif").addEventListener("mouseover", () => {
    v.setAttribute("src", "img/mqdefault_6s.webp")
})

let vi1 = document.querySelector(".video-gif1").addEventListener("mouseover", () => {
    v1.setAttribute("src", "img/Gif marcos1.webp")

})
let vi2 = document.querySelector(".video-gif2").addEventListener("mouseover", () => {
    v2.setAttribute("src", "img/Gif alura2.webp")
})
let vi3 = document.querySelector(".video-gif3").addEventListener("mouseover", () => {
    v3.setAttribute("src", "img/Gif alura3.webp")

})
let vi4 = document.querySelector(".video-gif4").addEventListener("mouseover", () => {
    v4.setAttribute("src", "img/Gif smzinho.webp")
})
let vi5 = document.querySelector(".video-gif5").addEventListener("mouseover", () => {
    v5.setAttribute("src", "img/Gif smzinho2.webp")
})
let vi6 = document.querySelector(".video-gif6").addEventListener("mouseover", () => {
    v6.setAttribute("src", "img/Gif lucas.webp")
})
let vi7 = document.querySelector(".video-gif7").addEventListener("mouseover", () => {
    v7.setAttribute("src", "img/Gif marcos2.webp")
})


// MOUSE_LEVA_HOVER
let vid = document.querySelector(".video-gif").addEventListener("mouseleave", () => {
    v.setAttribute("src", "https://i.ytimg.com/vi/V0FuAukFSzc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAz6j4HaNZO2vOARzmoTHFKQYXo1Q")
    console.log("BAH")
})
let vid1 = document.querySelector(".video-gif1").addEventListener("mouseleave", () => {
    v1.setAttribute("src", "https://i.ytimg.com/vi/qg2lzUX8-N0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFxfUhn7sjbLEkCknp2o8MsN6O1A")
    console.log("BAH")
})
let vid2 = document.querySelector(".video-gif2").addEventListener("mouseleave", () => {
    v2.setAttribute("src", "https://i.ytimg.com/vi/3Kf18kN-5XY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSwaMRLCtNmPxBvvCJgMc0vGdKpw")
    console.log("BAH")
})
let vid3 = document.querySelector(".video-gif3").addEventListener("mouseleave", () => {
    v3.setAttribute("src", "https://i.ytimg.com/vi/H75eZUaUPSc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF5-bP0l4UitZQwRqP8YV36wm96g")
})
let vid4 = document.querySelector(".video-gif4").addEventListener("mouseleave", () => {
    v4.setAttribute("src", "https://i.ytimg.com/vi/Zqom2UaA6xY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyKzfhCqjFQH7rSwmek-G3Ga5Oew")
})
let vid5 = document.querySelector(".video-gif5").addEventListener("mouseleave", () => {
    v5.setAttribute("src", "https://i.ytimg.com/vi/SOk3YFWUDY8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmNv3U7J_btS4_Zh37lkRCu3iTxQ")
})
let vid6 = document.querySelector(".video-gif6").addEventListener("mouseleave", () => {
    v6.setAttribute("src", "https://i.ytimg.com/vi/WPTQ8fZ0aQk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhywVLxJC03LIk4n1TEAxHKas92Q")
})
let vid7 = document.querySelector(".video-gif7").addEventListener("mouseleave", () => {
    v7.setAttribute("src", "https://i.ytimg.com/vi/NRSr4V3RN9I/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpStCpRjxj1oTD5VFoxPCnkABJOQ")
})