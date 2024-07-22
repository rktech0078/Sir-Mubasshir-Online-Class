function parentFunction(abc) {
    console.log("Hello! Rafay, I am parent fuction (1)");
    abc();
}
function childFunction() {
    console.log("Hello! Rafay, I am children fuction (2)");
}
// parentFunction(childFunction)
// ***** Example *****
function aFunction(xyz) {
    console.log("Hello I'm Console");
    let names = "Abdul Rafay Khan";
    xyz(names);
}
function bFunction(name) {
    console.log("Hello, I'm 'b' Fuction " + name);
}
aFunction(bFunction);
export {};
