const loginScreenInputFieldWithLabel = (placeholder, labelName, id, type='text') => {
    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = labelName;

    const inputField = document.createElement('input');
    inputField.placeholder = placeholder;
    inputField.type = type;
    inputField.id = id;

    return [label, inputField];
}

const loginScreen = () => {
    const loginContainer = document.createElement('div');
    loginContainer.classList.add('login-container');

    const title = document.createElement('h2') ;
    title.innerText = 'LOGIN';

    const inputsWrapper = document.createElement('div');
    inputsWrapper.classList.add('inputs-wrapper');

    loginScreenInputFieldWithLabel('Username', 'Username', 'username')
        .forEach(item => {
            inputsWrapper.appendChild(item);
        });

    loginScreenInputFieldWithLabel('PIN', 'Pin', 'pin-code', 'number')
        .forEach(item => {
            inputsWrapper.appendChild(item);
        });

    const loginBtn = document.createElement('button');
    loginBtn.innerText = 'LOGIN';
    loginBtn.addEventListener('click', () => {
        // navController.navigate(atmRoutes.from_login_to_register_screen);
        navController.navigate(atmRoutes.from_login_to_dashboard_screen);
    });

    loginContainer.appendChild(title);
    loginContainer.appendChild(inputsWrapper);
    loginContainer.appendChild(loginBtn);

    return [ loginContainer ];
}