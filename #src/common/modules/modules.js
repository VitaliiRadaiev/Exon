let $modulesSlider = document.querySelector('.modules__cards-slider');
let timerId;

if($modulesSlider) {
    let dataSlider = new Swiper($modulesSlider, {
        effect: 'flip',
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: true,
        speed: 800,
    });
}

let module5 = document.querySelector('.module-5.trigger');
if(module5) {
    let items = document.querySelectorAll('.module-5');
    module5.addEventListener('mouseenter', () => {
        module5Active(items)
        
    })
    module5.addEventListener('mouseleave', () => {
        returnElements()
        module5UnActive(items)
    })
}

let module6 = document.querySelector('.module-6.trigger');
if(module6) {
    let items = document.querySelectorAll('.module-6');
    module6.addEventListener('mouseenter', () => {
        _setTimeoutRightNow(timerId)
       items.forEach(item => item.classList.add('active'))
       anime({
           targets: '.module-6',
           translateY: ['34px', 0],
           translateX: '-3px',
           easing: 'linear',
           duration: 100,
       })
    })
    module6.addEventListener('mouseleave', () => {
        items.forEach(item => item.classList.remove('active'))
        anime({
            targets: '.module-6',
            translateY: ['0', '34px'],
            easing: 'linear',
            translateX: '-3px',
            duration: 100,
        })
    })
}

let dataTimerId = {}

function _setTimeout(callback, time) {
    let timerId = setTimeout(callback, time);
    dataTimerId = {[timerId]: callback} 
    return timerId
}

function _setTimeoutRightNow(id) {
    if(!id) {
        return
    }
    clearTimeout(id);
    dataTimerId[id]();
}

function returnElements() {
    let elments = document.querySelectorAll('path[data-id]');
    if(elments.length) {
        elments.forEach(el => {
            let anchor = document.querySelector(`g[data-id="${el.dataset.id}"]`);
            timerId = _setTimeout(() => {
                anchor.after(el);
                anchor.remove();
                el.removeAttribute('data-id')
            }, 600)

        })
    } else {
        console.log('function returnElements not fonded elements');
    }
    
}

function moveTo(el1, el2) {
    if(!el1 && !el2) {
        return console.log('el is null');
    }
    
    if(!el1.dataset.id) {
        let id = Date.now();
        let anchor = document.createElement('g');
        anchor.setAttribute('data-id', id);
        el1.setAttribute('data-id', id);
        el1.after(anchor);
    }

    el2.before(el1);

}

function module5Active(items) {
    let topEl = document.querySelector('.module-5.top');
    let neighbourTopEl = document.querySelector('.module-6.top');

    moveTo(neighbourTopEl, topEl);
    anime({
        targets: '.module-5',
        translateY: [0, '-34px'],
        translateX: '-3px',
        easing: 'linear',
        duration: 100,
    })
    items.forEach(item => item.classList.add('active'))
}

function module5UnActive(items) {
    anime({
        targets: '.module-5',
        translateY: ['-34px', 0],
        translateX: '-3px',
        easing: 'linear',
        duration: 100,
    })

    items.forEach(item => item.classList.remove('active'))
}