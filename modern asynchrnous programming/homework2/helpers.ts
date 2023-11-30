import { Course, Faculty,Program } from "./types";

export function addFacultyToCourse(course:Course,faculty:Faculty){


    for(let i=0; i<course.faculty.length;i++){

        if(faculty.firstname!== course.faculty[i].firstname && faculty.lastname!== course.faculty[i].lastname) return true

    }
    return false;


}

export function addCourseToProgram(program:Program,course:Course){

    for(let i=0;i<program.courses.length;i++){

        if(course.Code!==program.courses[i].Code) return true
    }
     return false;

}

export function combineTwoItems<T>(item1: T, item2: T): T[] {
    return [item1, item2];
  }

