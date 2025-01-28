let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(...arr);
console.log(Math.min(...arr));
console.log(Math.max(...arr));
console.log(..."Hello");

// Spread with Object literals :------------

const object = {
     name : "Prateeksha",
     email : "prateekshabisht2000@gmail.com",
     password : 1234
};
let copyobject = {
    ...object,
    id : 1234567890
};
console.log(copyobject);

let arr1 = [1,2,3,4,5,6,7];
const arrobject = {
    ...arr1
};
console.log(arrobject);

let object1 = {
  ..."You r doing a great job"
};
console.log(object1);