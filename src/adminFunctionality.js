import { createStudent } from "./student";
import { createTeacher } from "./teacher";
const teacherClose = document.querySelector('#teacherClose');
const makeStudent = () => {
    const studentForm = document.forms["addStudent"];
    console.log(studentForm);
    let fName = studentForm["firstName"].value;
    let lName = studentForm["lastName"].value;
    let year = studentForm["year"].value;
    let degree = studentForm["degree"].value;
    console.log(fName,lName,year,degree);
    createStudent(fName,lName,year,degree);
    studentClose.click();
}

const makeTeacher = () => {
    const teacherForm = document.forms["addTeacher"];
    console.log(teacherForm);
    let fName = teacherForm["firstName"].value;
    let lName = teacherForm["lastName"].value;
    let teacherCode = teacherForm["teacherCode"].value;
    //let degree = studentForm["degree"].value;
    console.log(fName,lName,teacherCode);
    createTeacher(fName,lName,teacherCode);
    teacherClose.click();
}

export {makeTeacher,makeStudent};