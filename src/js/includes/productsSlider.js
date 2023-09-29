import Swiper, { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const productsSlider = () => {
    new Swiper('.products-slider__swiper', {
        modules: [Navigation, Scrollbar],
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        navigation: {
            nextEl: '.products-slider__next',
            prevEl: '.products-slider__prev',
        },
        breakpoints: {
            0: {
                scrollbar: {
                    el: ".swiper-scrollbar",
                    hide: false,
                    draggable: true,
                },
                loop: false,
                centeredSlides: false,
            },
            768: {
                slidesPerView: 1,
            },
        },
    });
}

export default productsSlider;