import { logOutAdmin } from "./adminLogout";

const profileMenu = () => {
    const menu = document.createElement('div');
    const logOut = document.createElement('a');
    logOut.innerHTML = "Log Out";
    logOut.addEventListener('click',() => {
        logOutAdmin();
    })
    menu.classList.add('default');
    menu.appendChild(logOut);
    return menu;
}

export {profileMenu};