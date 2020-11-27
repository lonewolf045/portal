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
const importCourses = () => {
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

export {importUsers,userDatabase,db,importStudents,studentDatabase,importTeachers,teacherDatabase,importCourses,courseDatabase,importGroups,groupDatabase};