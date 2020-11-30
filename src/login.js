import { loginAdminDOM } from './adminLoginPage';
import {importCourses, userDatabase} from './connectToFirebase';
import {loginTeacherDOM} from './teacherLoginPage';
import {loginStudentDOM} from './studentLoginPage';
import {user,course} from './index';
import { setAdmin, setStudent, setTeach } from './session';


const adminLogin = (username,password) => {
    for(let i = 0; i < userDatabase.length; i++) {
        //console.log(userDatabase[i].Type,userDatabase[i].username,username, userDatabase[i].password,password);
        if(userDatabase[i].Type === 'Admin') {
            if(userDatabase[i].username === username && userDatabase[i].password === password) {
                console.log('Success');
                setAdmin(username,password);
                loginAdminDOM(username);
                return;
            }
        }
    }
    //console.log('Wrong Login Credentials');
    window.alert('Wrong Login Credentials');
}

const teacherLogin = (username,password) => {
    for(let i = 0; i < userDatabase.length; i++) {
        //console.log(userDatabase[i].Type,userDatabase[i].username,username, userDatabase[i].password,password);
        if(userDatabase[i].Type === 'Teacher') {
            if(userDatabase[i].username === username && userDatabase[i].password === password) {
                console.log('Success');
                user = username;
                console.log(user);
                setTeach(username,password);
                loginTeacherDOM(username);
                importCourses(user);
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
                setStudent(username,password);
                loginStudentDOM(username);
                return;
            }
        }
    }
    console.log('Wrong Login Credentials');
}

export {adminLogin,teacherLogin,studentLogin};