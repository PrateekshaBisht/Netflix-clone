let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();                           // this event prevent the form from its default action 
    let user = this.elements[0];                      // access the elements of form;
    let pass = this.elements[1];
    alert(`Hi! ${user.value} your password is set to ${pass.value}`);
    console.log("Form is submitted");
})