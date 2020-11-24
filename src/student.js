import { importUsers, userDatabase, db, importStudents, studentDatabase } from "./connectToFirebase";

const student = (firstName,lastName,year,degree,username) => {
    return {firstName,lastName,year,degree,username};
};

const createStudent = (firstName,lastName,year,degree) => {
    let username = firstName.toLowerCase()+lastName+year;
    let newStudent = student(firstName,lastName,year,degree,username);
    let dataRef = db.ref().child('Students');
    let newReference = dataRef.push();
    newReference.set(newStudent);
    let userRef = db.ref().child('users');
    let userReference = userRef.push();
    userReference.set({
        Type: 'Student',
        username:   newStudent.username,
        password: 'student123'
    });
    importUsers();
    importStudents();
    //console.log(userDatabase,studentDatabase);
}

export {createStudent};

