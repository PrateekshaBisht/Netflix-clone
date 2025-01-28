// Question 1:-----------------
const arrayAverage = (arr)=>{
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum/arr.length;
};
let arr =[1,2,4,5,6,7];
console.log(arrayAverage(arr));

// Question 2:--------------
let even = (n)=>{
    if(n%2==0){
        console.log("Num is even");
    }
    else{
        console.log("Num is odd");
    }
}
console.log(even(4));

// Question 3:---------------
const student ={
    name : "Prateeksha",
    marks : 95,
    getname : function(){
        console.log(this);
    }
}
console.log(student.getname());

const object = {
    message : "Hello World !!",
     function(){
        console.log(this.message);
    }
    
};
setTimeout(object.function,1000);
