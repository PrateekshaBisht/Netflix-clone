let greet = "hello"; // global scope

function changegreet(){

       greet = "Namaste";       // function Scope
       console.log(greet);

       function innergreet()
       {
        console.log(greet);        //lexical scope
       }

       innergreet();
}
console.log(greet);
changegreet();

// Function Expression :-
let hello = function(){
    console.log("Hello"); // function scope
}
hello();
hello = function(){
    console.log("Hi!!! how r u ");
}
hello();