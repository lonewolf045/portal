import buttonClass from './button';
import {newAdmin} from './admin';
import { importStudents, importUsers } from './connectToFirebase';
import { formDisplay } from './loginForm';
importUsers();
importStudents();
buttonClass();
//formDisplay();
newAdmin('admin','admin');