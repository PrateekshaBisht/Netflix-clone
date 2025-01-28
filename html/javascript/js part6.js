//Question 1 :--------------------
let arr=[2,3,6,9,4];
function large(num){
    let new_arr = [];
    for(let i =0 ;i<arr.length;i++) {
        if(arr[i]>num){
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}
console.log(large(5));

// Question 3 :--------------------------

function largestcountry(country){
       let lindx = 0;
       for(let i = 0;i<country.length;i++){
        if(country[i].length>country[lindx].length){
            lindx = i;
        }
       }
       return lindx;
}
let Country = ["Australia","Germany","United States of America"];
 let Output = largestcountry(Country);

 console.log(Country[Output]);

 //Question 4 :-------------------------------------
let str = "Prateeksha";
console.log(str.length);
let count = 0;
 function vowel(){
     for(let i = 0 ;i<str.length;i++){
        if(str[i]=="a"){
            count = count + 1;
        }
        else if( str[i]=="e"){
            count = count+1;
        }
        else if( str[i]=="i"){
            count = count+1;
        }
        else if( str[i]=="o"){
            count = count+1;
        }
        else if( str[i]=="u"){
            count = count+1;
        }
     }
     return count;
 }
 console.log(vowel());

 // Question 5 :---------------------------------
 let start = 5;
 let end = 10;
 let difference = end - start;
 function random(){
    let num = Math.floor(Math.random()*difference+1) + start ;
    return num;
 }
 console.log(random());
