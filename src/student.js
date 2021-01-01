import { adminBatch, adminDeg, adminDept } from "./index";
import { importUsers, userDatabase, db, importStudents, studentDatabase, storeStudent } from "./connectToFirebase";

const student = (firstName,lastName,batch,degree,dept,username,password,enroll) => {
    return {firstName,lastName,batch,degree,username,dept,password,enroll};
};

const createStudent = (firstName,lastName,enroll = 11) => {
    let password = "student123";
    let username = firstName.toLowerCase()+lastName+adminBatch.batchCode;
    let newStudent = student(firstName,lastName,adminBatch.batchName,adminDeg.degName,adminDept.deptName,username,password,enroll);
    let degCode = adminDeg.degShort.split(".").join("");
    storeStudent(newStudent);
    importUsers();
    importStudents(adminDept.deptCode,adminDeg.degShort,adminBatch.batchCode);
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

