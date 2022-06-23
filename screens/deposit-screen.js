const depositScreen = (mainScreen, stack) => {
    mainScreen.innerHTML = document.querySelector('.deposit-screen-meta').innerHTML;

    stack.push('deposit-screen');

    const root = mainScreen.querySelector('.deposit-screen');

    console.log(stack);
}

