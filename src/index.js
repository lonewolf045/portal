import buttonClass from './button';
import {newAdmin} from './admin';
import { courseDatabase, importCourses, importGroups, importStudents, importTeachers, importUsers, userDatabase } from './connectToFirebase';
import { formDisplay } from './loginForm';
import { loadCurrentSession } from './session';
//import {user} from './login';

let user,course;
Promise.all([importUsers(),importStudents(),importTeachers(),importGroups()]).then(loadCurrentSession);
buttonClass();
export {user,course};