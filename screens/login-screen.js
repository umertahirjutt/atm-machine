const loginScreen = (mainScreen, stack) => {
    mainScreen.innerHTML = document.querySelector('.login-screen-meta').innerHTML;

    stack.push('login-screen');

    const root = mainScreen.querySelector('.login-screen');

    const usernameInputGroup = mainScreen.querySelector('.login-username-input-group');
    const pinInputGroup = mainScreen.querySelector('.login-pin-input-group');

    const usernameInputField = usernameInputGroup.querySelector('input');
    const pinInputField = pinInputGroup.querySelector('input');

    root.querySelector('.login-up-btn').addEventListener('click', e => {
        [usernameInputGroup, pinInputGroup].forEach(group => {
            if (group.querySelector('pre') !== null) group.querySelector('pre').remove();
        });

        let isAllInputsValid = true;

        const emptyText = 'Please fill this field';

        if (usernameInputField.value === '') {
            isAllInputsValid = appendErrorFieldToAGroup(usernameInputGroup, emptyText)
        }
        if (pinInputField.value === '') {
            isAllInputsValid = appendErrorFieldToAGroup(pinInputGroup, emptyText)
        }

        if (!isAllInputsValid) {
            return;
        }

        let foundUser = null;

        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            if (user.username === usernameInputField.value) {
                foundUser = user;
                break;
            }
        }

        if (foundUser === null) {
            appendErrorFieldToAGroup(usernameInputGroup, 'No User Found!');
            return;
        } else if (foundUser.pin !== pinInputField.value) {
            appendErrorFieldToAGroup(pinInputGroup, 'Invalid Pin!');
            return;
        }

        currentUser = foundUser;

        stack.pop();
        dashboardScreen(mainScreen,stack);
    });

    root.querySelector('.sign-up-navigator').addEventListener('click', e => {
        registerScreen(mainScreen,stack);
    });


    console.log(root);
};