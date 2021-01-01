
import { reject } from "lodash";
import { importCourses } from "./connectToFirebase";
//myStorage = window.sessionStorage;
import {user} from './index';
import { adminLogin, studentLogin, teacherLogin } from "./login";
import { openingPage } from "./openingPage";
import { loginStudentDOM } from "./studentLoginPage";
import { loginTeacherDOM } from "./teacherLoginPage";

const setAdmin = (username,password) => {
    let user = {};
    user['username'] = username;
    user['password'] = password;
    user['type'] = 'admin';
    sessionStorage.currentUser = JSON.stringify(user);
}

const setTeach = (username,password) => {
    let user = {};
    user['username'] = username;
    user['password'] = password;
    user['type'] = 'teacher';
    sessionStorage.currentUser = JSON.stringify(user);
}

const setStudent = (username,password) => {
    let user = {};
    user['username'] = username;
    user['password'] = password;
    user['type'] = 'student';
    sessionStorage.currentUser = JSON.stringify(user);
}

const resetCurrentUser = () => {
    sessionStorage.removeItem('currentUser');
}

const loadCurrentSession = () => {
    if(sessionStorage.currentUser === undefined) {
        openingPage();
        return;
    }
        //reject();
    let curruser = JSON.parse(sessionStorage.currentUser);
    console.log(curruser);
    if(curruser.type === 'admin') {
        console.log('admin');
        adminLogin(curruser.username,curruser.password);
    } else if (curruser.type === 'teacher') {
        //user = curruser.username;
        teacherLogin(curruser.username,curruser.password);
        //importCourses(user);
    } else if (curruser.type === 'student') {
        studentLogin(curruser.username,curruser.password);
    }
}


export {setAdmin,setTeach,setStudent,resetCurrentUser,loadCurrentSession};
