import { adminBatch, adminDeg, adminDept } from "./index";
import { importUsers, userDatabase, db, importStudents, studentDatabase, storeStudent } from "./connectToFirebase";

const student = (enroll,firstName,lastName,batch,degree,dept,username,password) => {
    return {firstName,lastName,batch,degree,username,dept,password,enroll};
};

const createStudent = (enroll,firstName,lastName,batch,degree,dept) => {
    let password = "student123";
    let username = firstName.toLowerCase().split(' ').join('')+lastName+enroll;
    let newStudent = student(enroll,firstName,lastName,batch,degree,dept,username,password);
    storeStudent(newStudent);
    //console.log(userDatabase,studentDatabase);
}

const loadCSVToDataStudent = (csvData) => {
    let csvObject = csvData.map(x => {
        let password = "student123";
        let username = x[1].toLowerCase().split(' ').join('')+x[2]+x[0];
        let newStudent = student(x[1],x[2],x[4],x[6],x[3],username,password,x[0]);
        return newStudent;
    });
    csvObject.forEach(x => {storeStudent(x)});    
}



export {createStudent,loadCSVToDataStudent};

