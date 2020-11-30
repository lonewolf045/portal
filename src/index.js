import buttonClass from './button';
import {newAdmin} from './admin';
import { importCourses, importGroups, importStudents, importTeachers, importUsers } from './connectToFirebase';
import { formDisplay } from './loginForm';
import { loadCurrentSession } from './session';
//import {user} from './login';

let user,course;
async function importDatabase () {
    importUsers();
    importStudents();
    importTeachers();
    //importCourses();
    importGroups();
    buttonClass();
};
// function loadSession () {
//     loadCurrentSession();
//     console.log(user);
// }
// importDatabase().then(loadSession);
importDatabase();
loadCurrentSession();
//console.log(user);
//formDisplay();
//newAdmin('admin','admin');
export {user,course};