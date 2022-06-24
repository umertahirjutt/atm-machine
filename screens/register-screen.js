const registerScreen = (mainScreen, stack) => {
    mainScreen.innerHTML = document.querySelector('.register-screen-meta').innerHTML;

    stack.push('register-screen');

    const root = mainScreen.querySelector('.register-screen');

    const fullNameField = root.querySelector('#full_name');
    const userNameField = root.querySelector('#register_username');
    const pinField = root.querySelector('#register_pin');

    const fullNameInputGroup = root.querySelector('.full-name-input-group');
    const registerUsernameInputGroup = root.querySelector('.register-username-input-group');
    const pinInputGroup = root.querySelector('.pin-input-group');

    root.querySelector('.register-btn').addEventListener('click', e => {
        [fullNameInputGroup, registerUsernameInputGroup, pinInputGroup].forEach(group => {
            if (group.querySelector('pre') !== null) group.querySelector('pre').remove();
        });

        let isAllInputsValid = true;

        const emptyText = 'Please fill this field';

        // [
        //     [ fullNameField, fullNameInputGroup ],
        //     [ userNameField, registerUsernameInputGroup],
        //     [ pinField, pinInputGroup],
        // ].forEach(item => {
        //     if (item[0].value === '') {
        //         isAllInputsValid = appendErrorFieldToAGroup(item[1], emptyText)
        //     }
        // });
        if (fullNameField.value === '') {
            isAllInputsValid = appendErrorFieldToAGroup(fullNameInputGroup, emptyText)
        }
        if (userNameField.value === '') {
            isAllInputsValid = appendErrorFieldToAGroup(registerUsernameInputGroup, emptyText)
        }
        if (pinField.value === '') {
            isAllInputsValid = appendErrorFieldToAGroup(pinInputGroup, emptyText)
        }
        if (!isAllInputsValid) {
            return;
        }

        users.push({
            full_name: fullNameField.value,
            username: userNameField.value,
            pin: pinField.value
        });

        stack.pop();
        stack.pop();
        loginScreen(mainScreen, stack);
    });

    root.querySelector('.login-up-navigator').addEventListener('click', e => {
        stack.pop();
        stack.pop();
        loginScreen(mainScreen, stack);
    });


    console.log(root);

};
