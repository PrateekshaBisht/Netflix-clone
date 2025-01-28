// Question 1 :-
let num1 = [7,9,0,-2];
let n = 3;
// console.log(num1.splice(0,n));

// Question 2:-
 let ans = num1.slice(num1.length-n);
 console.log(ans);
 // Question 3 :-
//  let str = prompt("Enter the value here");
//  if (str.length == 0){
//     console.log("This String is empty");
//  }
// else{
//     console.log("The string is not empty");
// }
// Question 4 :-
let name1 = "Apple";
console.log(name1[3]);
if(name1[3] == name1[3].toLowerCase()){
    console.log("This char is in Lowercase");
}
else {
 console.log("This is in uppercase");
}
// Question 6 :-
let arr1 = [1,2,3,4,5];
if (arr1.indexOf(2)==-1){
    console.log("The num doesnot exist");
}
else{
    console.log("The element exist in the given array");
}
