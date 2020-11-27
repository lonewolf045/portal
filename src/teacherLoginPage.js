const btnLogout = document.querySelector("#logout-button");
const loginBtn = document.querySelector(".open-login-button");
const courseBtn = document.querySelector('.course');
//const studentBtn = document.querySelector(".student");
const welcomeMessage = function (user) {
    const use = document.querySelector(".welcome-message");
    use.innerHTML = "Welcome, " + user;
}

const loginTeacherDOM = (username) => {
    welcomeMessage(username);
    changeButton();
}

const changeButton = () => {
    loginBtn.style.display = "none";
    btnLogout.style.display = "block";
    courseBtn.style.display = "block";
}


export {loginTeacherDOM};