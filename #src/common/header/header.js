let $headerMenu = document.querySelector('.header .menu');
if($headerMenu) {
    let $burger = document.querySelector('.burger-wrap');
    let $closeBtn = document.querySelector('.menu__mobile-close');
    $burger && $burger.addEventListener('click', () => $headerMenu.classList.add('open'));
    $closeBtn && $closeBtn.addEventListener('click', () => $headerMenu.classList.remove('open'));
}

let $menuLinks = document.querySelectorAll('.menu__link');
if($menuLinks.length) {
    $menuLinks.forEach(link => {
        if(link.classList.contains('_submenu-trigger')) {
            link.addEventListener('click', (e) => {
                if(document.documentElement.clientWidth < 992) {
                    e.preventDefault();
                    console.log('cl');
                    
                    let $submenu = link.nextElementSibling;
                    $submenu && _slideToggle($submenu);
                }
            })
        }
    })
}