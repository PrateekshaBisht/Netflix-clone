// odd nums form 1 to 15 
// for(let i = 1 ;i<=15 ;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }
// even nums from 2 to 10
// for(let i=2;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// Table of 5
// let n = prompt("Enter the number to generate the table ");
// for(let i=1;i<=10;i++){
//     console.log(`${n} * ${i} = ${n*i}`);
// }
//  Guess my favorite Movie :-
// let favorate = "3Ediots";
// let i=1;
// let guess = prompt("Enter your guess here");
// while (guess!=favorate && guess!="Quit"){
//      guess = prompt("Try one more time");
//     i++;
// }
// if(guess=="Quit"){
//     console.log("You loose this time!!");
// }
// else{
// console.log(`Congratulations u gussed it right : ${guess}`);
// }

// let fruits = ["Apple","Mango","Papaya","Litchi","Banana"];
// // for(let i=0;i<fruits.length;i++){
// //     console.log(i,fruits[i]);
// // }
// for(let i = fruits.length-1;i>=0;i--){        // Print the reverse array
//     console.log(i,fruits[i]);
// }

// Loop with nested array :-

// let fruits = [["Apple","Mango"],["Banana","Papaya"]];
// for(let i = 0 ; i<fruits.length;i++){
//     for(let j=0;j<fruits[i].length;j++){
//         console.log(j,fruits[i][j]);
//     }
// }
// let Item = [["Pensil",10],["NoteBook",100],["Pen",10],["Box",50]];
// for(let i = 0;i<Item.length;i++){
//     console.log(`The price of Items no. ${i+1}`);
//     for(let j = 0;j<Item[i].length;j++){
//         console.log(Item[i][j]);
//     }
// }
 
//  For of Fruits :-

// let Toys = ["Doll","Dog","Spiderman","Cat","Monkey","Car","Aeroplane"];
// for(toy of Toys){
//     console.log(toy);
// }
// for(elements of "Prateeksha"){
//     console.log(elements);
// }

// Nested For of Loop :-

let Cloths = [["T-shirts","Trowsers"],["Shirts","Pants"],["Tops","jeans"],["kurta","Plazo"],["Saree"]];
for(list of Cloths){
    for(items of list){
        console.log(items);
    }
}