const depositScreen = (mainScreen, stack) => {
    mainScreen.innerHTML = document.querySelector('.deposit-screen-meta').innerHTML;

    stack.push('deposit-screen');

    const root = mainScreen.querySelector('.deposit-screen');

    const depositInputGroup = root.querySelector('.d-input');
    const depositField = root.querySelector('input');

    root.querySelector('button').addEventListener('click', e => {
        if (depositInputGroup.querySelector('pre') !== null) {
            depositInputGroup.querySelector('pre').remove();
        }

        let isAllInputsValid = true;

        const emptyText = 'Please fill this field';

        if (depositField.value === '') {
            isAllInputsValid = appendErrorFieldToAGroup(depositInputGroup, emptyText)
        }

        if (!isAllInputsValid) {
            return;
        }

        currentUser.wallet = currentUser.wallet + parseInt(depositField.value);

        let currentUserIndex = 0;

        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            if (user.username === currentUser.username) {
                currentUserIndex = i;
                break;
            }
        }

        users[currentUserIndex] = currentUser;
        stack.pop();
        globalMessage = "You have successfully deposited Rs. " + depositField.value + ", Your New Balance is Rs. " + currentUser.wallet
        dashboardScreen(mainScreen, stack);
    });

    console.log(stack);
}

