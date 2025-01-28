function hello(){
    console.log("hello");
}
hello();
function num1to5(){
    for(let i = 0 ;i<=5;i++){
        console.log(i);
    }
}
console.log(num1to5());
let age = 17;
function isadult(){
    if( age< 18){
        console.log("You r not an adult anymore");
    }
    else{
        console.log("You r an adult ");
    }
}
isadult();
function poem(){
    console.log("Old Macdonal has a farm e,i,e,i,o");
    console.log( "In his farm he had some chicks e,i,e,i,o");
    console.log( "With a Quack Quack here and a Quack Quack there");
    console.log("Here Quack There Quack Everywhere a QuackQuack ");
    console.log( "Old Macdonal has a farm e,i,e,i,o");
}
poem();
function dice (){
    console.log("Roll a dice");
    console.log(Math.floor(Math.random()*6)+1);
}
dice();
function avg(a,b,c){
       let aver = (a+b+c)/3;
       console.log(`the average of ${a}, ${b} and ${c} is : ${aver}`);  
}
avg(3,4,5);
function table(x){
    for(let i = 1;i<=10;i++){
        console.log(`${x} * ${i} = ${x*i}`);
    }
}
table(9);
function add(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
          sum = sum + i;
    }
    return sum;
}
let final = add(10);
console.log(final);

let str =["Hi","Hello","Hope u had a good day","!!"];
function concat(x){
    let result = "";
     for(let i =0;i<x.length;i++){
         result = result + str[i];
     }
     return result;
}
let finalresult = concat(str);
console.log(finalresult);
