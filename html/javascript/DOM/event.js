let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    console.log("Prateeksha!");
})

btn.addEventListener("mouseout",function(){
    btn.style.color = "Green";
})

btn.addEventListener("keypress",function(){
     this.style.background="pink";
})

btn.addEventListener("scroll",function(){
    alert("You r scrolling !!");
})

