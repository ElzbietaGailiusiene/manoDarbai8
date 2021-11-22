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
