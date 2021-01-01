import { adminDeg, adminDept,adminBatch } from './index';
import {batchDegreeDatabase, degreeDatabase, departmentDatabase, importDegree, importDegreeBatches, importDepartment, importStudents, studentDatabase} from './connectToFirebase';
import {addBatchMenu, addDegMenu,addDeptMenu,addStudentMenu, uploadStudentForm} from './adminForms';
import {backArrow} from './adminFunctionality';
import { adminPage } from './adminPage';
import { makeDeptMenu } from './adminDepartment';


const studentDegNameClick = () => {
    importDegree(adminDept.deptCode).then(()=> {makeDegMenu(adminDeg)});
}

const addStudentClick = () => {
    let workWindow = document.querySelector('#workWindow');
    workWindow.innerHTML = "";
    
    let studentAddButton = document.createElement('div');
    studentAddButton.id = 'addButton';
    studentAddButton.innerHTML = `<i class="fas fa-plus"></i>`;
    studentAddButton.addEventListener('click',() => {
        let studentMenu = addStudentMenu();
        document.querySelector('#container').appendChild(studentMenu);
    });

    let studentUploadButton = document.createElement('div');
    studentUploadButton.id = "uploadButton";
    studentUploadButton.innerHTML = `<i class="fas fa-file-upload"></i>`;
    studentUploadButton.addEventListener('click',() => {
        let uploadMenu = uploadStudentForm();
        document.querySelector('#container').appendChild(uploadMenu);
    });

    workWindow.appendChild(studentAddButton);
    workWindow.appendChild(studentUploadButton);
}

const viewStudentClick = () => {
    
}

const makeDegMenu = (deg) => {
    console.log('Open');
    const adminMenuDiv = document.querySelector('#adminMenu');
    adminMenuDiv.innerHTML = "";
    let backButton = backArrow(makeDeptMenu);
    adminMenuDiv.appendChild(backButton);
    let degList = [...degreeDatabase];
    let degDOM = degList.map(x => degListMaker(x));
    degDOM.forEach(function(x) {
        adminMenuDiv.appendChild(x);
    });
    let degAddButton = document.createElement('div');
    degAddButton.id = 'addButton';
    degAddButton.innerHTML = '+';
    degAddButton.addEventListener('click',() => {
        let degMenu = addDegMenu();
        document.querySelector('#container').appendChild(degMenu);
    });
    adminMenuDiv.appendChild(degAddButton);
}

const degListMaker = (deg) => {
    const card = document.createElement('div');
    card.classList.add('info-card');
    const degName = document.createElement('div');
    degName.classList.add('info-detail');
    const degCode = document.createElement('div');
    degCode.classList.add('info-detail');
    degName.innerHTML = deg.degName;
    degCode.innerHTML = deg.degShort;
    card.appendChild(degName);
    card.appendChild(degCode);
    card.addEventListener('click',() => {
        adminDeg = deg;
        degNameClick();
    })
    console.log(card);
    return card;
}

const degNameClick = () => {
    importDegreeBatches(adminDept.deptCode,adminDeg.degShort).then(() => {makeBatchMenu()});

}

const makeBatchMenu = () => {
    const adminMenuDiv = document.querySelector('#adminMenu');
    adminMenuDiv.innerHTML = "";
    let backButton = backArrow(makeDegMenu);
    adminMenuDiv.appendChild(backButton);
    let batchList = [...batchDegreeDatabase];
    let batchDOM = batchList.map(x => batchListMaker(x));
    batchDOM.forEach((x) => {
        adminMenuDiv.appendChild(x);
    });
    let batchAddButton = document.createElement('div');
    batchAddButton.id = 'addButton';
    batchAddButton.innerHTML = '+';
    batchAddButton.addEventListener('click',() => {
        let batchMenu = addBatchMenu();
        document.querySelector('#container').appendChild(batchMenu);
    });
    adminMenuDiv.appendChild(batchAddButton);
}

const batchListMaker = (batch) => {
    const card = document.createElement('div');
    card.classList.add('info-card');
    const batchName = document.createElement('div');
    batchName.classList.add('info-detail');
    const batchCode = document.createElement('div');
    batchCode.classList.add('info-detail');
    batchName.innerHTML = batch.batchName;
    batchCode.innerHTML = batch.batchCode;
    card.appendChild(batchName);
    card.appendChild(batchCode);
    card.addEventListener('click',() => {
        adminBatch = batch;
        batchNameClick();
    })
    console.log(card);
    return card;
}

const batchNameClick = () => {
    importStudents(adminDept.deptCode,adminDeg.degShort,adminBatch.batchCode).then(() => {makeStudentMenu()});
}

const makeStudentMenu = () => {
    const adminMenuDiv = document.querySelector('#adminMenu');
    adminMenuDiv.innerHTML = "";
    let backButton = backArrow(makeBatchMenu);
    adminMenuDiv.appendChild(backButton);
    let studentList = [...studentDatabase];
    console.log(studentList);
    let studentDOM = studentList.map(x => studentListMaker(x));
    studentDOM.forEach(function(x) {
        adminMenuDiv.appendChild(x);
    });
    let studentAddButton = document.createElement('div');
    studentAddButton.id = 'addButton';
    studentAddButton.innerHTML = `<i class="fas fa-plus"></i>`;
    studentAddButton.addEventListener('click',() => {
        let studentMenu = addStudentMenu();
        document.querySelector('#container').appendChild(studentMenu);
    });
    let studentUploadButton = document.createElement('div');
    studentUploadButton.id = "uploadButton";
    studentUploadButton.innerHTML = `<i class="fas fa-file-upload"></i>`;
    studentUploadButton.addEventListener('click',() => {
        let uploadMenu = uploadStudentForm();
        document.querySelector('#container').appendChild(uploadMenu);
    })
    adminMenuDiv.appendChild(studentAddButton);
    adminMenuDiv.appendChild(studentUploadButton);
    
}

const studentListMaker = (student) => {
    const card = document.createElement('div');
    card.classList.add('list-tab');
    const firstName = document.createElement('div');
    firstName.classList.add('list-detail');
    const lastName = document.createElement('div');
    lastName.classList.add('list-detail');
    const batchName = document.createElement('div');
    batchName.classList.add('list-detail');
    const degName = document.createElement('div');
    degName.classList.add('list-detail');
    const deptName = document.createElement('div');
    deptName.classList.add('list-detail');
    firstName.innerHTML = student.firstName;
    lastName.innerHTML = student.lastName;
    batchName.innerHTML = student.batch;
    degName.innerHTML = student.degree;
    deptName.innerHTML = student.dept;
    card.appendChild(firstName);
    card.appendChild(lastName);
    card.appendChild(batchName);
    card.appendChild(degName);
    card.appendChild(deptName);
    console.log(card);
    return card;
}





export {studentDegNameClick,makeDegMenu,makeBatchMenu,makeStudentMenu,addStudentClick};