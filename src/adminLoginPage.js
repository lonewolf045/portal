import { loadGroupList, loadStudentList, loadTeacherList } from "./adminFunctionality";
import { groupDatabase, importGroups, studentDatabase, updateGroup } from "./connectToFirebase";

const btnLogout = document.querySelector("#logout-button");
const loginBtn = document.querySelector(".open-login-button");
const formBtn = document.querySelector('.teacher');
const studentBtn = document.querySelector(".student");
const groupBtn = document.querySelector(".group");
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
    btnOpenAdmin.style.display = "block";
}

const appendTeacher = () => {
    formBtn.style.display = "block";
    studentBtn.style.display = "none";
    groupBtn.style.display = "none";
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
    studentBtn.style.display = "block";
    formBtn.style.display = "none";
    groupBtn.style.display = "none";
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

const appendGroup = () => {
    groupBtn.style.display = "block";
    studentBtn.style.display = "none";
    formBtn.style.display = "none";
    container.innerHTML = "";
    let groupList = loadGroupList();
    console.log(groupList);
    let groupDOM = groupList.map(x => groupListMaker(x.groupName));
    console.log(groupDOM);
    groupDOM.forEach(function(x) {
        container.appendChild(x);
    });
}

const groupListMaker = (gName) => {
    const card = document.createElement('div');
    card.classList.add('info-card');
    const groupName = document.createElement('div');
    groupName.classList.add('info-detail');
    groupName.innerHTML = gName;
    card.appendChild(groupName);
    console.log(card);
    card.addEventListener('click',(e) => {
        groupClick(gName,e);
    });
    return card;
}

const groupClick = (gName,e) => {
    const blackLayer = document.createElement('div');
    blackLayer.classList.add('listMaker');
    
    console.log(gName);
    let studentList = loadStudentList();
    console.log(studentList);
    let clickDOM = studentList.map(x => studentSelection(x,gName));
    clickDOM.forEach(function(x) {
        blackLayer.appendChild(x);
    });
    container.appendChild(blackLayer);
}

const studentSelection = (x,gName) => {
    const fName = document.createElement('div');
    const lName = document.createElement('div');
    const year = document.createElement('div');
    const degree = document.createElement('div');
    fName.innerHTML = x.firstName;
    lName.innerHTML = x.lastName;
    year.innerHTML = x.year;
    degree.innerHTML = x.degree;
    const list = document.createElement('div');
    list.appendChild(fName);
    list.appendChild(lName);
    list.appendChild(year);
    list.appendChild(degree);
    console.log(list);
    for(let i = 0; i < groupDatabase.length;i++) {
        if(groupDatabase[i].groupName === gName && groupDatabase[i].groupStudent !== undefined) {
            for(let j = 0; j < groupDatabase[i].groupStudent.length;j++) {
                if(groupDatabase[i].groupStudent[j].username == x.username)
                    return list;                
            }
        }
    }
    const addButton = document.createElement('button');
    addButton.innerHTML = '+';
    let i;
    for(i = 0; i < groupDatabase.length;i++) {
        if(groupDatabase[i].groupName === gName) {
            break;
        }
    }
    addButton.addEventListener('click',() => {
        if(groupDatabase[i].groupStudent)
            groupDatabase[i].groupStudent.push(x);
        else {
            groupDatabase[i].groupStudent = new Array();
            groupDatabase[i].groupStudent.push(x);
        }
        console.log(groupDatabase[i].groupStudent);
        updateGroup(i,groupDatabase[i].groupStudent);
        document.querySelector('.open-group-button').click();
    });
    list.appendChild(addButton);
    return list;  
}

export {loginAdminDOM,appendTeacher,appendStudent,appendGroup};