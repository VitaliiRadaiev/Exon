let $modulesSlider = document.querySelector('.modules__cards-slider');
if($modulesSlider) {
    let dataSlider = new Swiper($modulesSlider, {
        effect: 'flip',

        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: true,
        speed: 800,
    });
}