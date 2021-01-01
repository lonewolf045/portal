import { adminDeg, adminDept,adminBatch } from './index';
import {batchDegreeDatabase, degreeDatabase, departmentDatabase, importDegree, importDegreeBatches, importDepartment, importStudents, studentDatabase} from './connectToFirebase';
import {addBatchMenu, addDegMenu,addDeptMenu,addStudentMenu} from './adminForms';
import {backArrow} from './adminFunctionality';
import { adminPage } from './adminPage';
import { studentDegNameClick } from './adminStudent';



const makeDeptMenu = () => {
    console.log('Open');
    const adminMenuDiv = document.querySelector('#adminMenu');
    adminMenuDiv.innerHTML = "";
    let backButton = backArrow(adminPage);
    adminMenuDiv.appendChild(backButton);
    let deptList = [...departmentDatabase];
    let deptDOM = deptList.map(x => deptListMaker(x));
    deptDOM.forEach(function(x) {
        adminMenuDiv.appendChild(x);
    });
    let deptAddButton = document.createElement('div');
    deptAddButton.id = 'addButton';
    deptAddButton.innerHTML = '+';
    deptAddButton.addEventListener('click',() => {
        let deptMenu = addDeptMenu();
        document.querySelector('#container').appendChild(deptMenu);
    });
    adminMenuDiv.appendChild(deptAddButton);
    
}

const deptListMaker = (dept) => {
    const card = document.createElement('div');
    card.classList.add('info-card');
    const deptName = document.createElement('div');
    deptName.classList.add('info-detail');
    const deptCode = document.createElement('div');
    deptCode.classList.add('info-detail');
    deptName.innerHTML = dept.deptName;
    deptCode.innerHTML = dept.deptCode;
    card.appendChild(deptName);
    card.appendChild(deptCode);
    card.addEventListener('click',() => {
        adminDept = dept;
        deptNameClick(dept);
    })
    console.log(card);
    return card;
}

const deptNameClick = (dept) => {
    importDegree(dept.deptCode).then(()=> {studentTeacherOptionMenu()});
}

const studentTeacherOptionMenu = () => {
    const adminMenuDiv = document.querySelector('#adminMenu');
    adminMenuDiv.innerHTML = "";
    let backButton = backArrow(makeDeptMenu);
    adminMenuDiv.appendChild(backButton);
    let tileList = [{name:'Student',functionName:studentDegNameClick},{name:'Teacher'}];
    let tileDOM = tileList.map(x => makeCard(x));
    tileDOM.forEach(x => {
        adminMenuDiv.appendChild(x);
    })
}

const makeCard = (x) => {
    const card = document.createElement('div');
    card.classList.add('info-card');
    const cardHeading = document.createElement('div');
    cardHeading.classList.add('info-detail');
    cardHeading.innerHTML = x.name;
    card.appendChild(cardHeading);
    card.addEventListener('click',() => {
        x.functionName();
    });
    return card;
}

const makeDegMenu = () => {
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

export {makeDeptMenu};