import { formDisplay } from "./loginForm";
import {logOut} from './adminLogout';
import { makeStudent, makeTeacher } from "./adminFunctionality";
import { appendStudent, appendTeacher } from "./adminLoginPage";
import { makeCourse } from "./teacherFunctionality";

const btn = document.querySelector("#btn");
const btnLogin = document.querySelector("#btnLogin");
const btnLogout = document.querySelector("#logout-button");
const loginBtn = document.querySelector(".open-login-button");
const closeLogin = document.querySelector(".cancelLogin");
const teacherBtn = document.querySelector(".teacher");
const studentBtn = document.querySelector(".student");
const passUpdateBtn = document.querySelector(".open-uppassword-button");
const btnPassUpdate = document.querySelector("#btnPassUpdate");
const btnOpenAdmin = document.querySelector('#openBtnAdmin');
const btnProfUpdate = document.querySelector("#btnProfUpdate");
const profUpdateBtn = document.querySelector('.open-upprofile-button');
const teacherClose = document.querySelector('#teacherClose');
const studentClose = document.querySelector('#studentClose');
const teacherAdd = document.querySelector('#btnAddTeacher');
const studentAdd = document.querySelector('#btnAddStudent');
const btnCloseAdmin = document.querySelector('#closeNavAdmin');
const studentListAdmin = document.querySelector('.open-student-button');
const teacherListAdmin = document.querySelector('.open-teacher-button');
const courseBtn = document.querySelector(".course");
const courseClose = document.querySelector("#courseClose");
const courseAdd = document.querySelector('#btnAddCourse');


function openFormTeacher() {
    document.getElementById("addTeacher").style.display = "block";
}
  
function closeFormTeacher() {
    document.getElementById("addTeacher").style.display = "none";
    clearFormFieldsTeacher();
}

function openFormStudent() {
    document.getElementById("addStudent").style.display = "block";
}
  
function closeFormStudent() {
    document.getElementById("addStudent").style.display = "none";
    clearFormFieldsStudent();
}
  
function openFormLogin() {
    document.getElementById("loginForm").style.display = "block";
}
  
function closeFormLogin() {
    document.getElementById("loginForm").style.display = "none";
    clearFormFieldsLogin();
}

function openFormCourse() {
    document.getElementById("addCourse").style.display = "block";
}
  
function closeFormCourse() {
    document.getElementById("addCourse").style.display = "none";
    clearFormFieldsCourse();
}
  
//   function openFormSignUp() {
//     closeForm();
//     closeFormLogin();
//     document.getElementById("signupForm").style.display = "block";
//   }
  
//   function closeFormSignUp() {
//     document.getElementById("signupForm").style.display = "none";
//     clearFormFieldsSignUp();
//   }
  
//   function openFormUpdate() {
//     document.getElementById("updateForm").style.display = "block";
//   }
  
//   function closeFormUpdate() {
//     document.getElementById("updateForm").style.display = "none";
//     clearFormFieldsSignUp();
//   }
  
//   function openFormPassUpdate() {
//     document.getElementById("passUpdateForm").style.display = "block";
//   }
  
//   function closeFormPassUpdate() {
//     document.getElementById("passUpdateForm").style.display = "none";
//     clearFormFieldsPassUpdate();
//   }
  
  /* Set the width of the sidebar to 250px (show it) */
  function openNavAdmin() {
    document.getElementById("sidepanelAdmin").style.width = "280px";
    document.getElementById("container").style.left = "280px";
    document.getElementById("head").style.left = "40%";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNavAdmin() {
    document.getElementById("sidepanelAdmin").style.width = "0";
    document.getElementById("container").style.left = "0";
    document.getElementById("head").style.left = "30%";
  }
  
//   function openFormProfUpdate() {
//     document.getElementById("profUpdateForm").style.display = "block";
//   }
  
//   function closeFormProfUpdate() {
//     document.getElementById("profUpdateForm").style.display = "none";
//     clearFormFieldsProfUpdate();
//   }
  
function clearFormFieldsTeacher() {
     document.forms["addTeacher"].reset();
}

function clearFormFieldsStudent() {
    document.forms["addStudent"].reset();
}

function clearFormFieldsCourse() {
    document.forms["addCourse"].reset();
}

function clearFormFieldsLogin() {
    document.forms["loginForm"].reset();
}
  
//   function clearFormFieldsSignUp() {
//     document.forms["signupForm"].reset();
//   }
  
//   function clearFormFieldsUpdate() {
//     document.forms["updateForm"].reset();
//   }
  
//   function clearFormFieldsPassUpdate() {
//     document.forms["passUpdateForm"].reset();
//   }
  
//   function clearFormFieldsProfUpdate() {
//     document.forms["profUpdateForm"].reset();
//   }

const buttonClass = () => {
    loginBtn.addEventListener('click',openFormLogin);
    closeLogin.addEventListener('click',closeFormLogin);
    btnLogin.addEventListener('click',formDisplay);
    teacherBtn.addEventListener('click',openFormTeacher);
    teacherClose.addEventListener('click',closeFormTeacher);
    studentBtn.addEventListener('click',openFormStudent);
    studentClose.addEventListener('click',closeFormStudent);
    btnLogout.addEventListener('click',logOut);
    studentAdd.addEventListener('click',makeStudent);
    teacherAdd.addEventListener('click',makeTeacher);
    btnOpenAdmin.addEventListener('click',openNavAdmin);
    btnCloseAdmin.addEventListener('click',closeNavAdmin);
    teacherListAdmin.addEventListener('click',appendTeacher);
    studentListAdmin.addEventListener('click',appendStudent);
    courseBtn.addEventListener('click',openFormCourse);
    courseClose.addEventListener('click',closeFormCourse);
    courseAdd.addEventListener('click',makeCourse);
}
export default buttonClass;