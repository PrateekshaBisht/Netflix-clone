let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    let h1 = document.querySelector("h1");
    let rang = getcolor();
    h1.innerText = rang;
    let div = document.querySelector("div");
    div.style.background = rang;
})

function getcolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}