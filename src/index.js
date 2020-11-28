import buttonClass from './button';
import {newAdmin} from './admin';
import { importCourses, importGroups, importStudents, importTeachers, importUsers } from './connectToFirebase';
import { formDisplay } from './loginForm';
//import {user} from './login';

let user,course;
importUsers();
importStudents();
importTeachers();
//importCourses();
importGroups();
buttonClass();
console.log(user);
//formDisplay();
//newAdmin('admin','admin');