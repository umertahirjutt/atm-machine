const mobileScreen = document.querySelector('.mobile-screen');

let stack = [];

let users = [];

loginScreen(mobileScreen, stack);
//registerScreen(mobileScreen, stack);
//dashboardScreen(mobileScreen,stack);
//depositScreen(mobileScreen,stack);
//withdrawScreen(mobileScreen,stack);
//checkbalanceScreen(mobileScreen,stack);

document.querySelector('.fa-chevron-right').addEventListener('click', e => {
    stack.pop();

    if (stack.length === 0) {
        stack.push('login-screen');
    }
    const lastItem = stack.pop();

    switch (lastItem) {
        case 'login-screen':
            loginScreen(mobileScreen, stack);
            break;
        case 'register-screen':
            registerScreen(mobileScreen, stack);
            break;
        case 'dashboard-screen':
            dashboardScreen(mobileScreen, stack);
            break;
        case 'deposit-screen':
            depositScreen(mobileScreen, stack);
            break;
    }
});

const showStack = () => {
    const stackContainer = document.querySelector('.stack-container');
    stackContainer.innerHTML = '';
    stack.forEach(stackItem => {
        const h3 = document.createElement('h3')
        h3.innerText = stackItem;
        stackContainer.appendChild(h3);
    });
    setTimeout(showStack, 1);
}

setTimeout(showStack, 1);