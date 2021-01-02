import {studentDatabase} from './connectToFirebase';
import {addStudentMenu, uploadStudentForm} from './adminForms';

let listOfData = [];
let operationalData = [];
let operations = [];

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
    operationalData = [];
    operations = [];
    listOfData = [...studentDatabase];
    operationalData.push(listOfData);
    operations.push({label:'All',value:null});
    viewDOM();
}

const viewDOM = () => {
    let workWindow = document.querySelector('#workWindow');
    workWindow.innerHTML = "";
    let bar = selectBar();
    workWindow.appendChild(bar);
    let selector = selectField();
    workWindow.appendChild(selector);

    let list = listOfStudent(listOfData);
    workWindow.appendChild(list);
}

const selectBar = () => {
    const bar = document.createElement('div');
    bar.id = 'paraBar';
    operations.forEach((x,i) => {
        let sec = makeSection(x,i);
        bar.appendChild(sec);
    })
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
    goButton.addEventListener('click', () => {
        let param = {label: dropDown.value,value: paraInput.value};
        operateOnList(param);
        let workWindow = document.querySelector('#workWindow');
        workWindow.innerHTML = '';
        viewDOM();
    });
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

const makeSection = (x,i) => {
   const sec = document.createElement('p');
   sec.classList.add('sectionElement');
   let label = x.label;
   label = label.toLowerCase();
   label = label.charAt(0).toUpperCase() + label.slice(1);
   let write;
   if(x.value === null) {
       write = `${label} >`;
   } else {
       write = `${label}(${x.value}) >`;
   }
   sec.innerHTML = write;
   sec.indexOfOperation = i;
   sec.addEventListener('click',(e) => {barClick(e)});
   return sec;
}

const operateOnList = (parameter) => {
    listOfData = listOfData.filter(x => x[parameter.label] == parameter.value);
    operations.push(parameter);
    operationalData.push(listOfData);
    console.log(listOfData,parameter,operations);
}

const barClick = (e) => {
    let workWindow = document.querySelector('#workWindow');
    workWindow.innerHTML = '';
    let index = e.target.indexOfOperation;
    listOfData = operationalData[index];
    operationalData = operationalData.slice(0,index+1);
    operations = operations.slice(0,index+1);
    viewDOM();
}

export {addStudentClick,viewStudentClick};