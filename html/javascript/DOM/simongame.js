let gameseq = [];
let usersq = [];
let level = 0;
let started = false;
let h2 = document.querySelector("h2");
let color = ["red" ,"orange","teal","blue"];

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("Gamne Started !");
        started = true;
        levelup();
    }
})

function flash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash");
 } , 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    } ,250);
}
function levelup(){
    level++;
    h2.innerText = `level ${level}`;
    let btnindx = Math.floor(Math.random()*3);
    let randomcolor = color[btnindx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);
    // console.log(btnindx);
    // console.log(randomcolor);
    // console.log(randombtn);

    flash(randombtn);
}
 function btnpress() {
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    usersq.push(usercolor);
    console.log(usercolor);

 }
 let allbtns = document.querySelectorAll(".box");
 for(btn of allbtns){
    btn.addEventListener("click" , btnpress);
 }

