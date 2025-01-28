//  write an arrow function which will print the square of a number.

const square =(n)=>(n*n);
console.log(square(5));

// Write a function that will print 'hello World' 5 times at an interval of 2 sec.

 let id1 = setInterval(()=>{
    console.log("Hello World!!!!")
},2000);

setTimeout(()=>{
   clearInterval(id1);
   console.log("clear Interval ran");
},10000);

