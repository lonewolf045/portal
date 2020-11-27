const { createCourse } = require("./course");

const courseClose = document.querySelector('#courseClose');
const makeCourse = () => {
    const courseForm = document.forms["addCourse"];
    console.log(courseForm);
    let cName = courseForm["courseName"].value;
    let cCode = courseForm["courseCode"].value;
    let tCode = courseForm["teacherCode"].value;
    console.log(cName,cCode,tCode);
    createCourse(cName,cCode,tCode);
    courseClose.click();
}

export {makeCourse};