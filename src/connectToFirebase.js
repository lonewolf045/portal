import { user,course } from "./index";

var firebaseConfig = {
    apiKey: "AIzaSyDI7nXtkFGzhjnvqfPuHm6xIAJoebeK1tA",
    authDomain: "omega-portal-du.firebaseapp.com",
    databaseURL: "https://omega-portal-du.firebaseio.com",
    projectId: "omega-portal-du",
    storageBucket: "omega-portal-du.appspot.com",
    messagingSenderId: "654265063936",
    appId: "1:654265063936:web:ab123649861c035f7d96e5",
    measurementId: "G-JJT6FHL7GK"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.database();
let dataRefUsers = db.ref().child('users');
let dataRefStudents = db.ref().child('Students');
let dataRefTeachers = db.ref().child('Teachers');
let dataRefCourses = db.ref().child('Courses');
let dataRefGroups = db.ref().child('Groups');
let databaseData = "";
let userDatabaseData = "";
let userDatabase = [];
let studentDatabase = [];
let studentDatabaseData = "";
let teacherDatabase = [];
let teacherDatabaseData = "";
let courseDatabase = [];
let courseDatabaseData = "";
let groupDatabase = [];
let groupDatabaseData = "";
let assignmentDatabase = [];
let assignmentDatabaseData = "";

const importUsers = () => {
  dataRefUsers.on("value", function (snapshot) {
      userDatabaseData = snapshot.val();
      console.log(snapshot.val());
      userDatabase = Object.values(userDatabaseData);
      console.log(userDatabase);
  });
}
const importStudents = () => {
  dataRefStudents.on("value", function (snapshot) {
    studentDatabaseData = snapshot.val();
    console.log(snapshot.val());
    studentDatabase = Object.values(studentDatabaseData);
    console.log(studentDatabase);
  });
}
const importTeachers = () => {
  dataRefTeachers.on("value", function (snapshot) {
    teacherDatabaseData = snapshot.val();
    console.log(snapshot.val());
    teacherDatabase = Object.values(teacherDatabaseData);
    console.log(teacherDatabase);
  });
}
const importCourses = (uname) => {
  let ref = returnReference(uname);
  dataRefCourses = db.ref().child('Teachers/' + ref + '/Courses');
  dataRefCourses.on("value", function (snapshot) {
    courseDatabaseData = snapshot.val();
    console.log(snapshot.val());
    courseDatabase = Object.values(courseDatabaseData);
    console.log(courseDatabase);
  });
}
const importGroups = () => {
  dataRefGroups.on("value", function (snapshot) {
    groupDatabaseData = snapshot.val();
    console.log(snapshot.val());
    groupDatabase = Object.values(groupDatabaseData);
    console.log(groupDatabase);
  });
}

const importAssignments = (uname,cname) => {
  let ref = returnReference(uname);
  let ref2 = returnCourseKey(uname,cname);
  let dataRefAssignments = db.ref().child('Teachers/' + ref + '/Courses/'+ref2+'/Assignments');
  dataRefAssignments.on("value", function (snapshot) {
    assignmentDatabaseData = snapshot.val();
    console.log(snapshot.val());
    assignmentDatabase = Object.values(assignmentDatabaseData);
    console.log(assignmentDatabase);
  });
}

const updateGroup = (index,data) => {
  let arrayKeys = Object.keys(groupDatabaseData);
  let refUpdate = db.ref().child('Groups/'+arrayKeys[index]);
  //let refSet = refUpdate.push();
  refUpdate.update({
    groupStudent:data
  });
  importGroups();
}

const updateCourse = (index,data) => {
  let arrayKeys = Object.keys(courseDatabaseData);
  let ref = returnReference(user);
  let refCourses = db.ref().child('Teachers/' + ref + '/Courses/'+arrayKeys[index]);
  refCourses.update({
    groups:data
  })
  importCourses(user);
}

const returnReference = (uname) => {
  let arrayKeys = Object.keys(teacherDatabaseData);
  let i;
  console.log(uname);
  for(i = 0; i < teacherDatabase.length; i++) {
    if(teacherDatabase[i].username === uname) {
      break;
    }
  }
  //let refUpdate = db.ref().child('Teachers/'+arrayKeys[i]);
  console.log(arrayKeys);
  return arrayKeys[i];
}

let returnCourseKey = (uname,cname) => {
  console.log(uname);
  importCourses(uname);
  let arrayKeys = Object.keys(courseDatabaseData);
  let i;
  console.log(courseDatabaseData);
  console.log(arrayKeys,uname,user);
  for(i = 0; i < courseDatabase.length; i++) {
    if(courseDatabase[i].courseName === cname) {
      break;
    }
  }
  return arrayKeys[i];
}

export {returnReference,importUsers,userDatabase,db,importStudents,studentDatabase,importTeachers,teacherDatabase,importCourses,courseDatabase,importGroups,groupDatabase,updateGroup,updateCourse,returnCourseKey,importAssignments,assignmentDatabase};