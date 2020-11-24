import { adminLogin,teacherLogin,studentLogin } from "./login";

const loginForm = document.forms['loginForm'];
const closeLogin = document.querySelector(".cancelLogin");
const formDisplay = () => {
    let username = loginForm["username"].value;
    let password = loginForm["password"].value;
    let type = loginForm["type"].value;
    if(type === "Admin") {
        adminLogin(username,password);
    } else if(type === "Teacher") {
        teacherLogin(username,password);   
    } else if(type === "Student") {
        studentLogin(username,password);
    }
    closeLogin.click();
}

export {formDisplay};