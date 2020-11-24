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
let databaseData = "";
let userDatabaseData = "";
let userDatabase = [];
let studentDatabase = [];
let studentDatabaseData = "";
let teacherDatabase = [];
let teacherDatabaseData = "";
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

export {importUsers,userDatabase,db,importStudents,studentDatabase,importTeachers,teacherDatabase};