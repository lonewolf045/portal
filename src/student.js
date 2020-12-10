import { adminBatch, adminDeg, adminDept } from "./index";
import { importUsers, userDatabase, db, importStudents, studentDatabase } from "./connectToFirebase";

const student = (firstName,lastName,batch,degree,dept,username,password) => {
    return {firstName,lastName,batch,degree,username,dept,password};
};

const createStudent = (firstName,lastName) => {
    let password = "student123";
    let username = firstName.toLowerCase()+lastName+adminBatch.batchCode;
    let newStudent = student(firstName,lastName,adminBatch.batchName,adminDeg.degName,adminDept.deptName,username,password);
    let degCode = adminDeg.degShort.split(".").join("");
    let dataRef = db.ref().child('Departments/'+adminDept.deptCode+'/Degrees/'+degCode+'/Batches/'+adminBatch.batchCode+'/Students/'+username);
    //let dataRef = db.ref().child('Students');
    //let newReference = dataRef.push();
    dataRef.set(newStudent);
    let userRef = db.ref().child('users');
    let userReference = userRef.push();
    userReference.set({
        Type: 'Student',
        username:   newStudent.username,
        password: 'student123'
    });
    importUsers();
    importStudents(adminDept.deptCode,adminDeg.degShort,adminBatch.batchCode);
    //console.log(userDatabase,studentDatabase);
}

export {createStudent};

