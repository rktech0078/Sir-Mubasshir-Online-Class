// // RESOLVE
// const promise1 = new Promise((resolve,reject) => {
//     resolve("Successfully.....")
// })

// promise1.then((value) => {
//     console.log(value);
    
// })

// // REJECT
// const promise2 = new Promise((resolve,reject) => {
//     reject("Unseccesfully.....")
// })

// promise2.catch((error) => {
//     console.log(error);
    
// })

// // RESOLVE AND REJECT BOTH WITH METHOD CHAINING AND WITH SOME DELAY(setTimeout)

// // RESOLVE
// const promise3 = new Promise ((resolve,reject) => {
//    setTimeout(() => {
//         resolve("Returned Money")
//     }, 5000)
// });

// promise3.then((value) => {
//     console.log(value);
//     console.log("Thamks for returning money");
// }).catch(() => {
//     console.log("I'm unable to returning money");
    
// })


// // REJECT
// const promise4 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject("Failing to returning money")
//     },5000)
// });

// promise4.then((value) => {
//     console.log(value);
    
// }).catch((value) => {
//     console.log(value);
//     console.log("I'm unable to returning money");
    
    
// });



// EXAMPLE OF USING PROMISESAND BRINGING CONCURRENCY 

function washing(){
    console.log("Washing Started...");
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve("Washing Done...")
        },5000)
    })
    
};

console.log("Thanks");


function soaking (){
    console.log("Soaking Started...");
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Soaking Done...");
        },4000)
    })
};

function drying (){
    console.log("Drying Started");
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Drying not Done ???");
            
        },3000)
    })
};

// washing()
//     .then((value) => {
//     console.log(value);
//     return soaking()
// })
//     .then((value) => {
//     console.log(value);
//     return drying()
// })
//     .then((value) => {
//     console.log(value);
// });


async function handleWashinMachine(){
    try {
            const a =  await washing()
    console.log(a);
    const b = await soaking()
    console.log(b);
    const c = await drying()
    console.log(c);
    } catch (error) {
        console.log(error);
        
    }finally{
        console.log("Because Light was gone !!!");
        
    }

}

handleWashinMachine()

console.log("I am making Biryani");
