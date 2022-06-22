function dashboardScreen() {

    const title = document.createElement('h2');
    title.innerText = 'You Have These Options';

    const withdraw = document.createElement('p');
    withdraw.innerText = 'If You Want To WithDraw Money Then Click The button';
    const withdrawbtn = document.createElement('button');
    withdrawbtn.innerText = 'With Draw Money';

    withdrawbtn.addEventListener('click',() =>{
        // Withdrawscreen();
    });

    const deposit = document.createElement('p');
    deposit.innerText = 'If You Want To Deposit Money Then Click The button';

    const depositbtn = document.createElement('button');
    depositbtn.innerText = 'Deposit Your Money';
    depositbtn.addEventListener('click',() =>{
        // Depositscreen();

    });

    const wallet = document.createElement('p');
    wallet.innerText = 'click the wallet button to check your wallet ';
    const walletbtn = document.createElement('button');
    walletbtn.innerText = 'check your wallet';
    walletbtn.addEventListener('click', () =>{
        // wltscreen();
    });

    const gobackbtn =document.createElement('button');
    gobackbtn.innerText = "Go back";
    gobackbtn.addEventListener('click', () => {
        // registerScreen();
    });

    return [
        title,
        withdraw,
        withdrawbtn,
        deposit,
        depositbtn,
        wallet,
        walletbtn,
        gobackbtn,
    ];
}
