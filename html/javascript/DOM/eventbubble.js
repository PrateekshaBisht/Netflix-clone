let di = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

di.style.backgroundColor="pink";
ul.style.backgroundColor="blue";
for(li of lis){
    li.style.backgroundColor="orange";
}
di.style.width="400px";
di.style.height="200px";

