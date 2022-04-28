{
    let nameInput = document.querySelector('#name');
    let phoneInput = document.querySelector('#phone');
    let sendBtn = document.querySelector('#send-btn');
    let regDialog = document.querySelector('#reg-dialog');
    let regPopUp = document.querySelector('#reg-dialog-pop-up');

    sendBtn.addEventListener('click', () => {
        let name = nameInput.value;
        let phone = phoneInput.value;
        
        if(name.length != 0 && phone.length != 0) {
            regDialog.style.display = 'flex';
            regPopUp.animate([
                { opacity: '0' },
                { opacity: '1' }
            ], {
                duration: 300,
                fill: 'forwards',
                easing: 'ease-in-out'
            });

        }
    });
}