import { storeCourses } from "./connectToFirebase";

const course = (courseName,courseCode,facultyAssigned,students) => {
    return {courseName,courseCode,facultyAssigned,students};
}

const createCourse = (courseName,courseCode,facultyAssigned) => {
    let newCourse = course(courseName,courseCode,facultyAssigned,{});
    storeCourses(newCourse);
}

export {createCourse};