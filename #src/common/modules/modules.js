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

function unActiveModules(index) {
    let arrFunction = [
        module1UnActive,
        module2UnActive,
        module3UnActive,
        module4UnActive,
        module5UnActive,
        module6UnActive,
    ]

    arrFunction.forEach((callback, i) => {
        if(i === index) return
        callback();
    })
}

let module1 = document.querySelector('.module-1.trigger');
if(module1) {
    let items = document.querySelectorAll('.module-1');
    module1.addEventListener('click', () => {
        unActiveModules(0)
        module1Active(items)
    })
}

let module2 = document.querySelector('.module-2.trigger');
if(module2) {
    let items = document.querySelectorAll('.module-2');
    module2.addEventListener('click', () => {
        unActiveModules(1)
        module2Active(items)
    })
}

let module3 = document.querySelector('.module-3.trigger');
if(module3) {
    let items = document.querySelectorAll('.module-3');
    module3.addEventListener('click', () => {
        unActiveModules(2)
        module3Active(items)
    })
}

let module4 = document.querySelector('.module-4.trigger');
if(module4) {
    let items = document.querySelectorAll('.module-4');
    module4.addEventListener('click', () => {
        unActiveModules(3)
        module4Active(items)
    })
}

let module5 = document.querySelector('.module-5.trigger');
if(module5) {
    let items = document.querySelectorAll('.module-5');
    module5.addEventListener('click', () => {
        unActiveModules(4)
        module5Active(items)
    })
}

let module6 = document.querySelector('.module-6.trigger');
if(module6) {
    let items = document.querySelectorAll('.module-6');

    module6.addEventListener('click', () => {
        returnElements();
        unActiveModules(5)
        _setTimeoutRightNow(timerId)
        module6Active(items)
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


function module1Active(items) {
    items.forEach(item => item.classList.add('active'))
    anime({
        targets: '.module-1',
        translateY: [0, '-34px'],
        easing: 'linear',
        duration: 100,
    })
}

function module1UnActive() {
    let items = document.querySelectorAll('.module-1');
    let trigger = document.querySelector('.module-1.trigger');
    if(trigger.classList.contains('active')) {
        anime({
            targets: '.module-1',
            translateY: ['-34px', 0],
            easing: 'linear',
            duration: 100,
        })
        items.forEach(item => item.classList.remove('active'))
    }
}

function module2Active(items) {
    items.forEach(item => item.classList.add('active'))
    anime({
        targets: '.module-2',
        translateY: [0, '-34px'],
        easing: 'linear',
        duration: 100,
    })
}

function module2UnActive() {
    let items = document.querySelectorAll('.module-2');
    let trigger = document.querySelector('.module-2.trigger');
    if(trigger.classList.contains('active')) {
        anime({
            targets: '.module-2',
            translateY: ['-34px', 0],
            easing: 'linear',
            duration: 100,
        })
        items.forEach(item => item.classList.remove('active'))
    }
}

function module3Active(items) {
    items.forEach(item => item.classList.add('active'))
    anime({
        targets: '.module-3',
        translateY: [0, '-34px'],
        easing: 'linear',
        duration: 100,
    })
}
function module3UnActive() {
    let items = document.querySelectorAll('.module-3');
    let trigger = document.querySelector('.module-3.trigger');
    if(trigger.classList.contains('active')) {
        anime({
            targets: '.module-3',
            translateY: ['-34px', 0],
            easing: 'linear',
            duration: 100,
        })
        items.forEach(item => item.classList.remove('active'))
    }
}

function module4Active(items) {
    items.forEach(item => item.classList.add('active'))
    anime({
        targets: '.module-4',
        translateY: [0, '-34px'],
        easing: 'linear',
        duration: 100,
    })
}
function module4UnActive() {
    let items = document.querySelectorAll('.module-4');
    let trigger = document.querySelector('.module-4.trigger');
    if(trigger.classList.contains('active')) {
        anime({
            targets: '.module-4',
            translateY: ['-34px', 0],
            easing: 'linear',
            duration: 100,
        })
        items.forEach(item => item.classList.remove('active'))
    }
}

function module5Active(items) {
    let topEl = document.querySelector('.module-5.top');
    let neighbourTopEl = document.querySelector('.module-6.top');

    moveTo(neighbourTopEl, topEl);
    anime({
        targets: '.module-5',
        translateY: [0, '-34px'],
        easing: 'linear',
        duration: 100,
    })
    items.forEach(item => item.classList.add('active'))
}

function module5UnActive() {
    let items = document.querySelectorAll('.module-5');
    let trigger = document.querySelector('.module-5.trigger');
    if(trigger.classList.contains('active')) {
        anime({
            targets: '.module-5',
            translateY: ['-34px', 0],
            easing: 'linear',
            duration: 100,
        })
    
        items.forEach(item => item.classList.remove('active'))
    }

}

function module6Active(items) {
    items.forEach(item => item.classList.add('active'))
    anime({
        targets: '.module-6',
        translateY: ['34px', 0],
        translateX: '-3px',
        easing: 'linear',
        duration: 100,
    })
    anime({
        targets: '.module-6.right',
        translateY: ['34px', 0],
        translateX: '-1px',
        scale: 0.997,
        easing: 'linear',
        duration: 100,
    })
}
function module6UnActive() {
    let items = document.querySelectorAll('.module-6');
    let trigger = document.querySelector('.module-6.trigger');
    if(trigger.classList.contains('active')) {
        items.forEach(item => item.classList.remove('active'))
        anime({
            targets: '.module-6',
            translateY: ['0', '34px'],
            easing: 'linear',
            translateX: '-3px',
            scale: 1,
            duration: 100,
        })
    }

}