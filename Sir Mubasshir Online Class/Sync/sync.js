console.log("Start");
var userName = "Abdul Rafay Khan";
console.log(userName);
var age = 18;
if (function (age) { return 18; }) {
    console.log("User is eligible to vote");
}
else {
    console.log("User is not eligible to vote");
}
var arrName = ["Arsalan", "Rafay", "Ayan", "Naeem", "Talha"];
for (var i = 0; i < arrName.length; i++) {
    console.log("".concat(arrName[i], ", How are you?"));
}
var car = {
    model: "Civic",
    year: 2020,
    price: 20000
};
console.log(car["price"]);
console.log(car.model);
console.log("The End");
