import { createBatch } from "./batch";
import {makeDegMenu,makeDeptMenu,makeBatchMenu, makeStudentMenu} from './adminPage';
import { importDegreeBatches, importStudents,importDegree,importDepartment } from "./connectToFirebase";
import {adminBatch, adminDeg,adminDept} from './index';
import { studentLogin } from "./login";
import { createStudent } from "./student";
import {createDegree} from "./degree";
import {createDepartment} from "./department";

const addDegMenu = () => {
    //console.log('Menu Open');
    const degMenu = document.createElement('div');
    degMenu.classList.add("blacklayer");
    const formContainer = document.createElement('div');
    formContainer.id = "degForm";
    formContainer.classList.add("deg-form-popup");
    const form = document.createElement('form');
    form.classList.add('form-container');
    form.name = "degForm";
    const formHeading = document.createElement('h1');
    formHeading.id = 'formHeading';
    formHeading.innerHTML = "Degree";
    const degreeLabel = document.createElement('label');
    degreeLabel.htmlFor = "degreeName";
    degreeLabel.innerHTML = "<b>Name:</b>";
    const degreeField = document.createElement('input');
    degreeField.type = "text";
    degreeField.name = "degreeName";
    degreeField.required = true;
    const codeLabel = document.createElement('label');
    codeLabel.htmlFor = "degCode";
    codeLabel.innerHTML = "<b>Abbreviation:</b>";
    const codeField = document.createElement('input');
    codeField.type = "text";
    codeField.name = "degCode";
    codeField.required = true;
    form.appendChild(formHeading);
    form.appendChild(degreeLabel);
    form.appendChild(degreeField);
    form.appendChild(codeLabel);
    form.appendChild(codeField);
    const btnClose = document.createElement('button');
    btnClose.type = 'button';
    btnClose.innerHTML = "Close";
    btnClose.id = "btnClose";
    btnClose.classList.add('btnClose');
    btnClose.addEventListener('click',() => {
        degMenu.remove();
    });
    
    const btnAdd = document.createElement('button');
    btnAdd.type = "button";
    btnAdd.innerHTML = "Add";
    btnAdd.id = "btnAdd";
    btnAdd.classList.add('btnAdd');
    btnAdd.addEventListener('click',() => {
        console.log('Clicked');
        if(degreeField.value && codeField.value) {
            Promise.resolve(createDegree(degreeField.value,codeField.value)).then(() => {importDegree(adminDept.deptCode)}).then(makeDegMenu);
            console.log('Here');
            
            btnClose.click();
        }
        else {
            window.alert('Fill missing details');
        }
    });
    
    form.appendChild(btnAdd);
    form.appendChild(btnClose);
    formContainer.appendChild(form);
    degMenu.appendChild(formContainer);
    return degMenu;
}


const addDeptMenu = () => {
    console.log('Menu Open');
    const deptMenu = document.createElement('div');
    deptMenu.classList.add("blacklayer");
    const formContainer = document.createElement('div');
    formContainer.id = "deptForm";
    formContainer.classList.add("dept-form-popup");
    const form = document.createElement('form');
    form.classList.add('form-container');
    form.name = "deptForm";
    const formHeading = document.createElement('h1');
    formHeading.id = 'formHeading';
    formHeading.innerHTML = "Department";
    const departmentLabel = document.createElement('label');
    departmentLabel.htmlFor = "departmentName";
    departmentLabel.innerHTML = "<b>Name:</b>";
    const departmentField = document.createElement('input');
    departmentField.type = "text";
    departmentField.name = "departmentName";
    departmentField.required = true;
    const codeLabel = document.createElement('label');
    codeLabel.htmlFor = "deptCode";
    codeLabel.innerHTML = "<b>Code:</b>";
    const codeField = document.createElement('input');
    codeField.type = "text";
    codeField.name = "deptCode";
    codeField.required = true;
    form.appendChild(formHeading);
    form.appendChild(departmentLabel);
    form.appendChild(departmentField);
    form.appendChild(codeLabel);
    form.appendChild(codeField);
    const btnClose = document.createElement('button');
    btnClose.type = 'button';
    btnClose.innerHTML = "Close";
    btnClose.id = "btnClose";
    btnClose.classList.add('btnClose');
    btnClose.addEventListener('click',() => {
        deptMenu.remove();
    });
    
    const btnAdd = document.createElement('button');
    btnAdd.type = "button";
    btnAdd.innerHTML = "Add";
    btnAdd.id = "btnAdd";
    btnAdd.classList.add('btnAdd');
    btnAdd.addEventListener('click',() => {
        console.log('Clicked');
        if(departmentField.value && codeField.value) {
            Promise.resolve(createDepartment(departmentField.value,codeField.value)).then(importDepartment).then(makeDeptMenu);
            console.log('Here');
            
            btnClose.click();
        }
        else {
            window.alert('Fill missing details');
        }
    });
    
    form.appendChild(btnAdd);
    form.appendChild(btnClose);
    formContainer.appendChild(form);
    deptMenu.appendChild(formContainer);
    return deptMenu;
}

