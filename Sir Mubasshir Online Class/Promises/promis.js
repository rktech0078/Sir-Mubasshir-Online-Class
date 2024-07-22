// RESOLVE
const promise1 = new Promise((resolve, reject) => {
    resolve("Successfully.....");
});
promise1.then((value) => {
    console.log(value);
});
// REJECT
const promise2 = new Promise((resolve, reject) => {
    reject("Unseccesfully.....");
});
promise2.catch((error) => {
    console.log(error);
});
// RESOLVE AND REJECT BOTH WITH METHOD CHAINING AND WITH SOME DELAY(setTimeout)
// RESOLVE
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Returned Money");
    }, 5000);
});
promise3.then((value) => {
    console.log(value);
    console.log("Thamks for returning money");
}).catch(() => {
    console.log("I'm unable to returning money");
});
// REJECT
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Failing to returning money");
    }, 5000);
});
promise4.then((value) => {
    console.log(value);
}).catch((value) => {
    console.log(value);
    console.log("I'm unable to returning money");
});
export {};
