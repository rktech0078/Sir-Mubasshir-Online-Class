console.log("Start");

let userName: string = "Abdul Rafay Khan";

console.log(userName);

let ages: number = 18;

if((ages: any) => 18){
    console.log("User is eligible to vote");
}else{
    console.log("User is not eligible to vote");
    
}

const arrName: string[] = ["Arsalan","Rafay","Ayan","Naeem","Talha"]

for(let i = 0; i < arrName.length; i++){
    console.log(`${arrName[i]}, How are you?`);
    
}

type carType = {
    model: string,
    year: number,
    price: number
    isUsed?:boolean
}

const car: carType = {
    model: "Civic",
    year: 2020,
    price: 20000
}

console.log(car[`price`]);
console.log(car.model);

console.log("The End");


