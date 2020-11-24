(()=>{"use strict";var e={438:(e,t,o)=>{o.r(t),o.d(t,{importUsers:()=>y,userDatabase:()=>c,db:()=>n,importStudents:()=>p,studentDatabase:()=>u,importTeachers:()=>g,teacherDatabase:()=>i}),firebase.initializeApp({apiKey:"AIzaSyDI7nXtkFGzhjnvqfPuHm6xIAJoebeK1tA",authDomain:"omega-portal-du.firebaseapp.com",databaseURL:"https://omega-portal-du.firebaseio.com",projectId:"omega-portal-du",storageBucket:"omega-portal-du.appspot.com",messagingSenderId:"654265063936",appId:"1:654265063936:web:ab123649861c035f7d96e5",measurementId:"G-JJT6FHL7GK"}),firebase.analytics();let n=firebase.database(),r=n.ref().child("users"),l=n.ref().child("Students"),s=n.ref().child("Teachers"),a="",c=[],u=[],d="",i=[],m="";const y=()=>{r.on("value",(function(e){a=e.val(),console.log(e.val()),c=Object.values(a),console.log(c)}))},p=()=>{l.on("value",(function(e){d=e.val(),console.log(e.val()),u=Object.values(d),console.log(u)}))},g=()=>{s.on("value",(function(e){m=e.val(),console.log(e.val()),i=Object.values(m),console.log(i)}))}}},t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=document.querySelector("#logout-button"),t=document.querySelector(".open-login-button"),n=document.querySelector(".teacher"),r=document.querySelector(".student"),l=e=>{var t;t=e,document.querySelector(".welcome-message").innerHTML="Welcome, "+t,s()},s=()=>{t.style.display="none",e.style.display="block",n.style.display="block",r.style.display="block"};var a=o(438);const c=document.querySelector("#logout-button"),u=document.querySelector(".open-login-button"),d=e=>{var t;t=e,document.querySelector(".welcome-message").innerHTML="Welcome, "+t,i()},i=()=>{u.style.display="none",c.style.display="block"},m=document.querySelector("#logout-button"),y=document.querySelector(".open-login-button"),p=e=>{var t;t=e,document.querySelector(".welcome-message").innerHTML="Welcome, "+t,g()},g=()=>{y.style.display="none",m.style.display="block"},b=document.forms.loginForm,S=document.querySelector(".cancelLogin"),f=()=>{let e=b.username.value,t=b.password.value,o=b.type.value;"Admin"===o?((e,t)=>{for(let o=0;o<a.userDatabase.length;o++)if("Admin"===a.userDatabase[o].Type&&a.userDatabase[o].username===e&&a.userDatabase[o].password===t)return console.log("Success"),void l(e);console.log("Wrong Login Credentials")})(e,t):"Teacher"===o?((e,t)=>{for(let o=0;o<a.userDatabase.length;o++)if("Teacher"===a.userDatabase[o].Type&&a.userDatabase[o].username===e&&a.userDatabase[o].password===t)return console.log("Success"),void d(e);console.log("Wrong Login Credentials")})(e,t):"Student"===o&&((e,t)=>{for(let o=0;o<a.userDatabase.length;o++)if("Student"===a.userDatabase[o].Type&&a.userDatabase[o].username===e&&a.userDatabase[o].password===t)return console.log("Success"),void p(e);console.log("Wrong Login Credentials")})(e,t),S.click()},v=document.querySelector(".open-login-button"),h=document.querySelector("#logout-button"),q=document.querySelector(".teacher"),L=document.querySelector(".student"),k=document.querySelector("#container"),T=()=>{console.log("Clicked"),document.querySelector(".welcome-message").innerHTML="",k.innerHTML="",console.log("Logged Out"),v.style.display="block",h.style.display="none",q.style.display="none",L.style.display="none"},{importUsers:D,importTeachers:E,db:w}=o(438),I=document.querySelector("#teacherClose"),C=()=>{const e=document.forms.addStudent;console.log(e);let t=e.firstName.value,o=e.lastName.value,n=e.year.value,r=e.degree.value;console.log(t,o,n,r),((e,t,o,n)=>{let r=e.toLowerCase()+t+o,l=((e,t,o,n,r)=>({firstName:e,lastName:t,year:o,degree:n,username:r}))(e,t,o,n,r);a.db.ref().child("Students").push().set(l),a.db.ref().child("users").push().set({Type:"Student",username:l.username,password:"student123"}),(0,a.importUsers)(),(0,a.importStudents)()})(t,o,n,r),studentClose.click()},j=()=>{const e=document.forms.addTeacher;console.log(e);let t=e.firstName.value,o=e.lastName.value,n=e.teacherCode.value;console.log(t,o,n),((e,t,o)=>{let n=e.toLowerCase()+t+o,r=((e,t,o,n)=>({firstName:e,lastName:t,teacherCode:o,username:n}))(e,t,o,n);w.ref().child("Teachers").push().set(r),w.ref().child("users").push().set({Type:"Teacher",username:r.username,password:"teacher123"}),D(),E()})(t,o,n),I.click()},O=(document.querySelector("#btn"),document.querySelector("#btnLogin")),A=document.querySelector("#logout-button"),N=document.querySelector(".open-login-button"),B=document.querySelector(".cancelLogin"),H=document.querySelector(".teacher"),M=document.querySelector(".student"),P=(document.querySelector(".open-uppassword-button"),document.querySelector("#btnPassUpdate"),document.querySelector(".openbtn"),document.querySelector("#btnProfUpdate"),document.querySelector(".open-upprofile-button"),document.querySelector("#teacherClose")),U=document.querySelector("#studentClose"),F=document.querySelector("#btnAddTeacher"),W=document.querySelector("#btnAddStudent");function x(){document.getElementById("addTeacher").style.display="block"}function z(){document.getElementById("addTeacher").style.display="none",R()}function G(){document.getElementById("addStudent").style.display="block"}function J(){document.getElementById("addStudent").style.display="none",R()}function K(){document.getElementById("loginForm").style.display="block"}function _(){document.getElementById("loginForm").style.display="none",document.forms.loginForm.reset()}function R(){document.forms.addTeacher.reset()}(0,a.importUsers)(),(0,a.importStudents)(),N.addEventListener("click",K),B.addEventListener("click",_),O.addEventListener("click",f),H.addEventListener("click",x),P.addEventListener("click",z),M.addEventListener("click",G),U.addEventListener("click",J),A.addEventListener("click",T),W.addEventListener("click",C),F.addEventListener("click",j)})()})();