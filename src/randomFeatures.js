import './randomFeatures.css';

const loader = () => {
    const loaderDiv = document.createElement('div');
    loaderDiv.innerHTML = `<i class="fas fa-spinner fa-pulse"></i>`;
    loaderDiv.id = "loader";
    return loaderDiv;
}

const importFail = () => {
    const failDiv = document.createElement('div');
    failDiv.innerHTML = `Import Failed!!!!!!!`;
    const btnClose = document.createElement('button');
    btnClose.type = 'button';
    btnClose.innerHTML = "Close";
    btnClose.id = "btnClose";
    btnClose.classList.add('btnClose');
    btnClose.addEventListener('click',() => {
        document.querySelector('.blacklayer').remove();
    });
    const failedContainer = document.createElement('div');
    failedContainer.classList.add('form-container');
    failedContainer.id = 'fail';
    failedContainer.appendChild(failDiv);
    failedContainer.appendChild(btnClose);
    return failedContainer;
}

const importSuccess = () => {
    const failDiv = document.createElement('div');
    failDiv.innerHTML = `Import Successful!!!!!!!`;
    const btnClose = document.createElement('button');
    btnClose.type = 'button';
    btnClose.innerHTML = "Close";
    btnClose.id = "btnClose";
    btnClose.classList.add('btnClose');
    btnClose.addEventListener('click',() => {
        document.querySelector('.blacklayer').remove();
    });
    const failedContainer = document.createElement('div');
    failedContainer.classList.add('form-container');
    failedContainer.id = 'success';
    failedContainer.appendChild(failDiv);
    failedContainer.appendChild(btnClose);
    return failedContainer;
}

const backArrow = (menuFunction) => {
    const backArrowDiv = document.createElement('button');
    const backArrowImage = document.createElement('img');
    backArrowDiv.id = "backArrow";
    backArrowImage.id = "backArrowImage";
    backArrowImage.src = "https://www.pinclipart.com/picdir/big/130-1304091_left-svg-icon-free-icon-back-arrow-png.png";
    backArrowImage.width = "60";
    backArrowImage.height = "40";
    backArrowDiv.appendChild(backArrowImage);
    backArrowDiv.addEventListener('click',() => {
        
        menuFunction();
        console.log('Clicked back');
    });
    return backArrowDiv;
}

export {backArrow,loader,importFail,importSuccess};