var p = document.querySelector("#search")
p.value
var s = document.querySelector("#buttonSearch").addEventListener("click",()=>{
    document.querySelector("#buttonSearch").setAttribute(`href`,`https://www.youtube.com/results?search_query=`+ p.value)
})
 