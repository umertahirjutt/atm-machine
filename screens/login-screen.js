const loginScreen = (mainScreen, stack) => {
    mainScreen.innerHTML = document.querySelector('.login-screen-meta').innerHTML;

    stack.push('login-screen');

    const root = mainScreen.querySelector('.login-screen');

    root.querySelector('.sign-up-navigator').addEventListener('click', e => {
        registerScreen(mainScreen, stack);
    });

    console.log(root);
};