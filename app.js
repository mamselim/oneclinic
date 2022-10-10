// function setBodySize (width, height) {
//     ids.appBody.style.margin = 0
//     ids.appBody.style.width = width+"px"
//     ids.appBody.style.height = height+"px"
//     if (width < 800) {
//         ids.appBody.style.backgroundColor = "Cyan"
//         ids.bodyHeader.style.display = "none"
//     } else {
//         ids.appBody.style.backgroundColor = "White"
//         ids.bodyHeader.style.display = "block"
//         ids.bodyHeader.innerHTML = "Under Construction for PC"
//     }
// }

// function main () {
//     ids = new IDS()
//     setBodySize(window.innerWidth, window.innerHeight)
//     window.addEventListener('resize', function() {
//         let width = window.innerWidth;
//         let height = window.innerHeight;
//         setBodySize(width, height)
//     });
// }

function slideImage (localCars) {
    
    localCars.forEach((ele) => {
        // console.log(ele.style)
        console.log(ele.style.zIndex)
        ele.style.zIndex = ele.style.zIndex - 1
        if (ele.style.zIndex < -5) {
            ele.style.zIndex = -3
            ele.style.opacity = 1
        } else {
            ele.style.opacity = 0
        }
    });

}

function main () {
    slo = new SLC();
    
    slo.mainMenuButton.addEventListener('click', function() {
        slo.sideNav.classList.toggle("show")
    });
    slo.closeSideNav.addEventListener('click', function() {
        slo.sideNav.classList.toggle("show")
    });
    
    let localCars = Array.from(slo.cars)
    
    localCars.forEach((ele, ind) => {
        ele.style.zIndex = -1*ind -3
        if (ind == 0) {
            ele.style.opacity = 1
        }
    });

    setInterval(function () {
        slideImage(localCars)
    }, 6000) 
}

class SLC {
    constructor () {
        this.mainMenuButton = document.getElementById("mainMenuButton")
        this.sideNav = document.getElementById("sideNav")
        this.closeSideNav = document.getElementById("closeSideNav")
        this.carWedding = document.getElementById("carWedding")
        this.carCareer = document.getElementById("carCareer")
        this.carFriends = document.getElementById("carFriends")
        this.cars = document.getElementsByClassName("carCard")
        this.imgs = document.getElementsByClassName("carImg")
    }
}