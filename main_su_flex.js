
let btnKaireje = document.querySelector(".btn1");
btnKaireje.addEventListener("click", function () {
    let containerBIG = document.querySelector(".containerBIG");
    containerBIG.classList.remove("flex-row-riverse");
    containerBIG.classList.add("display-flex");
}
)

let btnDesineje = document.querySelector(".btn2");
btnDesineje.addEventListener("click", function () {
    let containerBIG = document.querySelector(".containerBIG");
    containerBIG.classList.add("display-flex");
    // let containerIMG = document.querySelector(".containerIMG");
    containerBIG.classList.remove("flex-row-riverse");
    containerBIG.classList.add("flex-row-riverse");
}
)

let btnPaslepti = document.querySelector(".btn3");
btnPaslepti.addEventListener("click", function () {
    let containerIMG = document.querySelector(".containerIMG");
    containerIMG.classList.add("d-none");
}
)

let btnNukelti = document.querySelector(".btn4");
btnNukelti.addEventListener("click", function () {
    // containerBIG.classList.add("display-flex");
    let containerBIG = document.querySelector(".containerBIG");
    containerBIG.classList.add("display-flex");
    containerBIG.classList.add("flex-column-reverse");
}
)


let btnAtstatyti = document.querySelector(".btn5");
btnAtstatyti.addEventListener("click", function () {
    let containerBIG = document.querySelector(".containerBIG");
    containerBIG.classList.remove("display-flex");
    containerBIG.classList.remove("flex-row-riverse");
    containerBIG.classList.aremove("flex-row-riverse");

}
)
