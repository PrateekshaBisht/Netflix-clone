// Higher Order function which passes another function as an argument:--------------------------

function Hi(fun,count){
     for(let i = 1;i<=count;i++){
       fun();
     }

}
 let hello = function(){
    console.log("Hello how r u ");
}
Hi(hello,6);

// Higher Order function which will return another function:-----------------------------
function evenorodd(request){
       if(request=="odd"){
        return function(n){
          console.log(n%2!=0);
        }
       }
       else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
       }
       else {
        console.log("Wrong request!!");
       }
}
let func = evenorodd("odd");
func(5);

// Methods :----------------------------------------
// let calculator = {
//       add : function(a,b){
//         return a+b;
//       },
//       sub : function(a,b){
//         return a-b;
//       },
//       multi : function(a,b){
//         return a*b;
//       }
// };
// console.log(calculator.add(5,3));

// Another way of defining it is :----------

let calculator = {
         add(a,b){
            return a+b;
         },
         sub(a,b){
            return a-b;
         },
         Multi(a,b){
            return a*b;
         }
};
console.log(calculator.Multi(10,10));
