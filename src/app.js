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

function slideImage {

}

function main () {
    slo = new SLC();
    
    slo.mainMenuButton.addEventListener('click', function() {
        slo.sideNav.classList.toggle("show")
    });
    slo.closeSideNav.addEventListener('click', function() {
        slo.sideNav.classList.toggle("show")
    });

    setInterval(slideImage, 1000) 
}

class SLC {
    constructor () {
        this.mainMenuButton = document.getElementById("mainMenuButton")
        this.sideNav = document.getElementById("sideNav")
        this.closeSideNav = document.getElementById("closeSideNav")
        this.carWedding = document.getElementById("carWedding")
        this.carCareer = document.getElementById("carCareer")
        this.carFriends = document.getElementById("carFriends")
    }
}