// console.log("ONE");
// setTimeout(function (){
//     console.log("Hello world");
// }, 5000)
// console.log("TWO");
function washing(callback) {
    console.log("Washing started");
    setTimeout(function () {
        console.log("Washing finished");
        callback();
    }, 5000);
}
;
function soaking(callback) {
    console.log("Soaking started");
    setTimeout(function () {
        console.log("Soaking finished");
        callback();
    }, 3000);
}
;
function drying() {
    console.log("Drying Started");
    setTimeout(function () {
        console.log("Drying finished");
    }, 3000);
}
washing(function () {
    soaking(function () {
        drying();
    });
});
console.log("THREE");
