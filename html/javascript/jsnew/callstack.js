// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

// Callback Hell (nesting of callbacks):----------

h1 = document.querySelector("h1");
function changecolor( color , delay , nextcolor ){
 setTimeout(()=>{
    h1.style.color = color;
   if(nextcolor) nextcolor();
 } , delay)
  
}
changecolor("voilate",1000,()=>{
    changecolor("indigo" ,1000 ,()=>{
        changecolor("blue" , 1000 , ()=>{
            changecolor("green" ,1000,()=>{
                changecolor("orange",1000 ,()=>{
                    changecolor("yellow",1000,()=>{
                        changecolor("red",1000);
                    })
                })
            })
        })
    });
})

