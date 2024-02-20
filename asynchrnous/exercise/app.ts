



// type Course = { id: number, title: string, description: string; };
// type Student = { id: number, name: string, courses: Course[]; };

//import prompts from "prompts";

// let data_1: readonly Student[] = Object.freeze([]);
// let data_2: { [student_id: string]: { name: string, courses: Course[]; }; } = Object.freeze({});

// function getStudentv1(student_id: number) {

//     let idexist = data_1.find(elem => elem.id === student_id);
//     if (!idexist) return undefined;

//     return idexist;
// }

// function getStudentv2(student_id: number): Student | undefined {

//     let idexist = student_id in data_2;
//     if (!idexist) return undefined;


//     return { id: student_id, ...data_2[student_id] };



// }



// function addStudentv1(student: Student): boolean {
//     let studentexist = data_1.find(elem => elem === student);
//     if (studentexist) return false;

//     data_1 = [...data_1, student];
//     return true;
// }

// function addStudentv2(student: Student): boolean {
//     let studentexist = 'student.id' in data_2;
//     if (studentexist) return false;

//     //[...data_2,[student.id]:{name:String,courses:[]}];
//     let newdata2 = structuredClone(data_2);
//     newdata2 = { ...newdata2, student };

//     data_2 = newdata2;
//     return true;
// }



// let neba = { id: 11, name: 'neba', courses: [{ id: 123, title: 'cs', description: 'computer science' }] };
// console.log(addStudentv2(neba));


// function updateStudentv1(student: Student): boolean {

//     let studentexist = data_1.find(elem => elem.id === student.id);
//     if (!studentexist) return false;

//     let newdata = structuredClone(data_1);
//     newdata = [...newdata, student];

//     data_1 = newdata;
//     return true;
// }

// function updateStudentv2(student: Student): boolean {

//     let studentexist = student.id in data_2;
//     if (!studentexist) return false;

//     let newdata = structuredClone(data_2);
//     newdata = { ...newdata, student };
//     data_2 = newdata;
//     return true;

// }


// function removeStudentv1(student_id: number): boolean {

//     let studentexist = data_1.find(elem => elem.id === student_id);
//     if (!studentexist) return false;
//     let filter = data_1.filter(elem => elem.id !== student_id);
//     let newdata = structuredClone(data_1);
//     newdata = [...filter];
//     data_1 = newdata;
//     return true;

// }

// function removeStudentv2(student_id: number): boolean {

//     let studentexist = student_id in data_2;
//     if (!studentexist) false;
//     delete data_2.student_id;
//     return true;
// }

// // getCourse(student_id: number, course_id: number): Course{ }
// function addCoursev1(student_id: number, course: Course): boolean {
//     let newdata = structuredClone(data_1);
//     let studentexist = newdata.find(elem => student_id in elem);
//     if (!studentexist) return false;
//     let corseexist = studentexist.courses.find(elem => course.id in elem);//{c1}
//     if (corseexist) return false;
//     studentexist.courses.push(course);//
//     newdata = [...newdata, studentexist];
//     data_1 = newdata;

//     return true;

// }

// function getCoursev2() { }
// // updateCourse(student_id: number, course: Course): boolean{ }
// // removeCourse(student_id: number, course_id: number): boolean{ }



//new homework


type Course = { id: number, title: string, description: string; };
type Student = { id: number, name: string, courses: Course[]; };

let data_1: readonly Student[] = Object.freeze([]);
let data_2: { [student_id: string]: { name: string, courses: Course[]; }; } = Object.freeze({});

function getStudentv1(student_id: number): Student | undefined {
    let studentexist = data_1.find(elem => student_id in elem);
    if (!studentexist) return undefined;

    return studentexist;
}

function getStudentv2(student_id: number): Student | undefined {

    let studentexist = student_id in data_2;
    if (!studentexist) return undefined;
    return { id: student_id, ...data_2.student_id };

}



function addStudentv1(student: Student): boolean {

    let studentexsit = data_1.find(elem => student.id in elem);
    if (studentexsit) return false;

    let newdata = JSON.parse(JSON.stringify(data_1));
    newdata = newdata.push(student);

    data_1 = newdata;
    return true;

}

function addStudentv2(student: Student): boolean {

    let studentexist = student.id in data_2;//
    if (studentexist) return false;

    let newdata = JSON.parse(JSON.stringify(data_2));
    newdata = { ...newdata, student };
    data_2 = newdata;
    return true;

}

function updateStudentv1(student: Student): boolean {
    let studentexist = data_1.find(elem => student.id in elem);
    if (!studentexist) return false;
    let newdata = JSON.parse(JSON.stringify(data_1));
    newdata = [...newdata, student];
    data_1 = newdata;
    return true;
}

function updateStudentv2(student: Student): boolean {

    let studentexist = student.id in data_2;
    if (!studentexist) return false;

    let newdata = JSON.parse(JSON.stringify(data_2));
    newdata = { ...newdata, student };
    data_2 = newdata;
    return true;
}
// removeStudent(student_id: number): boolean{ }

// getCourse(student_id: number, course_id: number): Course{ }
function addCourse(student_id: number, course: Course): boolean {
    let newdata = JSON.parse(JSON.stringify(data_2));

    let studentexist = student_id in data_2;
    if (!studentexist) return false;

    let corsexist = course.id in data_2.courses;//[{c1},{c2}...]
    if (corsexist) return false;
    data_2 = newdata;
    newdata.courses.push(course);
    return true;

}
// updateCourse(student_id: number, course: Course): boolean{ }
// removeCourse(student_id: number, course_id: number): boolean{ }



interface Item<T> { [key: string]: T; }
interface State<T> { data: Item<T>[]; }

class MyStorage<T> {
    private state: State<T> = Object.freeze({ data: [] });

    // getItem(key: string): T | null {

    // }

    addItem(key: string, value: T): boolean {

        let itemexist = this.state.data.find(elem => key in elem);//...push({key:value}); 
        if (itemexist) false;
        let newdata = { ...this.state };//[{},{}]
        newdata.data.push({ key: value });
        return true;

    }
    updateItem(key: string, value: T): boolean {
        let newdata = { ...this.state };
        let keyexist = newdata.data.find(elem => key in elem);//old data
        if (!keyexist) return false;
        newdata.data = [...newdata.data, { key: value }];//{key:value}
        this.state = newdata;
        return true;
    }
    //     removeItem(key: string): boolean { }
    //     getData() { return this.state.data; }
}




// import prompts from 'prompts';


// let y = prompts({
//     type: 'number',
//     name: 'value',
//     message: 'What is your id?',
//     validate: (value: number) => value > 0 && value <= 10,
// });//{value:4}

// let x = y.then((result) => result.value);//return ...>4

// let fetwebsite = 'https://jsonplaceholder.typicode.com/users/' + x;




import prompts from 'prompts';
import fetch, { Response } from "cross-fetch";
import { json } from "stream/consumers";

// interface Root2 {

//     name: string;
//     email: string;
//     phone: string;


// }

// async function getUserWebsite() {
//     let result = await prompts({
//         type: 'number',
//         name: 'value',
//         message: 'What is your id?',
//         validate: (value: number) => value > 0 && value <= 10,
//     });

//     let x = result.value;

//     fetch(`https://jsonplaceholder.typicode.com/users/` + x)
//         .then(wdata => wdata.json())
//         .then((jsondata: Root2) => console.log(jsondata.name + " " + jsondata.email + " " + jsondata.phone))
//         .catch((error) => console.error('error'));


// };

// getUserWebsite();



