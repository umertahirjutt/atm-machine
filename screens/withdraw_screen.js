function withdrawScreen() {

    const title = document.createElement('h2');
    title.innerText = 'Withdraw Amount';

    const wdmoney = document.createElement('input');
    wdmoney.placeholder = 'withdraw Money';
    const wdbtn = document.createElement('button');
    wdbtn.innerText = 'Withdraw';

    const gobackbtn =document.createElement('button');
    gobackbtn.innerText = "Go back";
    gobackbtn.addEventListener('click', () => {
        optionscreen();
    });

    mainScreen.innerHTML = '';
    mainScreen.appendChild(title);
    mainScreen.appendChild(wdmoney);
    mainScreen.appendChild(wdbtn);
    mainScreen.appendChild(gobackbtn);
    stack.pop();
    stack.push('OPTION-SCREEN');
}
