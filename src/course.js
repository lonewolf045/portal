import { user } from "./login";

const { importCourses, courseDatabase,db, returnReference } = require("./connectToFirebase");

const course = (courseName,courseCode,assignments,students) => {
    return {courseName,courseCode,assignments,students};
}

const createCourse = (courseName,courseCode) => {
    let newCourse = course(courseName,courseCode,{},{});
    let returnRef = returnReference(user);
    //let dataRef = db.ref().child('Courses');
    //let newReference = dataRef.push();
    db.ref().child('Teachers/'+returnRef+'/Courses').push().set(newCourse); 
    importCourses(user);
    //console.log(courseDatabase);
}

export {createCourse};