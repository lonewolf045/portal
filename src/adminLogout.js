import { openingPage } from "./openingPage";
import { resetCurrentUser } from "./session";

const loginBtn = document.querySelector(".open-login-button");
const btnLogout = document.querySelector("#logout-button-admin");
const teacherBtn = document.querySelector(".teacher");
const studentBtn = document.querySelector(".student");
const container = document.querySelector("#container");
const btnOpenAdmin = document.querySelector('#openBtnAdmin');

const logOutAdmin = () => {
    openingPage();
    resetCurrentUser();
}

export {logOutAdmin};