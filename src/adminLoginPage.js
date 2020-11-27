import { loadStudentList, loadTeacherList } from "./adminFunctionality";

const btnLogout = document.querySelector("#logout-button");
const loginBtn = document.querySelector(".open-login-button");
const formBtn = document.querySelector('.teacher');
const studentBtn = document.querySelector(".student");
const btnOpenAdmin = document.querySelector('#openBtnAdmin');
const container = document.querySelector('#container');


const welcomeMessage = function (user) {
    const use = document.querySelector(".welcome-message");
    use.innerHTML = "Welcome, " + user;
}
const loginAdminDOM = (username) => {
    welcomeMessage(username);
    changeButton();
}

const changeButton = () => {
    loginBtn.style.display = "none";
    btnLogout.style.display = "block";
    formBtn.style.display = "block";
    studentBtn.style.display = "block";
    btnOpenAdmin.style.display = "block";
}

const appendTeacher = () => {
    container.innerHTML = "";
    let teacherList = loadTeacherList();
    console.log(teacherList);
    let teacherDOM = teacherList.map(x => teacherListMaker(x.firstName,x.lastName,x.teacherCode));
    console.log(teacherDOM);
    teacherDOM.forEach(function(x) {
        container.appendChild(x);
    });
}
const teacherListMaker = (fName,lName,teacherCode) => {
    const card = document.createElement('div');
    card.classList.add('info-card');
    const firstName = document.createElement('div');
    firstName.classList.add('info-detail');
    const lastName = document.createElement('div');
    lastName.classList.add('info-detail');
    const code = document.createElement('div');
    code.classList.add('info-detail');
    firstName.innerHTML = fName;
    lastName.innerHTML = lName;
    code.innerHTML = teacherCode;
    card.appendChild(firstName);
    card.appendChild(lastName);
    card.appendChild(code);
    console.log(card);
    return card;
}

const appendStudent = () => {
    container.innerHTML = "";
    let studentList = loadStudentList();
    console.log(studentList);
    let studentDOM = studentList.map(x => studentListMaker(x.firstName,x.lastName,x.degree,x.year));
    console.log(studentDOM);
    studentDOM.forEach(function(x) {
        container.appendChild(x);
    });
}
const studentListMaker = (fName,lName,degree,year) => {
    const card = document.createElement('div');
    card.classList.add('info-card');
    const firstName = document.createElement('div');
    firstName.classList.add('info-detail');
    const lastName = document.createElement('div');
    lastName.classList.add('info-detail');
    const deg = document.createElement('div');
    deg.classList.add('info-detail');
    const y = document.createElement('div');
    y.classList.add('info-detail');
    firstName.innerHTML = fName;
    lastName.innerHTML = lName;
    deg.innerHTML = degree;
    y.innerHTML = year;
    card.appendChild(firstName);
    card.appendChild(lastName);
    card.appendChild(deg);
    card.appendChild(y);
    console.log(card);
    return card;
}

export {loginAdminDOM,appendTeacher,appendStudent};