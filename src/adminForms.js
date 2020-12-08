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

export {addDegMenu,addDeptMenu};