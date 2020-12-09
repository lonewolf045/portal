import { adminDeg, adminDept, user,adminBatch } from './index';
import './adminPage.css';
import {batchDegreeDatabase, degreeDatabase, departmentDatabase, importDegree, importDegreeBatches, importDepartment} from './connectToFirebase';
import { createDepartment } from './department';
import { createDegree } from './degree';
import {addBatchMenu, addDegMenu,addDeptMenu} from './adminForms';
import {backArrow} from './adminFunctionality';
import { profileMenu } from './adminProfileMenu';

const adminPage = () => {
    let header = headingAdminPage(user);
    let profilePic = profileAdmin(user);
    header.appendChild(profilePic);
    document.querySelector('#container').innerHTML = "";
    document.querySelector("#container").appendChild(header);
    let adminMenuDiv = adminMenu();
    document.querySelector("#container").appendChild(adminMenuDiv);
    let profilePicMenu = profileMenu(); 
    document.querySelector("#container").appendChild(profilePicMenu);
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
    profilePicDiv.addEventListener('click',() => {
        document.querySelector('.default').classList.toggle('visible');
    });
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
    importDegree(dept.deptCode).then(()=> {makeDegMenu(dept)});
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
        //degNameClick();
    })
    console.log(card);
    return card;
}





export {adminPage,makeDegMenu,makeBatchMenu,makeDeptMenu};