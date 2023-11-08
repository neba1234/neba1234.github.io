interface Person {

    firstname:String;
    lastname:String;
    age:number;
}

let x= {

    firstname:"neba",
    lastname:"ahmed",
    age: 30

};


for(let key in x){

    console.log(key);
    console.log(x[key])
}

//let object= new Object(firstname:String;lastname:String;age:number);