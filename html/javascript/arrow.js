// Arrow Function :-----------------
const sum = (a,b)=>{return a+b};
console.log(sum(2,3));

const pow = (x,y)=>{return x**y};
console.log(pow(2,3));

const hello = () =>{
    console.log("hello");
}
hello();

const avg = (c,d)=>{
    return (c+d)/2;
}
console.log(avg(4,8));

function aver (a,b,c){     // Normal Function:--------------------
      return (a+b+c)/3;
}
console.log(aver(2,4,6));

const factorial = (n)=>{      // Arrow Function:----------------
    let fact = n;                 
    for(let i =1;i<n;i++){
       fact = fact*i;
    }
    return fact;
}
console.log(factorial(4));

// Implicit Function :--------------------
const Add = (a,b)=>(a+b);
console.log(Add(7,6));