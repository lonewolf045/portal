import { courseDatabase, importCourses, importDepartment, importGroups, importStudents, importTeachers, importUsers, userDatabase } from './connectToFirebase';
import { loadCurrentSession } from './session';

let user,course,adminDept,adminDeg,adminBatch;
Promise.all([importUsers(),importTeachers(),importGroups(),importDepartment()]).then(loadCurrentSession);
export {user,course,adminDept,adminDeg,adminBatch};