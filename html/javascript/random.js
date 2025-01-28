// Generate the random numbers between 1 to 10 
// let step1 = Math.random();
// let step2 = Math.random()*10; // multiply with the highest no. between which u want to generate the no.i.e;10 here.
// let step3 = Math.floor(step2);
// let step4 = step3+1;// to get 10 

// oneline define :------------------------------------------
// let final = Math.floor(Math.random()*100)+1; // Generate the random no. between 1 to 100.
// console.log(final);

// Generate the random no. between 1 to 5:----------------------
// let num = Math.floor(Math.random()*5)+1;
// console.log(num);

// generate the random no. between 21 to 40:---------------------

// let num1 = Math.floor(Math.random()*20)+21; // start from 21 and end to 40 
// console.log(num1);

//  Guessing game - Guess a random generate number between 1 to max number input :---------------------------------
let maxnum = prompt("Enter the max number here");
let random = Math.floor(Math.random()*maxnum)+1;
let guess = prompt("Enter your guess here ");
while(true){
    if(guess == "Quit"){
        console.log("You Quit");
        break;
    }
    else if(guess == random){
        console.log(`You gussed the right number i.e; ${random}`);
        break;
    }
    else if (guess>random){
     guess = prompt("Your no. is large enter the smaller one");
    }
    else{
    guess = prompt("Your number is small enter the larger one");
    }
}


