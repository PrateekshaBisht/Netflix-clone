// Question 1:-
let btn = document.createElement("button");
btn.innerText="Click me!";
document.querySelector("body").append(btn);

let input = document.createElement("input");
input.type="username";
document.querySelector("body").append(input);

// Question 2 :-

btn.getAttribute("id");
btn.setAttribute("id","btn");
input.setAttribute("placeholder","username");

//Question 3:-

console.dir(document.querySelector("button"));
console.dir(document.getElementById("btn"));

btn.style.color="white";
btn.style.background="blue";

//Question 4:-

let h1 = document.createElement("h1");
h1.innerText="DOM Practice";
h1.classList.add("underline");
document.querySelector("body").append(h1);

// Question 5:-

let para = document.createElement("p");
para.innerHTML="Keep <b>going</b> girl !!";
document.querySelector("body").append(para);

