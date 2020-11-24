import { loginAdminDOM } from './adminLoginPage';
import {userDatabase} from './connectToFirebase';
import {loginTeacherDOM} from './teacherLoginPage';
import {loginStudentDOM} from './studentLoginPage';
const adminLogin = (username,password) => {
    for(let i = 0; i < userDatabase.length; i++) {
        //console.log(userDatabase[i].Type,userDatabase[i].username,username, userDatabase[i].password,password);
        if(userDatabase[i].Type === 'Admin') {
            if(userDatabase[i].username === username && userDatabase[i].password === password) {
                console.log('Success');
                loginAdminDOM(username);
                return;
            }
        }
    }
    console.log('Wrong Login Credentials');
}

const teacherLogin = (username,password) => {
    for(let i = 0; i < userDatabase.length; i++) {
        //console.log(userDatabase[i].Type,userDatabase[i].username,username, userDatabase[i].password,password);
        if(userDatabase[i].Type === 'Teacher') {
            if(userDatabase[i].username === username && userDatabase[i].password === password) {
                console.log('Success');
                loginTeacherDOM(username);
                return;
            }
        }
    }
    console.log('Wrong Login Credentials');
}

const studentLogin = (username,password) => {
    for(let i = 0; i < userDatabase.length; i++) {
        //console.log(userDatabase[i].Type,userDatabase[i].username,username, userDatabase[i].password,password);
        if(userDatabase[i].Type === 'Student') {
            if(userDatabase[i].username === username && userDatabase[i].password === password) {
                console.log('Success');
                loginStudentDOM(username);
                return;
            }
        }
    }
    console.log('Wrong Login Credentials');
}

export {adminLogin,teacherLogin,studentLogin};