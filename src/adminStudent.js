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
    let workWindow = document.querySelector('#workWindow');
    workWindow.innerHTML = "";
    let bar = selectBar();
    workWindow.appendChild(bar);
    let selector = selectField();
    workWindow.appendChild(selector);
    let listOfData = [...studentDatabase];
    let list = listOfStudent(listOfData);
    workWindow.appendChild(list);
}

const selectBar = () => {
    const bar = document.createElement('div');
    bar.id = 'paraBar';
    return bar;
}

const selectField = () => {
    const viewForm = document.createElement('form');
    viewForm.name = "viewForm";
    viewForm.id = "viewForm";
    const label1 = document.createElement('label');
    label1.for ='selector';
    label1.innerHTML = '<b>Choose a field: </b>';
    const options = [
        {
            value: 'lastName',
            label: 'By Lastname'
        },
        {
            value: 'firstName',
            label: 'By Firstname'
        },
        {
            value: 'dept',
            label: 'By Department'
        },
        {
            value: 'degree',
            label: 'By Degree'
        },
        {
            value: 'batch',
            label: 'By Batch'
        },
        {
            value: 'enroll',
            label: 'By Enrollment Number'
        }
    ];
    const dropDown = document.createElement('select');
    dropDown.name = 'selector';
    dropDown.id = 'selector';
    dropDown.innerHTML = `<option value = "" disable selected>Choose an option</option>`;
    options.forEach(x => {
        const op = document.createElement('option');
        op.value = x.value;
        op.innerHTML = x.label;
        dropDown.appendChild(op);
    });
    const paraDiv = document.createElement('div');
    paraDiv.id = 'paraDiv';
    const paraLabel = document.createElement('label');
    paraLabel.innerHTML = 'Enter the parameter:';
    paraLabel.for = 'parameter';
    const paraInput = document.createElement('input');
    paraInput.type = 'text';
    paraInput.name = 'parameter';
    paraInput.id = 'parameter';
    const goButton = document.createElement('button');
    goButton.type = 'button';
    goButton.innerHTML = 'Go';
    goButton.id = 'btnGo';
    goButton.name = "btnGo";
    paraInput.addEventListener('change',()=> {
        goButton.style.display = "block";
    });
    paraDiv.appendChild(paraLabel);
    paraDiv.appendChild(paraInput);
    paraDiv.appendChild(goButton);
    dropDown.addEventListener('input',() => {
        paraDiv.style.display = "block";
    })
    viewForm.appendChild(label1);
    viewForm.appendChild(dropDown);
    viewForm.appendChild(paraDiv);
    return viewForm;
}

const listOfStudent = (listOfStudents) => {
    let list = document.createElement('div');
    list .id = 'list';
    let listTitle = makeListHeader();
    list.appendChild(listTitle);
    listOfStudents.forEach(x => {
        let element = makeListRow(x);
        list.appendChild(element);
    });
    return list;
}

const makeListHeader = () =>{
    const enroll = document.createElement('div');
    const firstName = document.createElement('div');
    const lastName = document.createElement('div');
    const batch = document.createElement('div');
    const dept = document.createElement('div');
    const degree = document.createElement('div');
    enroll.classList.add('title');
    firstName.classList.add('title');
    lastName.classList.add('title');
    batch.classList.add('title');
    dept.classList.add('title');
    degree.classList.add('title');
    enroll.classList.add('enroll');
    firstName.classList.add('firstName');
    lastName.classList.add('lastName');
    batch.classList.add('batch');
    dept.classList.add('dept');
    degree.classList.add('degree');
    enroll.innerHTML = 'Enrollment No.';
    firstName.innerHTML = 'First Name';
    lastName.innerHTML = 'Last Name';
    batch.innerHTML = 'Batch';
    dept.innerHTML = 'Department';
    degree.innerHTML = 'Degree';
    const title = document.createElement('div');
    title.id = 'titleRow';
    title.appendChild(enroll);
    title.appendChild(firstName);
    title.appendChild(lastName);
    title.appendChild(batch);
    title.appendChild(dept);
    title.appendChild(degree);
    return title;
}

const makeListRow = (x) => {
    const enroll = document.createElement('div');
    const firstName = document.createElement('div');
    const lastName = document.createElement('div');
    const batch = document.createElement('div');
    const dept = document.createElement('div');
    const degree = document.createElement('div');
    enroll.classList.add('element');
    firstName.classList.add('element');
    lastName.classList.add('element');
    batch.classList.add('element');
    dept.classList.add('element');
    degree.classList.add('element');
    enroll.classList.add('enroll');
    firstName.classList.add('firstName');
    lastName.classList.add('lastName');
    batch.classList.add('batch');
    dept.classList.add('dept');
    degree.classList.add('degree');
    enroll.innerHTML = x.enroll;
    firstName.innerHTML = x.firstName;
    lastName.innerHTML = x.lastName;
    batch.innerHTML = x.batch;
    dept.innerHTML = x.dept;
    degree.innerHTML = x.degree;
    const element = document.createElement('div');
    element.id = 'elementRow';
    element.appendChild(enroll);
    element.appendChild(firstName);
    element.appendChild(lastName);
    element.appendChild(batch);
    element.appendChild(dept);
    element.appendChild(degree);
    return element;
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





export {studentDegNameClick,makeDegMenu,makeBatchMenu,makeStudentMenu,addStudentClick,viewStudentClick};