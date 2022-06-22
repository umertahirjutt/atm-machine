function registerScreen() {
    const title = document.createElement('h2');
    title.innerText = 'REGISTER';

    const firstNameInput = document.createElement('input');
    firstNameInput.placeholder = 'First Name';

    const lastNameInput = document.createElement('input');
    lastNameInput.placeholder = 'Last Name';

    const usernameInput = document.createElement('input');
    usernameInput.placeholder = 'Username'

    const pinInput = document.createElement('input');
    pinInput.type = 'number';
    pinInput.placeholder = 'PIN';

    const registerBtn = document.createElement('button');
    registerBtn.innerText = 'REGISTER';
    registerBtn.addEventListener('click',() => {
        // optionscreen();
    });

    const gobackbtn = document.createElement('button');
    gobackbtn.innerText ='GO Back ';
    gobackbtn.addEventListener('click', () => {
        // loginScreen();
    });

    return [
        title,
        firstNameInput,
        lastNameInput,
        usernameInput,
        pinInput,
        registerBtn,
        gobackbtn,
    ];
}
