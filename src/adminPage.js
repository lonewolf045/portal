import { adminDept, user } from './index';
import './adminPage.css';
import {degreeDatabase, departmentDatabase, importDegree, importDepartment} from './connectToFirebase';
import { createDepartment } from './department';
import { createDegree } from './degree';

const adminPage = (user) => {
    let header = headingAdminPage(user);
    let profilePic = profileAdmin(user);
    header.appendChild(profilePic);
    document.querySelector('#container').innerHTML = "";
    document.querySelector("#container").appendChild(header);
    let adminMenuDiv = adminMenu();
    document.querySelector("#container").appendChild(adminMenuDiv);
}

const headingAdminPage = (user) => {
    const header = document.createElement('header');
    const headingContainer = document.createElement('div');
    const omegaIcon = document.createElement('div');
    const iconImage = document.createElement('img');
    //const omegaHead = document.createElement('div');
    const omegaHeading = document.createElement('p');
    const omegaLine = document.createElement('p');
    iconImage.src = "https://www.flaticon.com/svg/static/icons/svg/2052/2052198.svg";
    iconImage.id = "iconImage";
    omegaIcon.id = "omegaIcon";
    omegaIcon.appendChild(iconImage);
    omegaHeading.innerHTML = "Omega";
    omegaHeading.id = "omegaHeading";
    omegaLine.innerHTML += ",the new Alpha,right now in Beta";
    omegaLine.id = "omegaLine";
    headingContainer.id = "headingContainer";
    header.id = "header";
    headingContainer.appendChild(omegaIcon);
    headingContainer.appendChild(omegaHeading);
    headingContainer.appendChild(omegaLine);
    
    header.appendChild(headingContainer);
    
    return header;
}

const profileAdmin = (user) => {
    const profilePicDiv = document.createElement('div');
    profilePicDiv.id = "profilePicDiv";
    const profilePic = document.createElement('div');
    profilePic.innerHTML = user.username.toUpperCase().charAt(0);
    console.log(profilePic.innerHTML);
    profilePic.id = "profilePic";
    profilePicDiv.appendChild(profilePic);
    return profilePicDiv;
}

const adminMenu = () => {
    const adminMenuDiv = document.createElement('div');
    adminMenuDiv.id = "adminMenu";
    const departmentMenuTab = document.createElement('div');
    departmentMenuTab.innerHTML = 'Departments';
    departmentMenuTab.id = "department";
    departmentMenuTab.addEventListener('click',makeDeptMenu);
    adminMenuDiv.appendChild(departmentMenuTab);
    return adminMenuDiv;
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

const backArrow = (menuFunction) => {
    const backArrowDiv = document.createElement('button');
    const backArrowImage = document.createElement('img');
    backArrowDiv.id = "backArrow";
    backArrowImage.id = "backArrowImage";
    backArrowImage.src = "https://www.pinclipart.com/picdir/big/130-1304091_left-svg-icon-free-icon-back-arrow-png.png";
    backArrowImage.width = "60";
    backArrowImage.height = "40";
    backArrowDiv.appendChild(backArrowImage);
    backArrowDiv.addEventListener('click',() => {
        
        menuFunction(user);
        console.log('Clicked back');
    });
    return backArrowDiv;
}

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
    let deptAddButton = document.createElement('button');
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
    importDegree(dept.deptCode).then(()=> {makeDegMenu(dept)});
}

const makeDegMenu = (dept) => {
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
    let degAddButton = document.createElement('button');
    degAddButton.id = 'addButton';
    degAddButton.innerHTML = '+';
    degAddButton.addEventListener('click',() => {
        let degMenu = addDegMenu();
        document.querySelector('#container').appendChild(degMenu);
    });
    adminMenuDiv.appendChild(degAddButton);
}

const degListMaker = (deg) => {

}

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

export {adminPage};