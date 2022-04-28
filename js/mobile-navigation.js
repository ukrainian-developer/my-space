{
    let navBtn = document.querySelector('#mobile-nav-btn');
    let closeNavBtn = document.querySelector('#close-nav-btn');
    let mobileNav = document.querySelector('#mobile-nav');

    navBtn.addEventListener('click', () => {
        mobileNav.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-182px)' }
        ], {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out'
        });
    });

    closeNavBtn.addEventListener('click', () => {
        mobileNav.animate([
            { transform: 'translateX(-182px)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out'
        });
    });
}