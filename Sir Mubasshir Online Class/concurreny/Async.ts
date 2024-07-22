// console.log("ONE");


// setTimeout(function (){
//     console.log("Hello world");
    
// }, 5000)


// console.log("TWO");


function washing (callback){
    console.log("Washing started");
    setTimeout(() => {
        console.log("Washing finished");
        callback();
    },5000)
};

function soaking (callback){
    console.log("Soaking started");
    setTimeout(() => {
        console.log("Soaking finished");
        callback();
    },3000)
};

function drying (){
    console.log("Drying Started");
    setTimeout(() => {
        console.log("Drying finished");
        
    },3000)
}

washing(() => {
    soaking(() => {
        drying()
    })
})

console.log("THREE");