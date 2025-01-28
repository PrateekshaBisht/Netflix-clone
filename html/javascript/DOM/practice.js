let para = document.createElement("p");
para.innerText = "Hey  I'm red!";
document.querySelector("body").append(para);
para.classList.add("red");

let heading = document.createElement("h3");
heading.innerText = "Hey I'm blue h3!";
document.querySelector("body").append(heading);
heading.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
h1.innerText = "I'm in a div!";
p.innerText="Me Too!";
div.append(h1);
div.append(p);
let body = document.querySelector("body");
body.append(div);
div.classList.add("contain");

