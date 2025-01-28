// Destructuring in an array :-----

let names = ["tony","burce","akhil","prathu"];
let [neighbour1,neighbour2,...family] = names ;
console.log(neighbour1,neighbour2,family);

// Destructuring in an object :--------

const student = {
    name : "Prateeksha",
    age : 23,
    email : "prateekshabisht2000@gmail.com",
    username :"prateeksha1234",
    password : 123456789
};

const{
   username : user ,
   password : pass,
   state = "UK"
} = student;
console.log(user,pass,state);
