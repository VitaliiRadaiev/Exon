let $modulesSlider = document.querySelector('.modules__cards-slider');
let timerId;
let dataSlider;

if($modulesSlider) {
    let wrapper = $modulesSlider.querySelector('.swiper-wrapper');
    let items = Array.from(wrapper.children);
    items.forEach(item => {
        let id = item.dataset.id;
        switch (+id) {
            case 1:
                item.dataset.id = 5
                break;
            case 2:
                item.dataset.id = 1
                break;
            case 3:
                item.dataset.id = 2
                break;
            case 4:
                item.dataset.id = 0
                break;
            case 5:
                item.dataset.id = 3
                break;
            case 6:
                item.dataset.id = 4
                break;
        }
    })

    let sortItems = items.sort((a, b) => a.dataset.id - b.dataset.id);
    wrapper.append(...sortItems);

    dataSlider = new Swiper($modulesSlider, {
        effect: 'fade',
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

    module1Active(items)
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
    dataSlider.slideTo(0);
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
    dataSlider.slideTo(1);
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
    anime({
        targets: '.module-3.top',
        translateY: [0, '-30px'],
        translateX: [0, '16px'],
        scaleX: {
            value: 0.97,
            duration: 0
        },
        scaleY: {
            value: 0.98,
            duration: 0,
        },
        rotate: '-0.28deg',
        easing: 'linear',
        duration: 100,
    })
    anime({
        targets: '.module-3._right',
        translateY: [0, '-32px'],
        translateX: [0, '14px'],
        skewX: '-2deg',
        skewY: '-0.3deg',
        scaleX: 0.986,
        easing: 'linear',
        duration: 100,
    })
    anime({
        targets: '.module-3._right2',
        translateY: [0, '-34px'],
        translateX: [0, '17px'],
        scaleX: 0.97,
        easing: 'linear',
        duration: 100,
    })
    anime({
        targets: '.module-3._left',
        translateY: [0, '-34px'],
        translateX: {
            value: ['-2px', '4px'],
            duration: 0,
        } ,
        easing: 'linear',
        duration: 100,
    })
    anime({
        targets: '.module-3._left2',
        translateY: [0, '-34px'],
        translateX: [0, '6px'],
        skewX: '-2deg',
        easing: 'linear',
        duration: 100,
    })
    dataSlider.slideTo(2);
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
            caleX: 1,
        })
        anime({
            targets: '.module-3.top',
            translateY: ['-30px', 0],
            translateX: ['16px', 0],
            scaleX: {
                value: 1,
                duration: 0,
            },
            scaleY: {
                value: 1,
                duration: 0,
            },
            rotate: {
                value: 0,
                duration: 0,
            },
            easing: 'linear',
            duration: 100,
        })
        anime({
            targets: '.module-3._right',
            translateY: ['-32px', 0],
            translateX: ['14px', 0],
            skewX: 0,
            skewY: 0,
            scaleX: 1,
            easing: 'linear',
            duration: 100,
        })
        anime({
            targets: '.module-3._right2',
            translateY: ['-34px', 0],
            translateX: ['17px', 0],
            scaleX: 1,
            easing: 'linear',
            duration: 100,
        })
        anime({
            targets: '.module-3._left',
            translateY: ['-34px', 0],
            translateX: {
                value: ['4px', '-1.5px', 0],
                duration: 0,
            },
            easing: 'linear',
            duration: 100,
        })
        anime({
            targets: '.module-3._left2',
            translateY: ['-34px', 0],
            translateX: ['6px', 0],
            skewX: 0,
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
    dataSlider.slideTo(3);
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
    items.forEach(item => item.classList.add('active'));
    dataSlider.slideTo(4);
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
    anime({
        targets: '.module-6.left2',
        translateY: ['112px', '80px'],
        translateX: '-5px',
        easing: 'linear',
        duration: 100,
    })
    dataSlider.slideTo(5);
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

        anime({
            targets: '.module-6.left2',
            translateY: ['80px', '112px'],
            translateX: '-5px',
            easing: 'linear',
            duration: 100,
        })
    }

}