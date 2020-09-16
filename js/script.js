window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        throttleFunction(scrollWindow, e, 200);
    }
});

var  throttleFunction  =  function (func, param, delay) {
	if (timerId) {
		return
	}
    var timerId  =  setTimeout(function () {
		func(param)
		timerId  =  undefined;
	}, delay)
}

function scrollWindow(e) {
    let scrollLength = window.innerHeight;
    scrollLength = e.key === "ArrowDown" ? window.innerHeight : -window.innerHeight;
    window.scrollBy({
        top: scrollLength,
        behavior: "smooth"
    });
}
// function scrollWindow1(e) {
//     let scrollLength = window.innerHeight;
//     window.scrollBy({
//         top: scrollLength,
//         behavior: "smooth"
//     });
// }

// window.addEventListener("scroll", (e) => {
//     e.preventDefault();
//     throttleFunction(scrollWindow1, e, 200);
// })



// window.onwheel = (e) => {
//     e.preventDefault();
//     throttleFunction(onWheelScroll, e, 200)
// }

// function onWheelScroll(e) {
//     console.log(e);
//     if(Math.floor(window.pageYOffset)%window.innerHeight) {
//         scrollLength = e.deltaY > 0 ? window.innerHeight : -window.innerHeight;
//         window.scrollBy({
//             top: scrollLength,
//             behavior: "smooth"
//         });
//     }
// }


// ==================================
// TO SCROLL TO A PARTICULAR ELEMENT
// ==================================

// window.scrollTo({left:0,top:findPos(document.getElementById("section-features")), behavior: "smooth"});

// function findPos(obj) {
//     var curtop = 0;
//     if (obj.offsetParent) {
//         do {
//             curtop += obj.offsetTop;
//         } while (obj = obj.offsetParent);
//     return [curtop];
//     }
// }

// ===================================