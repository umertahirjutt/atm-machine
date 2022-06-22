const registerScreen = (mainScreen, stack) => {
    mainScreen.innerHTML = document.querySelector('.register-screen-meta').innerHTML;

    const root = mainScreen.querySelector('.register-screen');

    console.log(stack);
    // root.querySelector('.sign-up-navigator').addEventListener('click', e => {
    //     registerScreen(mainScreen);
    // });
};
