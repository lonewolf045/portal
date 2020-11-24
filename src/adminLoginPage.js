const btnLogout = document.querySelector("#logout-button");
const loginBtn = document.querySelector(".open-login-button");
const formBtn = document.querySelector('.teacher');
const studentBtn = document.querySelector(".student");
const welcomeMessage = function (user) {
    const use = document.querySelector(".welcome-message");
    use.innerHTML = "Welcome, " + user;
}
const loginAdminDOM = (username) => {
    welcomeMessage(username);
    changeButton();
}

const changeButton = () => {
    loginBtn.style.display = "none";
    btnLogout.style.display = "block";
    formBtn.style.display = "block";
    studentBtn.style.display = "block";
}


export {loginAdminDOM};