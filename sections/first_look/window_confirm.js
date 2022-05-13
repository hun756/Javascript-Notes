var message = "Are you sure you want to delete this?";
result = window.confirm(message);

console.log(result);

if (result) {
    console.log("yes I wanna delete");
} else {
    console.log("No I dont wanna delete");
}