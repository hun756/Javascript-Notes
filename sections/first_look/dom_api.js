document.getElementById("paragraph").textContent = "Hello, World";

var element = document.createElement('p');
element.textContent = "This is a new element";

//add the newly created element to the DOM
document.body.appendChild(element); 

// using windows alert
var message = "This is alert message";
window.alert(message);

// using window promp
var age = +prompt("How old are you?");
if (age >= 18) {
    window.alert("you can give vote :)");
}