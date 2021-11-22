
// let btn1 = document.querySelector(".btn-primary");
// btn1.addEventListener("click", function () {
//     let p = document.querySelector("p");
//     p.setAttribute("class", "text-primary");
// })


// let btn2 = document.querySelector(".btn-success");
// btn2.addEventListener("click", function () {
//     let p = document.querySelector("p");
//     p.setAttribute("class", "text-success");
// })

// let btn3 = document.querySelector(".btn-warning");
// btn3.addEventListener("click", function () {
//     let p = document.querySelector("p");
//     p.setAttribute("class", "text-warning");
// })

let btn1 = document.querySelector(".btn-primary");
btn1.addEventListener("click", function () {
    let p = document.querySelector("p");
    p.style.color = "red";
})

let btn2 = document.querySelector(".btn-success");
btn2.addEventListener("click", function () {
    let p = document.querySelector("p");
    p.style.color = "yellow";
})
let btn3 = document.querySelector(".btn-warning");
btn3.addEventListener("click", function () {
    let p = document.querySelector("p");
    p.style.color = "blue";
})