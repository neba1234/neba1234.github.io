//create a function addFacultyToCourse which accepts two parameters: course and faculty. The function returns boolean.
//return true if the faculty's firstname and lastname does not previously exists in the course, and was added successfully.

import { Course, Faculty } from "./types";

export function addFacultyToCourse(course: Course, faculty: Faculty): boolean {

    let facultyarray = course.faculty;

    for (let i = 0; i < facultyarray.length; i++) {

        if (facultyarray[i] === faculty) return false;
    }

    facultyarray = [...facultyarray, faculty];
    return true;



}