import { courseDatabase, importCourses, importDepartment, importGroups, importStudents, importTeachers, importUsers, userDatabase } from './connectToFirebase';
import { loadCurrentSession } from './session';
import { openingPage } from './openingPage';
//import {user} from './login';

let user,course,adminDept,adminDeg,adminBatch;
Promise.all([importUsers(),importStudents(),importTeachers(),importGroups(),importDepartment()]).then(loadCurrentSession);
export {user,course,adminDept,adminDeg,adminBatch};