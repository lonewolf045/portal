const { importCourses, courseDatabase,db } = require("./connectToFirebase");

const course = (courseName,courseCode,assignments,students,teacherCode) => {
    return {courseName,courseCode,assignments,students,teacherCode};
}

const createCourse = (courseName,courseCode,teacherCode) => {
    let newCourse = course(courseName,courseCode,{},{},teacherCode);
    let dataRef = db.ref().child('Courses');
    let newReference = dataRef.push();
    newReference.set(newCourse); 
    importCourses();
    console.log(courseDatabase);
}

export {createCourse};