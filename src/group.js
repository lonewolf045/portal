const { studentDatabase, db, importGroups } = require("./connectToFirebase");

const group = (groupName,groupStudents,notGroupStudents) => {
    return {groupName,groupStudents,notGroupStudents};
}

const createGroup = (groupName) => {
    let newGroup = group(groupName,[],[...studentDatabase]);
    console.log(newGroup);
    let dataRef = db.ref().child('Groups');
    let newRef = dataRef.push();
    newRef.set(newGroup);
    importGroups();
}

export {createGroup};