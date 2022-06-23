const registerScreen = (mainScreen, stack) => {
    mainScreen.innerHTML = document.querySelector('.register-screen-meta').innerHTML;

    stack.push('register-screen');

    const root = mainScreen.querySelector('.register-screen');

    root.querySelector('.login-btn').addEventListener('click', e => {
        dashboardScreen(mainScreen, stack);
    });
    root.querySelector('.login-up-navigator').addEventListener('click', e => {
        stack.pop();
        stack.pop();
        loginScreen(mainScreen, stack);
    });


    console.log(root);

};
