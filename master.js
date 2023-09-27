let p = document.querySelector(".container p");
let container = document.querySelector(".container")
let span = document.querySelector(".container span")

container.style.width = `${p.offsetWidth - span.offsetWidth}px`;
setInterval(()=>{
    if (span.innerHTML == "world") {
        span.innerHTML = "hossam"
        
        container.style.animation = "width 3s steps(6) infinite";
    } else if (span.innerHTML == "hossam") {
        span.innerHTML = "world"
        container.style.animation = "width 3s steps(6) infinite";
    }
},3000)
