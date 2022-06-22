function checkBalanceScreen() {

    const title = document.createElement('h2');
    title.innerText = 'Wallet Amount';

    const wltbtn = document.createElement('button');
    wltbtn.innerText = 'Check wallet';

    const gobackbtn =document.createElement('button');

    gobackbtn.innerText = "Go back";
    gobackbtn.addEventListener('click', () => {
        optionscreen();
    });

    mainScreen.innerHTML = '';
    mainScreen.appendChild(title);
    mainScreen.appendChild(wltbtn);
    mainScreen.appendChild(gobackbtn);
    stack.pop();
    stack.push('OPTION-SCREEN');
}
