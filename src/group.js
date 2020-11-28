const { studentDatabase, db, importGroups } = require("./connectToFirebase");

const group = (groupName,groupStudents) => {
    return {groupName,groupStudents};
}

const createGroup = (groupName) => {
    let newGroup = group(groupName,new Array());
    console.log(newGroup);
    let dataRef = db.ref().child('Groups');
    let newRef = dataRef.push();
    newRef.set(newGroup);
    importGroups();
}

export {createGroup};