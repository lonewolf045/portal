import { user } from './index';
import './adminPage.css';
import { profileMenu } from './adminProfileMenu';
import {makeDeptMenu} from './adminDepartment';
import { makeDeptMenuTeach } from './adminTeacher';
import { addStudentClick, viewStudentClick } from './adminStudent';

const adminPage = () => {
    let header = headingAdminPage(user);
    let profilePic = profileAdmin(user);
    header.appendChild(profilePic);
    document.querySelector('#container').innerHTML = "";
    document.querySelector("#container").appendChild(header);
    
    let profilePicMenu = profileMenu(); 
    document.querySelector("#container").appendChild(profilePicMenu);

    let subContainer = document.createElement('div');
    subContainer.classList.add('sub-container');

    let sideMenuDiv = sideMenu();
    subContainer.appendChild(sideMenuDiv);

    let workWindow = document.createElement('div');
    workWindow.id = "workWindow";
    subContainer.appendChild(workWindow);
    
    document.querySelector("#container").appendChild(subContainer);
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
    omegaHeading.classList.add('none');
    omegaLine.innerHTML += ",the new Alpha,right now in Beta";
    omegaLine.id = "omegaLine";
    omegaLine.classList.add('none');
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
    const studentMenuTab = document.createElement('div');
    studentMenuTab.innerHTML = 'View Departments';
    studentMenuTab.id = "department";
    studentMenuTab.addEventListener('click',makeDeptMenu);
    // const teachMenuTab = document.createElement('div');
    // teachMenuTab.innerHTML = 'Teachers';
    // teachMenuTab.id = "teacher";
    // teachMenuTab.addEventListener('click',makeDeptMenuTeach);
    adminMenuDiv.appendChild(studentMenuTab);
    // adminMenuDiv.appendChild(teachMenuTab);
    return adminMenuDiv;
}

const sideMenu = () => {
    const sideMenuDiv = document.createElement('div');
    sideMenuDiv.id= "sideMenu";
    const studentTab = document.createElement('div');
    studentTab.innerHTML = "Student";
    const studentMenu = document.createElement('div');
    //studentMenu.innerHTML = 'Student';
    const studentMenuTab = document.createElement('div');
    studentMenuTab.innerHTML = 'Student';
    const addStudent = document.createElement('div');
    const viewStudent = document.createElement('div');
    addStudent.innerHTML = "Add Student";
    viewStudent.innerHTML= "View Students";
    addStudent.classList.add('option');
    viewStudent.classList.add('option');
    addStudent.addEventListener('click',addStudentClick);
    viewStudent.addEventListener('click',viewStudentClick);
    studentMenu.appendChild(addStudent);
    studentMenu.appendChild(viewStudent);
    studentMenu.classList.add('content');
    studentMenuTab.classList.add('collapsible');
    studentMenuTab.addEventListener('click', (e) => {
            e.target.classList.toggle("active");
            var content = e.target.nextElementSibling;
            if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            } 
    });
    sideMenuDiv.appendChild(studentMenuTab);
    sideMenuDiv.appendChild(studentMenu);
    sideMenuDiv.id = "sideMenuDiv";
    return sideMenuDiv;
}

// const activateSideMenu = () => {
//     var coll = document.getElementsByClassName("collapsible");
//     console.log(coll);
//     var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     } 
//   });
// }
// }


export {adminPage};