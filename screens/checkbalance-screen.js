const checkbalanceScreen = (mainScreen, stack) => {
    mainScreen.innerHTML = document.querySelector('.checkbalance-screen-meta').innerHTML;

    stack.push('check-balance-screen');

    const root = mainScreen.querySelector('.checkbalance-screen');
}

console.log(stack);