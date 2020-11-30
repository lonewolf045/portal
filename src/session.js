import { loginAdminDOM } from "./adminLoginPage";
//myStorage = window.sessionStorage;

import { adminLogin, studentLogin, teacherLogin } from "./login";
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
    if(sessionStorage.currentUser === undefined)
        return;
    let user = JSON.parse(sessionStorage.currentUser);
    console.log(user);
    if(user.type === 'admin') {
        console.log('admin');
        loginAdminDOM(user.username,user.password);
    } else if (user.type === 'teacher') {
        loginTeacherDOM(user.username,user.password);
    } else if (user.type === 'student') {
        loginStudentDOM(user.username,user.password);
    }
}


export {setAdmin,setTeach,setStudent,resetCurrentUser,loadCurrentSession};
