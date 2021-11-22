let btn1=document.querySelector(".btn-primary");
btn1.addEventListener("click",function(){
    let p=document.querySelector("p");
    p.style.color="red";
})

let btn2=document.querySelector(".btn-success");
btn2.addEventListener("click", function(){
let p=document.querySelector("p");
p.style.color="green";
})


let btn1=document.querySelector(".btnColor");
btn1.addEventListener("click", function(){
let img=document.querySelector (".figure-img img-fluid rounded");
img.setAttribute("class", "");
})

let btn2=document.querySelector(".btnBlack");
btn2.addEventListener("click", function(){
let img=document.querySelector (".figure-img img-fluid rounded")
img.setAttribute("class", "figure-1");
})


let btnColor=document.querySelector(".btnColor");
btnColor.addEventListener("click", function (){
    let img=document.querySelector ("img");
    img.setAttribute("class", "figure")
})

let btnBlack=document.querySelector(".btnBlack");
btnBlack.addEventListener("click", function (){
    let img=document.querySelector ("img");
    img.setAttribute("class", "figure1")
})

let btn1=document.querySelector(".btn1");
btn1.addEventListener("click", function(){
    let containerSM=document.querySelector (".containerSM");
    containerSM.sclassList.remove ("class", ".d-none")

})



let btn2=document.querySelector(".btn2");
btn2.addEventListener("click", function(){
    swal({
        title: "AČIŪ!",
        text: "Jūsų komentaras gautas",
        icon: "success",
      });
})




let btn = document.querySelector(".btn1");
btn.addEventListener("click", function () {
    let containerSM = document.querySelector(".containerSM");
    //containerSM.setAttribute("class", "d-none");//
    containerSM.classList.remove("d-none");

}
)

let pateikti=document.querySelector(".btn2");
pateikti.addEventListener("click", function () {
    swal({
        title: "AČIŪ!",
        text: "Jūsų komentaras gautas",
        icon: "success",
      });
    
      //containerSM.classList.remove("d-none");//
    })


    let btnKaireje=document.querySelector(".btn1");
    btn1.addEventListener("click",function(){
let containerBIG=document.querySelector(".containerBIG");
containerBIG.classList.add("display-flex");


    })



    
let btnKaireje = document.querySelector(".btn1");
btnKaireje.addEventListener("click", function () {

    let containerBG = document.querySelector(".containerBG");
    containerBG.classList.add("display-flex", "flex-row");
    let containerIMG = document.querySelector(".containerIMG");
    containerIMG.classList.add("d-none");
}
)