var cursor = document.querySelector("#cursor");
var cursor_blr = document.querySelector("#cursor_blur");
var links = document.querySelectorAll("#nav a")
document.addEventListener("mousemove",(dets)=>
{
    cursor.style.opacity = 1;
    cursor_blr.style.opacity = 1;
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    cursor_blr.style.left = dets.x-200 + "px";
    cursor_blr.style.top = dets.y-200 + "px";
})

links.forEach((elems)=>
{
    elems.addEventListener("mouseenter",()=>
    {
        cursor.style.backgroundColor = "transparent";
        cursor.style.scale = 3;
        cursor.style.border = "1px solid white";
    })
})
links.forEach((elems)=>
{
    elems.addEventListener("mouseleave",()=>
    {
        cursor.style.backgroundColor = "lightgreen";
        cursor.style.scale = 1;
        cursor.style.border = "";
    })
})
gsap.to("#nav",{
    backgroundColor : "black",
    duration : 0.5,
    height: "80px",

    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        // markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub : 1,  // scrub ki value true/false or 1 to 5 de skte hn
    },
});

gsap.to(".main",{
    backgroundColor : "black",
    // zIndex : -1,
    scrollTrigger : {
        trigger : ".main",
        scroller : "body",
        // markers : true,
        start : "top -25%",
        end : "top -75%",
        scrub : 2, 
    },
});
gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 2,
    stagger : 0.5,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
//   gsap.from(".card", {
//     scale: 0.8,
//     opacity:0,
//     duration: 1,
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: ".card",
//       scroller: "body",
//       // markers:false,
//       start: "top 70%",
//       end: "top 65%",
//       scrub: 1,
//     },
//   });
gsap.to("#img_one",{
    // border : "1px solid red",
    x : 50,
    y : 60,
    scrollTrigger : {
        trigger : "#img_one",
        scroller : "body",
        // start : "top 50%",
        // end : "top 60%",
        scrub : 5, 
    },
});
gsap.to("#img_two",{
    // border : "1px solid red",
    x : -100,
    y : -100,
    scrollTrigger : {
        trigger : "#img_two",
        scroller : "body",
        // start : "top 10%",
        // end : "top 11%",
        scrub : 2, 
    },
});

gsap.to(".heading h1",{
    marginTop : "10px",
    scrollTrigger : {
        trigger : ".heading h1",
        scroller : "body",
        scrub : 1, 
    },
});

// vanilla tilt
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true, 
    "max-glare":0.3, 
    scale:1.1,
    reverse:                true, 
    startX:                 50,     
    startY:                 10,  
});