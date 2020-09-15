window.addEventListener("keydown", (e) => {
    let scrollLength = window.innerHeight;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        scrollLength = e.key === "ArrowDown" ? window.innerHeight : -window.innerHeight;
        window.scrollBy({
            top: scrollLength,
            behavior: "smooth"
        });
        // setTimeout(() => {
        //     let position = window.screenY;
        //     while(position < window.innerHeight) position -= window.innerHeight;
        //     window.scrollBy({
        //         top: scrollLength,
        //         behavior: "smooth"
        //     });
        // }, 1000);
    }
});
// window.onwheel = (e) => {
//     e.preventDefault();
//     scrollLength = e.deltaY > 0 ? window.innerHeight : -window.innerHeight;
//     window.scrollBy({
//         top: scrollLength,
//         behavior: "smooth"
//     });
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