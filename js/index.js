// Your code goes here

//color of font changed for FUN BUS - 1
const funBusTit = document.querySelector("h1");
funBusTit.addEventListener("mousedown", changeFontCol);

function changeFontCol(){
    funBusTit.style.color = "darkorchid";
}

//change FUN BUS IMG BIG AND SMALL - 2 and 3
const busImg = document.querySelector(".intro img");

busImg.addEventListener("mouseenter", () => {
    busImg.style.transform = "scale(1.2)";
    busImg.style.transition = "transform 0.5s";
})
busImg.addEventListener("mouseleave", () => {
    busImg.style.transform = "scale(1.0)";
    busImg.style.transition = "transform 0.5s";
})


//img first of text section - 4
const lesgoImg = document.querySelector(".img-content img");

lesgoImg.addEventListener("dblclick", () => {
    lesgoImg.style.border = "5px darkslategrey solid";
    lesgoImg.style.boxShadow = "5px 5px 5px slategrey";
})

//img second of text section - 5
const advImg = document.querySelector(".img-content2 img");

advImg.addEventListener("click", () => {
    advImg.style.border = "5px slategrey solid";
    advImg.style.boxShadow = "5px 5px 5px darkslategrey";
    advImg.style.borderRadius = "2rem";
})


//add shadow to all paragraphs - 6
const containerPar = document.querySelectorAll("p");
window.addEventListener("load", (event) => {
    containerPar.forEach(x => x.style.backgroundColor = "white");
    containerPar.forEach(x => x.style.boxShadow = "0 0 100px 100px white");
})


//replace img on resize - 7
const destImg = document.querySelector(".content-destination img");

window.addEventListener("resize", () => {
    destImg.src = "img/Joao.jpg";
})

//wheel
function zoom(event){
    event.preventDefault();
    scale += event.deltaY * -0.01;

    //restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    //apply scale transform
    destImg.style.transform = `scale(${scale})`;
}
let scale = 1;
destImg.onwheel = zoom;

destImg.addEventListener("wheel", zoom);

//adding a background color and change font color to header at top - 8
const head2 = document.querySelector("h2");

head2.addEventListener("click", () => {
    head2.style.color = "midnightblue";
    head2.style.backgroundColor = "lightsteelblue";
})

//9 - scrolling wheel from 0 to 1200px bottom of page
const intro = document.querySelector(".intro");
intro.addEventListener("wheel", () => {
    window.scrollTo(0, 1200);
})


//NAV Refreshing - 10
const nav = document.querySelector("nav");
nav.addEventListener("click", function(x) {x.preventDefault()})

//SELECT mouse event

const destPar = document.querySelector(".destination p");
destPar.addEventListener("select", () => {
    destPar.style.color = "darkblue";
    destPar.style.backgroundColor = "cadetblue";
})





// //focus and blur
// const destH4 = document.querySelector(".content-destination h2");
// destH4.addEventListener('focus', (event) => {
//     event.target.style.backgroundColor = "thistle";
// }, true);
// destH4.addEventListener('blur', (event) => {
//     event.target.style.backgroundColor = "paleturquoise";
// }, true);






//propagation = prevents any duplicate console entry when you click on the sign me up buttons at the bottom of the page

const buttDiv = document.querySelector(".bottom-content");
buttDiv.addEventListener("click", (x) => {
    console.log("WELCOME TO THE FUNNNNNN BUSSSSS, MY CHILD!!!!!");
})

const butts = document.querySelectorAll(".btn");
butts.forEach(x => x.addEventListener("click", event => {
    console.log("WELCOME TO THE NO FUN ZONE BUS YO!");
    event.stopPropagation();
}))