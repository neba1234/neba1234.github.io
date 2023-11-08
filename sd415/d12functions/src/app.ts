// import { compound } from "./compound.js"
//import  promptSync from "prompt-sync";

//console.log("compound returns 0: ", compound(100,100));




// const prompt = promptSync();

// const principal = prompt("Enter the principal amount: ");
// console.log("principal", principal);



import PromptSync from "prompt-sync";

let prompt=PromptSync();


// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
//     [key: string]: string | number;
// }

// let person: Person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
// };

// for (let key in person) {
//     // if (person.hasOwnProperty(key)) {
//     //     console.log(`${key}: ${person[key]}`);
//     // }

//     console.log(person[key])
// }


interface Student{

    studentId:number;
    quizAnswer:number[];
    [key: number]:string | number;

}

let student1:Student= {

    studentId:101,
    quizAnswer:[1,1,2,4]
};

let student2:Student= {

    studentId:102,
    quizAnswer: [2, 1, 2,2]
};

let student3:Student= {

    studentId:103,
    quizAnswer:  [3, 1, 3,4] 
};

for(let key in student1){


    //console.log(key);
    console.log(student1[key]);
}
















