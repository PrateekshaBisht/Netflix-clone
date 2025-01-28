// const student = {
//      name : "Prateeksha",
//      age : 23,
//      course :"MCA",
//      friends : [["Akhil","yakshika","Ravi"],["Sam","Shivam","Sumit"]]
// };
// console.log(student);

// Create an object literal for the properties of Thread/ Twitter Post :-----------------------
// const post = {
//       Username : "@Prateekshabisht",
//       content : "This is my #Firstpost",
//       likes : 10,
//       repost : 4
// };
// console.log(post);

// Get values(How to access value of a particular element):--------------------------------

//  First Method :-
// console.log(post["likes"]);
//Second Method:-
// console.log(post.Username);

// To access value stored in a variable we use square brackets :---------------------------

// let vari = "content";
// console.log(post[vari]);

// To update , add , delete values in an Object Literal :---------------------------

// const Items = {
//       Books : 10 ,
//       Pens : 100,
//       Notebooks : 50,
//       Pensils : 25
// };
// Get value :----------------------------------------------------------------

//  console.log(Items["Books"]);
//  console.log(Items.Pensils);

 //Add value:-------------------------------------------------------------------

//  Items.Box = 10;
//  console.log(Items);
//  Items["Kits"] = 25;
//  console.log(Items);

 // Update values :---------------------------------------

//  Items.Box = 25;
//  Items["Books"]=30;

 // Delete :-------------------------------------------------

//  delete Items.Pens;
//  delete Items["Kits"];

 // Nesting of Object Literals (Object of objects):----------------------------------------------

//  const StudentInfo = {
//        student1:{
//         fname:"Akhil",
//         address:"Kanpur",
//         grade:"O"
//        },
//        student2:{
//         fname:"Prateeksha",
//         address:"uttarakhand",
//         grade:"A+"
//        },
//        student3:{
//         fname:"Neelam",
//         address:"Agra",
//         grade:"A"
//        }
//  };
//  console.log(StudentInfo.student1.fname);     // Chaning-----------------------
//  console.log(StudentInfo.student2.address ="kanpur");
//  console.log(StudentInfo.student2);

// Array of Objects :-------------------------
// const StudentInfo = [
//      {
//          fname:"Akhil",
//          address:"kanpur",
//          grade:"A+"
//     },
//     {
//         fname:"prateeksha",
//         address:"Uttrakhand",
//         grade:"A+"
//     },
//     {
//         fname:"Aman",
//         address:"UP",
//         grade:"A"
//     }
// ];
// StudentInfo[1].gender = "Female";
// StudentInfo[1].address ="Kanpur";
// console.log(StudentInfo[1]);


