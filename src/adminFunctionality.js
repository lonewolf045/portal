import { user } from "./index";
import { groupDatabase, studentDatabase, teacherDatabase } from "./connectToFirebase";
import { createGroup } from "./group";
import { createStudent } from "./student";
import { createTeacher } from "./teacher";
const teacherClose = document.querySelector('#teacherClose');
const studentClose = document.querySelector('#studentClose');
const studentListAdmin = document.querySelector('.open-student-button');
const teacherListAdmin = document.querySelector('.open-teacher-button');
const groupClose = document.querySelector("#groupClose");
const groupListAdmin = document.querySelector('.open-group-button');


const makeStudent = () => {
    const studentForm = document.forms["addStudent"];
    console.log(studentForm);
    let fName = studentForm["firstName"].value;
    let lName = studentForm["lastName"].value;
    let year = studentForm["year"].value;
    let degree = studentForm["degree"].value;
    let dept = studentForm["dept"].value;
    console.log(fName,lName,year,degree,dept);
    createStudent(fName,lName,year,degree,dept);
    studentClose.click();
    studentListAdmin.click();
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
    teacherListAdmin.click();
}

const makeGroup = () => {
    const groupForm = document.forms["addGroup"];
    console.log(groupForm);
    let gName = groupForm["groupName"].value;
    console.log(gName);
    createGroup(gName);
    groupClose.click();
    groupListAdmin.click();
}

const backArrow = (menuFunction) => {
    const backArrowDiv = document.createElement('button');
    const backArrowImage = document.createElement('img');
    backArrowDiv.id = "backArrow";
    backArrowImage.id = "backArrowImage";
    backArrowImage.src = "https://www.pinclipart.com/picdir/big/130-1304091_left-svg-icon-free-icon-back-arrow-png.png";
    backArrowImage.width = "60";
    backArrowImage.height = "40";
    backArrowDiv.appendChild(backArrowImage);
    backArrowDiv.addEventListener('click',() => {
        
        menuFunction();
        console.log('Clicked back');
    });
    return backArrowDiv;
}

const loadTeacherList = () => {
    let teachData = [...teacherDatabase];
    console.log(teacherDatabase);
    return teachData;
}

const loadStudentList = () => {
    let studData = [...studentDatabase];
    console.log(studentDatabase);
    return studData;
}

const loadGroupList = () => {
    let grData = [...groupDatabase];
    console.log(grData);
    return grData;
}

export {backArrow,makeTeacher,makeStudent,loadTeacherList,loadStudentList,makeGroup,loadGroupList};