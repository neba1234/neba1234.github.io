// npm i cross-fetch
// npm i prompts
// npm i @types/prompts -D

import prompts from "prompts";
import fetch from "cross-fetch";






let result = fetch('https://jsonplaceholder.typicode.com/users/')//...promise file
    .then(Response => Response.json());//...{}json file
result.then(func);//[{},{}...]

function func(myfile: any) {//[{},{}...]


    // let y = prompts({
    //     type: 'number',
    //     name: 'value',
    //     message: 'What is your id?',
    //     validate: (value: number) => value > 0 && value <= 10,
    // });//{value:4}

    // let x = y.then((result) => result.value);//return ...>4


    for (let elem of myfile) {

        if (elem.id === 1) console.log(`${elem.name} ${elem.email} ${elem.phone} `);
    }
}