const addBatchMenu = () => {
    const batchMenu = document.createElement('div');
    batchMenu.classList.add("blacklayer");
    const formContainer = document.createElement('div');
    formContainer.id = "batchForm";
    formContainer.classList.add("batch-form-popup");
    const form = document.createElement('form');
    form.classList.add('form-container');
    form.name = "batchForm";
    const formHeading = document.createElement('h1');
    formHeading.id = 'formHeading';
    formHeading.innerHTML = "Batch:";
    const batchLabel = document.createElement('label');
    batchLabel.htmlFor = "batchName";
    batchLabel.innerHTML = "<b>Name:</b>";
    const batchField = document.createElement('input');
    batchField.type = "text";
    batchField.name = "batchName";
    batchField.required = true;
    const codeLabel = document.createElement('label');
    codeLabel.htmlFor = "batchCode";
    codeLabel.innerHTML = "<b>Code:</b>";
    const codeField = document.createElement('input');
    codeField.type = "text";
    codeField.name = "batchCode";
    codeField.required = true;
    form.appendChild(formHeading);
    form.appendChild(batchLabel);
    form.appendChild(batchField);
    form.appendChild(codeLabel);
    form.appendChild(codeField);
    const btnClose = document.createElement('button');
    btnClose.type = 'button';
    btnClose.innerHTML = "Close";
    btnClose.id = "btnClose";
    btnClose.classList.add('btnClose');
    btnClose.addEventListener('click',() => {
        batchMenu.remove();
    });
    
    const btnAdd = document.createElement('button');
    btnAdd.type = "button";
    btnAdd.innerHTML = "Add";
    btnAdd.id = "btnAdd";
    btnAdd.classList.add('btnAdd');
    btnAdd.addEventListener('click',() => {
        console.log('Clicked');
        if(batchField.value && codeField.value) {
            Promise.resolve(createBatch(batchField.value,codeField.value)).then(() => {importDegreeBatches(adminDept.deptCode,adminDeg.degShort)}).then(makeBatchMenu);
            console.log('Here');
            
            btnClose.click();
        }
        else {
            window.alert('Fill missing details');
        }
    });
    
    form.appendChild(btnAdd);
    form.appendChild(btnClose);
    formContainer.appendChild(form);
    batchMenu.appendChild(formContainer);
    return batchMenu;
}

const addStudentMenu = () => {
    const studentMenu = document.createElement('div');
    studentMenu.classList.add('blacklayer');
    const formContainer = document.createElement('div');
    formContainer.id = "studentForm";
    formContainer.classList.add("student-form-popup");
    const form = document.createElement('form');
    form.classList.add('form-container');
    form.name = "studentForm";
    const formHeading = document.createElement('h1');
    formHeading.id = 'formHeading';
    formHeading.innerHTML = "Student:";
    const firstNameLabel = document.createElement('label');
    const lastNameLabel = document.createElement('label');
    //const userName = document.createElement('label');
    firstNameLabel.htmlFor = "firstName";
    firstNameLabel.innerHTML = "<b>First Name:</b>";
    lastNameLabel.htmlFor = "lastName";
    lastNameLabel.innerHTML = "<b>Last Name:</b>";
    const firstNameField = document.createElement('input');
    const lastNameField = document.createElement('input');
    firstNameField.type = "text";
    lastNameField.type = "text";
    firstNameField.name = "firstName";
    lastNameField.name = "lastName";
    firstNameField.required = true;
    lastNameField.required = true;
    form.appendChild(firstNameLabel);
    form.appendChild(firstNameField);
    form.appendChild(lastNameLabel);
    form.appendChild(lastNameField);
    const btnClose = document.createElement('button');
    btnClose.type = 'button';
    btnClose.innerHTML = "Close";
    btnClose.id = "btnClose";
    btnClose.classList.add('btnClose');
    btnClose.addEventListener('click',() => {
        studentMenu.remove();
    });
    const btnAdd = document.createElement('button');
    btnAdd.type = "button";
    btnAdd.innerHTML = "Add";
    btnAdd.id = "btnAdd";
    btnAdd.classList.add('btnAdd');
    btnAdd.addEventListener('click',() => {
        console.log('Clicked');
        if(firstNameField.value && lastNameField.value) {
            Promise.resolve(createStudent(firstNameField.value,lastNameField.value)).then(() => {importStudents(adminDept.deptCode,adminDeg.degShort,adminBatch.batchCode)}).then(makeStudentMenu);
            console.log('Here');
            
            btnClose.click();
        }
        else {
            window.alert('Fill missing details');
        }
    });
    
    form.appendChild(btnAdd);
    form.appendChild(btnClose);
    formContainer.appendChild(form);
    studentMenu.appendChild(formContainer);
    return studentMenu;
}

export {addDegMenu,addDeptMenu,addBatchMenu,addStudentMenu};