// Question 1 :-------------
let arr = [2,3,4];
let square = arr.map((el)=>(el*el));
console.log(square);

let sum = square.reduce((add,el)=>(add+el));
console.log(sum);

let average = sum/square.length;
console.log(average);

// Question 2 :-----------

let arr2 = [1,2,3,4,5,6,7,8,9,10];
let newarr2 = arr2.map((el)=>(el+5));
console.log(newarr2);

// Question 3:-------------

let arr3 =["a","b","c","d"];
let newarr3 = arr3.map((el)=>(el.toUpperCase()));
console.log(newarr3);

// Question 5:-----------------
let object1 = {
      name : "abcd",
      rollno : 1234,
      class : 10
};
let object2 ={
      city : "xyz",
      phone : 4566894781,
      email :"abcd123@gmail.com"

};
let mergeobject = (arg)=>{
    return {...object1,...object2};
}
console.log(mergeobject());

//Question 4:------------
 doubleandreturnargs=(arr4,...args)=>{
  return [...arr4,args.map((el)=>el*2)];
};
console.log(doubleandreturnargs([1,2,3,4],4,4));




   
