

let btn=document.querySelector(".btn-secondary");
btn.addEventListener("click", function(){
let newPastraipa=document.createElement("h3");
newPastraipa.innerText="Sveiki!";
let h2=document.querySelector("h2");
let parent=document.querySelector("header");
parent.insertBefore(newPastraipa,h2);
}

)


