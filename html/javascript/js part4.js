// Question 1 :-
// let arr = [1,2,3,4,5,6,2,3];
// let num = 2
// for(let i = 0;i<arr.length;i++){
//       if(num==arr[i]){
//         arr.splice(i,1);
//       }
      
// }
// console.log(arr);
// Question 2 :-
// let num1 = 287152;
// let count = 0;
// while (num1>0){
//     num1 = Math.floor(num1/10);
//     count++;
// }
// console.log(count);
// Question 3 :-
// let num2 = 287152;
// let count = 0;
// let rem ;
// while(num2>0){
//     rem = num2%10;
//     count = count + rem;
//     num2 = Math.floor(num2/10);
// }
// console.log(count);

 // Question 4 :-
//  let num = 7;
//  let fact = 1;
//  for(let i = num ;i>0;i--){
//   fact = i*fact;
//  }
//  console.log(fact);

// Question 5 :-
// let arr = [7,8,9,1,2];
// let largest = 0;
// for(let i = 0 ;i<arr.length;i++){
//     if(largest<arr[i]){
//         largest = arr[i];
//     }
// }
// console.log(largest);
let arr = [2,3,5,6];
// arr[1]=9;
// console.log(arr);
 let new_arr=arr.with(2,9); // to replace an element in a new array;
 console.log(new_arr);
 console.log(arr);
