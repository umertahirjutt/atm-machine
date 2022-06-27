const dashboardScreen = (mainScreen, stack) => {
    mainScreen.innerHTML = document.querySelector('.dashboard-screen-meta').innerHTML;

    stack.push('dashboard-screen');

    const root = mainScreen.querySelector('.dashboard-screen');

    if (globalMessage === null) {
        root.querySelector('.notify-msg').remove();
    } else {
        root.querySelector('.notify-msg').innerText = globalMessage;
        globalMessage = null;
    }

    root.querySelector('.deposit-btn').addEventListener('click', e => {
        depositScreen(mainScreen, stack);
    });

    root.querySelector('.withdraw-btn').addEventListener('click', e => {
        withdrawScreen(mainScreen, stack);
    });


    root.querySelector('.checkb-btn').addEventListener('click', e => {
        checkbalanceScreen(mainScreen, stack);
    });

    console.log(root);
};