// To find the max element of an array using reducefunction.
let arr = [1,2,5,7,8,9,3];
let newarr = arr.reduce((max,el)=>{
    if(max<el){               // res is null initially and el denotes the elements the e
        max = el;
    }
    return max;
});
console.log(newarr);

// Practice Question :---------------
// Question 1 -> Check if all the no. in our array are the multiple of 10 or not :-
let arr1 = [10,20,30,40,50];
let newarr1 = arr1.every((el)=>(el%10==0)
);
console.log(newarr1);

let arr2 = [5,15,20,60,90,100];
let newarr2 = arr2.every((el)=>(el%10==0));
console.log(newarr2);

// Question 2 -> Create a function to find a mini number in an array :-

let arr3 = [1,2,3,4,5,6];
let newarr3 = arr3.reduce((mini,el)=>{
    console.log(mini);
    if(mini<el){
        return mini;
    }else{
        return el;
    }
});
console.log(newarr3);

// Default Parameter :-------
function Jodo (a,b=2) {
    return a+b;
}
console.log(Jodo(3));
