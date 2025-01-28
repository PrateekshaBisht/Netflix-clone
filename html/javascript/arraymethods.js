// for each :==== to access each elemnt in an array (we can also do it with loops):-----------------
let arr = [1,2,3,4,5];
let print = function(el){
    console.log(el);
}
arr.forEach(print);

arr.forEach((el)=>{
    console.log(el);
});

// Map function :------------

let arr1 = [1,4,7,2,9,3,7,6];
let newarr1 = arr1.map((el)=>{
    return (el*el);
});
console.log(newarr1);

// Filter Function :---------------

let arr2 = [2,6,4,8,7,4,5,9,1];
let newarr2 = arr2.filter((el)=>{
    return (el%2==0);                    // Give only even elements.
});
console.log(newarr2);

// Every :============

let arr3 = [2,4,6,8];
let newarr3 = arr3.every((el)=>(el%2==0));  // This will return True as all the nums are even.
console.log(newarr3);

let arr4 = [1,2,4,5,3];
let newarr4 = arr4.every((el)=>(el%2!=0)); // This will return false as all num are not odd.
console.log(newarr4);

// Reduce function :-------------

 let arr5 = [1,2,3,4,5];
 let newarr5 = arr5.reduce((res,el)=>{
    return (res+el);            // initially res = 0;
 });
 console.log(newarr5);
 
