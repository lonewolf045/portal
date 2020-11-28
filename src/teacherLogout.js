const loginBtn = document.querySelector(".open-login-button");
const btnLogout = document.querySelector("#logout-button-teach");
const courseBtn = document.querySelector(".course");
const container = document.querySelector("#container");
const btnOpenTeach = document.querySelector("#openBtnTeach");

const logOutTeacher = () => {
    console.log("Clicked");
    const use = document.querySelector(".welcome-message");
    use.innerHTML = "";
    container.innerHTML = "";
    console.log("Logged Out");
    //signUpBtn.style.display = "block";
    loginBtn.style.display = "block";
    btnLogout.style.display = "none";
    courseBtn.style.display = "none";
    //studentBtn.style.display = "none";
    //formBtn.style.display = "none";
    //passUpdateBtn.style.display = "none";
    //btnOpen.style.display = "none";
    //profUpdateBtn.style.display = "none";
    //closeNav();
    btnOpenTeach.style.display = "none";
}

export {logOutTeacher};