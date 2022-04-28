{
    let regDialog = document.querySelector('#reg-dialog');
    let regPopUp = document.querySelector('#reg-dialog-pop-up');
    let regDialogBtn = document.querySelector('#reg-dialog-btn');

    regDialogBtn.addEventListener('click', () => {
        regPopUp.animate([
            { opacity: '1' },
            { opacity: '0' }
        ], {
            duration: 300,
            fill: 'forwards',
            easing: 'ease-in-out'
        }).onfinish = () => {
            regDialog.style.display = 'none';
        };
    })
}