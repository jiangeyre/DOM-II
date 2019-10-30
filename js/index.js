// Your code goes here

//1st UNIQUE of eventlistener: mousedown
//color of font changed for FUN BUS
const funBusTit = document.querySelector("h1");
funBusTit.addEventListener("mousedown", changeFontCol);

function changeFontCol(){
    funBusTit.style.color = "maroon";
}

//2nd UNIQUE: mouseenter
//change FUN BUS IMG BIG
const busImg = document.querySelector(".intro img");

busImg.addEventListener("mouseenter", () => {
    busImg.style.transform = "scale(1.2)";
    busImg.style.transition = "transform 0.5s";
})
//3rd UNIQUE: mouseleave
//change img small
busImg.addEventListener("mouseleave", () => {
    busImg.style.transform = "scale(1.0)";
    busImg.style.transition = "transform 0.5s";
})


//4th UNIQUE: dblclick
//add border and boxshadow to first img in the text section
const lesgoImg = document.querySelector(".img-content img");

lesgoImg.addEventListener("dblclick", () => {
    lesgoImg.style.border = "5px darkslategrey solid";
    lesgoImg.style.boxShadow = "5px 5px 5px slategrey";
})


//5th UNIQUE: click
//add border and shadown and border radius of img second of text section
const advImg = document.querySelector(".img-content2 img");

advImg.addEventListener("click", () => {
    advImg.style.border = "5px slategrey solid";
    advImg.style.boxShadow = "5px 5px 5px darkslategrey";
    advImg.style.borderRadius = "2rem";
})


//6th UNIQUE: load
//add shadow to all paragraphs
const containerPar = document.querySelectorAll("p");
window.addEventListener("load", (event) => {
    containerPar.forEach(x => x.style.backgroundColor = "white");
    containerPar.forEach(x => x.style.boxShadow = "0 0 100px 100px white");
})


//7th UNIQUE: resize
//upon resizing the page, the vacation destination img is replaced
const destImg = document.querySelector(".content-destination img");

window.addEventListener("resize", () => {
    destImg.src = "img/Joao.jpg";
})


//8th UNIQUE: wheel
//wheel of the dest img - zoom in and out
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

//not unique - another WHEEL
//scrolling wheel from 0 to 1200px bottom of page
const intro = document.querySelector(".intro");
intro.addEventListener("wheel", () => {
    window.scrollTo(0, 1200);
})


//not unique - another click
//NAV Refreshing
const nav = document.querySelector("nav");
nav.addEventListener("click", function(x) {x.preventDefault()})


//9th UNIQUE: drag/drop
var get = function(el) {
    if (typeof el === 'string') {
      return document.querySelector(el);
    }
    return el;
  };
  var dragable = function(parentEl, dragEl) {
    var parent = get(parentEl);
    var target = get(dragEl);
    var drag = false;
    offsetX = 0;
    offsetY = 0;
    var mousemoveTemp = null;
  
    if (target) {
      var mouseX = function(e) {
        if (e.pageX) {
          return e.pageX;
        }
        if (e.clientX) {
          return e.clientX + (document.documentElement.scrollLeft ?
            document.documentElement.scrollLeft :
            document.body.scrollLeft);
        }
        return null;
      };
  
      var mouseY = function(e) {
        if (e.pageY) {
          return e.pageY;
        }
        if (e.clientY) {
          return e.clientY + (document.documentElement.scrollTop ?
            document.documentElement.scrollTop :
            document.body.scrollTop);
        }
        return null;
      };
      
      var move = function (x, y) {
        var xPos = parseInt(target.style.left) || 0;
        var yPos = parseInt(target.style.top) || 0;
  
        target.style.left = (xPos + x) + 'px';
        target.style.top  = (yPos + y) + 'px';
      };
      
      var mouseMoveHandler = function (e) {
        e = e || window.event;
        if(!drag){return true};
  
        var x = mouseX(e);
        var y = mouseY(e);
        if (x != offsetX || y != offsetY) {
          move(x - offsetX, y - offsetY);
          offsetX = x;
          offsetY = y;
        }
        return false;
      };
      
      var start_drag = function (e) {
        e = e || window.event;
  
        offsetX=mouseX(e);
        offsetY=mouseY(e);
        drag=true; // basically we're using this to detect dragging
  
        // save any previous mousemove event handler:
        if (document.body.onmousemove) {
          mousemoveTemp = document.body.onmousemove;
        }
        document.body.onmousemove = mouseMoveHandler;
        return false;
      };
      
      var stop_drag = function () {
        drag=false;      
  
        // restore previous mousemove event handler if necessary:
        if (mousemoveTemp) {
          document.body.onmousemove = mousemoveTemp;
          mousemoveTemp = null;
        }
        return false;
      };
      
      parent.onmousedown = start_drag;
      parent.onmouseup = stop_drag;
    }
  }
  
  dragable('.containerft', '.draggable');


//10th UNIQUE: keydown
document.addEventListener('keydown', logKey);

function logKey(xxx) {
  log.textContent += ` OUCH YOU PUSHED ME: ${xxx.code}`;
}



//propagation = prevents any duplicate console entry when you click on the sign me up buttons at the bottom of the page

const buttDiv = document.querySelector(".bottom-content");
buttDiv.addEventListener("click", (x) => {
    console.log("HELP ME I AM STUCK IN THE CONSOLE. LET ME OUTTTTTTTTTT");
})

const butts = document.querySelectorAll(".btn");
butts.forEach(x => x.addEventListener("click", event => {
    console.log("YOU HAVE TOUCHED THE BUTTS!");
    event.stopPropagation();
}))