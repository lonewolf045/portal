import buttonClass from './button';
import {newAdmin} from './admin';
import { courseDatabase, importCourses, importGroups, importStudents, importTeachers, importUsers, userDatabase } from './connectToFirebase';
import { formDisplay } from './loginForm';
import { loadCurrentSession } from './session';
//import {user} from './login';

let user,course;
// function importDatabase () {
//     importUsers();
//     importStudents();
//     importTeachers();
//     //importCourses();
//     importGroups();
//     buttonClass();
// };
// function loadSession () {
//     loadCurrentSession();
//     console.log(user);
// }
// importDatabase().then(loadSession);
//importDatabase();
//loadCurrentSession();
//loadDatabase.then(() => {loadCurrentSession();});
Promise.all([importUsers(),importStudents(),importTeachers(),importGroups()]).then(loadCurrentSession);
buttonClass();
//console.log(user);
//formDisplay();
//newAdmin('admin','admin');
export {user,course};