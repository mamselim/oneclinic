// // function setBodySize (width, height) {
// //     ids.appBody.style.margin = 0
// //     ids.appBody.style.width = width+"px"
// //     ids.appBody.style.height = height+"px"
// //     if (width < 800) {
// //         ids.appBody.style.backgroundColor = "Cyan"
// //         ids.bodyHeader.style.display = "none"
// //     } else {
// //         ids.appBody.style.backgroundColor = "White"
// //         ids.bodyHeader.style.display = "block"
// //         ids.bodyHeader.innerHTML = "Under Construction for PC"
// //     }
// // }

// // function main () {
// //     ids = new IDS()
// //     setBodySize(window.innerWidth, window.innerHeight)
// //     window.addEventListener('resize', function() {
// //         let width = window.innerWidth;
// //         let height = window.innerHeight;
// //         setBodySize(width, height)
// //     });
// // }

// function slideImage (localCars) {
    
//     localCars.forEach((ele) => {
//         ele.__order = ele.__order + 1
//         if (ele.__order > 2) {
//             ele.__order = 0
//             ele.style.opacity = 1
//         } else {
//             ele.style.opacity = 0
//         }
//     });

// }

// function main () {
//     slo = new SLC();
    
//     slo.mainMenuButton.addEventListener('click', function() {
//         slo.sideNav.classList.toggle("show")
//     });
    
//     // slo.closeSideNav.addEventListener('click', function() {
//     //     slo.sideNav.classList.toggle("show")
//     // });
    
//     let localCars = Array.from(slo.cars)
//     let carHeight = localCars[0].getBoundingClientRect().height
//     slo.car.style.height = carHeight + "px"
    
//     localCars.forEach((ele, ind) => {
//         ele.__order = ind
//         if (ind == 0) {
//             ele.style.opacity = 1
//         }
//     });

//     window.addEventListener('resize', function() {
//         let carHeight_1 = localCars[0].getBoundingClientRect().height
//         slo.car.style.height = carHeight_1 + "px"
//     });

//     setInterval(function () {
//         slideImage(localCars)
//     }, 6000) 
// }

// class SLC {
//     constructor () {
//         this.mainMenuButton = document.getElementById("mainMenuButton")
//         this.sideNav = document.getElementById("sideNav")
//         this.car = document.getElementById("carousel")
//         this.closeSideNav = document.getElementById("closeSideNav")
//         this.carWedding = document.getElementById("carWedding")
//         this.carCareer = document.getElementById("carCareer")
//         this.carFriends = document.getElementById("carFriends")
//         this.cars = document.getElementsByClassName("carCard")
//         this.imgs = document.getElementsByClassName("carImg")
//     }
// }

import "./scroll-timeline.js"


const anim01_tracker =  document.querySelector(".anim01")
const anim02_tracker =  document.querySelector(".anim02")
console.log(anim01_tracker)
const tstl = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
})
anim01_tracker.animate(
    {
        // transform: ['scale(1)', 'scale(2)', 'scale(10)' ],
        // transform: ['translateX(0px)', 'translateX(100px)', 'translateX(10000px)' ]
        transform: ['translateX(0px) scale(1)', 'translateX(100px) scale(1)', 'translateX(10000px) scale(2)' ],
        opacity: [1,0.5, 0.2, 0.1, 0, 0 ]
    }
    ,
    {
        timeline: tstl
    }
)

anim02_tracker.animate(
    {
        // transform: ['scale(1)', 'scale(2)', 'scale(10)' ],
        // transform: ['translateX(0px)', 'translateX(100px)', 'translateX(10000px)' ]
        transform: ['scale(0)', 'scale(0)', 'scale(0.2)' , 'scale(.5)', , 'scale(1)'],
        opacity: [0,0, 0.2, 0.5, 1, 0.8 ]
    }
    ,
    {
        timeline: tstl
    }
)