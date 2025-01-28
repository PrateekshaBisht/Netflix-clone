// Question 2:-------------

let btn = document.createElement("button");
let body = document.querySelector("body");
body.append(btn);
btn.innerText="Click Me !!";
btn.addEventListener("click",function(){
   btn.style.background = "green";
})
  
// Question 3 :--------------------
let name = document.querySelector("#name");
let input = document.querySelector("input");
let h2 = document.querySelector("h2");
name.addEventListener("input",function(){
    console.log(input.value);
    h2.innerText=input.value;
})

let box = document.querySelector("div");
box.classList.add("box");



