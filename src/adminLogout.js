const loginBtn = document.querySelector(".open-login-button");
const btnLogout = document.querySelector("#logout-button");
const teacherBtn = document.querySelector(".teacher");
const studentBtn = document.querySelector(".student");
const container = document.querySelector("#container");

const logOut = () => {
    console.log("Clicked");
    const use = document.querySelector(".welcome-message");
    use.innerHTML = "";
    container.innerHTML = "";
    console.log("Logged Out");
    //signUpBtn.style.display = "block";
    loginBtn.style.display = "block";
    btnLogout.style.display = "none";
    teacherBtn.style.display = "none";
    studentBtn.style.display = "none";
    //formBtn.style.display = "none";
    //passUpdateBtn.style.display = "none";
    //btnOpen.style.display = "none";
    //profUpdateBtn.style.display = "none";
    //closeNav();
}

export {logOut};