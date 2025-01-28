let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let para = document.querySelector("p");
let btn = document.querySelector("button");

function changes(){
    this.style.backgroundColor = "pink";
    this.style.color = "brown";
}

h1.addEventListener("click",changes);
h3.addEventListener("click",changes);
para.addEventListener("click",changes);
btn.addEventListener("click",changes);

