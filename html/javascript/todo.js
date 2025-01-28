let todo = [];
let req = prompt("Enter your request");
while(true){
       if(req=="Quit"){
        console.log("You Quit the todo");
        break;
       }
      else if(req=="Add"){
        let task = prompt("Enter the task");
        todo.push(task);
        console.log("task is added");
        
       }
      else if(req=="list"){
        for( let i=0 ; i<todo.length ; i++) {
            console.log(i,todo[i]);
        }
       }
       else if(req=="delete"){
        let ind = prompt("Enter the index");
        todo.splice(ind,1);
        console.log("Task is removed");
       }
       req = prompt("Enter your request");
}