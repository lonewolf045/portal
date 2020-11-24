const { importUsers, importTeachers, db } = require("./connectToFirebase");

const teacher = (firstName,lastName,teacherCode,username) => {
    return {firstName,lastName,teacherCode,username};
}

const createTeacher = (firstName,lastName,teacherCode) => {
    let username = firstName.toLowerCase() + lastName + teacherCode;
    let newTeacher = teacher(firstName,lastName,teacherCode,username);
    let dataRef = db.ref().child('Teachers');
    let newReference = dataRef.push();
    newReference.set(newTeacher);
    let userRef = db.ref().child('users');
    let userReference = userRef.push();
    userReference.set({
        Type: 'Teacher',
        username:   newTeacher.username,
        password: 'teacher123'
    });
    importUsers();
    importTeachers();
}

export {createTeacher};