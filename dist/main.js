(()=>{"use strict";var e={438:(e,t,o)=>{o.r(t),o.d(t,{importUsers:()=>y,userDatabase:()=>a,db:()=>n,importStudents:()=>p,studentDatabase:()=>u,importTeachers:()=>g,teacherDatabase:()=>i}),firebase.initializeApp({apiKey:"AIzaSyDI7nXtkFGzhjnvqfPuHm6xIAJoebeK1tA",authDomain:"omega-portal-du.firebaseapp.com",databaseURL:"https://omega-portal-du.firebaseio.com",projectId:"omega-portal-du",storageBucket:"omega-portal-du.appspot.com",messagingSenderId:"654265063936",appId:"1:654265063936:web:ab123649861c035f7d96e5",measurementId:"G-JJT6FHL7GK"}),firebase.analytics();let n=firebase.database(),l=n.ref().child("users"),r=n.ref().child("Students"),c=n.ref().child("Teachers"),s="",a=[],u=[],d="",i=[],m="";const y=()=>{l.on("value",(function(e){s=e.val(),console.log(e.val()),a=Object.values(s),console.log(a)}))},p=()=>{r.on("value",(function(e){d=e.val(),console.log(e.val()),u=Object.values(d),console.log(u)}))},g=()=>{c.on("value",(function(e){m=e.val(),console.log(e.val()),i=Object.values(m),console.log(i)}))}}},t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={exports:{}};return e[n](l,l.exports,o),l.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=document.querySelector("#logout-button"),t=document.querySelector(".open-login-button"),n=document.querySelector(".teacher"),l=document.querySelector(".student"),r=document.querySelector("#openBtnAdmin"),c=e=>{var t;t=e,document.querySelector(".welcome-message").innerHTML="Welcome, "+t,s()},s=()=>{t.style.display="none",e.style.display="block",n.style.display="block",l.style.display="block",r.style.display="block"};var a=o(438);const u=document.querySelector("#logout-button"),d=document.querySelector(".open-login-button"),i=e=>{var t;t=e,document.querySelector(".welcome-message").innerHTML="Welcome, "+t,m()},m=()=>{d.style.display="none",u.style.display="block"},y=document.querySelector("#logout-button"),p=document.querySelector(".open-login-button"),g=e=>{var t;t=e,document.querySelector(".welcome-message").innerHTML="Welcome, "+t,b()},b=()=>{p.style.display="none",y.style.display="block"},S=document.forms.loginForm,f=document.querySelector(".cancelLogin"),v=()=>{let e=S.username.value,t=S.password.value,o=S.type.value;"Admin"===o?((e,t)=>{for(let o=0;o<a.userDatabase.length;o++)if("Admin"===a.userDatabase[o].Type&&a.userDatabase[o].username===e&&a.userDatabase[o].password===t)return console.log("Success"),void c(e);console.log("Wrong Login Credentials")})(e,t):"Teacher"===o?((e,t)=>{for(let o=0;o<a.userDatabase.length;o++)if("Teacher"===a.userDatabase[o].Type&&a.userDatabase[o].username===e&&a.userDatabase[o].password===t)return console.log("Success"),void i(e);console.log("Wrong Login Credentials")})(e,t):"Student"===o&&((e,t)=>{for(let o=0;o<a.userDatabase.length;o++)if("Student"===a.userDatabase[o].Type&&a.userDatabase[o].username===e&&a.userDatabase[o].password===t)return console.log("Success"),void g(e);console.log("Wrong Login Credentials")})(e,t),f.click()},h=document.querySelector(".open-login-button"),q=document.querySelector("#logout-button"),k=document.querySelector(".teacher"),L=document.querySelector(".student"),T=document.querySelector("#container"),E=()=>{console.log("Clicked"),document.querySelector(".welcome-message").innerHTML="",T.innerHTML="",console.log("Logged Out"),h.style.display="block",q.style.display="none",k.style.display="none",L.style.display="none"},{importUsers:I,importTeachers:w,db:D}=o(438),B=document.querySelector("#teacherClose"),A=()=>{const e=document.forms.addStudent;console.log(e);let t=e.firstName.value,o=e.lastName.value,n=e.year.value,l=e.degree.value;console.log(t,o,n,l),((e,t,o,n)=>{let l=e.toLowerCase()+t+o,r=((e,t,o,n,l)=>({firstName:e,lastName:t,year:o,degree:n,username:l}))(e,t,o,n,l);a.db.ref().child("Students").push().set(r),a.db.ref().child("users").push().set({Type:"Student",username:r.username,password:"student123"}),(0,a.importUsers)(),(0,a.importStudents)()})(t,o,n,l),studentClose.click()},C=()=>{const e=document.forms.addTeacher;console.log(e);let t=e.firstName.value,o=e.lastName.value,n=e.teacherCode.value;console.log(t,o,n),((e,t,o)=>{let n=e.toLowerCase()+t+o,l=((e,t,o,n)=>({firstName:e,lastName:t,teacherCode:o,username:n}))(e,t,o,n);D.ref().child("Teachers").push().set(l),D.ref().child("users").push().set({Type:"Teacher",username:l.username,password:"teacher123"}),I(),w()})(t,o,n),B.click()},j=(document.querySelector("#btn"),document.querySelector("#btnLogin")),N=document.querySelector("#logout-button"),O=document.querySelector(".open-login-button"),x=document.querySelector(".cancelLogin"),H=document.querySelector(".teacher"),M=document.querySelector(".student"),P=(document.querySelector(".open-uppassword-button"),document.querySelector("#btnPassUpdate"),document.querySelector("#openBtnAdmin")),U=(document.querySelector("#btnProfUpdate"),document.querySelector(".open-upprofile-button"),document.querySelector("#teacherClose")),F=document.querySelector("#studentClose"),W=document.querySelector("#btnAddTeacher"),z=document.querySelector("#btnAddStudent"),G=document.querySelector("#closeNavAdmin");function J(){document.getElementById("addTeacher").style.display="block"}function K(){document.getElementById("addTeacher").style.display="none",Z()}function _(){document.getElementById("addStudent").style.display="block"}function R(){document.getElementById("addStudent").style.display="none",Z()}function X(){document.getElementById("loginForm").style.display="block"}function Q(){document.getElementById("loginForm").style.display="none",document.forms.loginForm.reset()}function V(){document.getElementById("sidepanelAdmin").style.width="280px",document.getElementById("container").style.left="280px",document.getElementById("head").style.left="40%"}function Y(){document.getElementById("sidepanelAdmin").style.width="0",document.getElementById("container").style.left="0",document.getElementById("head").style.left="30%"}function Z(){document.forms.addTeacher.reset()}document.querySelector(".open-student-button"),document.querySelector(".open-teacher-button");(0,a.importUsers)(),(0,a.importStudents)(),O.addEventListener("click",X),x.addEventListener("click",Q),j.addEventListener("click",v),H.addEventListener("click",J),U.addEventListener("click",K),M.addEventListener("click",_),F.addEventListener("click",R),N.addEventListener("click",E),z.addEventListener("click",A),W.addEventListener("click",C),P.addEventListener("click",V),G.addEventListener("click",Y)})()})();