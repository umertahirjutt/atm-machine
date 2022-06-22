function depositScreen() {
    const title = document.createElement('h2');
    title.innerText = 'Deposit Amount';

    const dmoney = document.createElement('input');
    dmoney.placeholder = 'Deposited Amount';

    const dbtn = document.createElement('button');
    dbtn.innerText = 'Deposit';
    dbtn.addEventListener('click', () =>{
        wltscreen();

    });

    const gobackbtn =document.createElement('button');
    gobackbtn.innerText = "Go back";
    gobackbtn.addEventListener('click', () => {
        optionscreen();
    });


    mainScreen.innerHTML = '';
    mainScreen.appendChild(title);
    mainScreen.appendChild(dmoney);
    mainScreen.appendChild(dbtn);
    mainScreen.appendChild(gobackbtn);
    stack.pop();
    stack.push('OPTION-SCREEN');
}
