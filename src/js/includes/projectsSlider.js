import Swiper, { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

const projectsSlider = () => {
    new Swiper('.projects-slider', {
        modules: [Scrollbar],
        spaceBetween: 30,
        slidesPerView: 2,
        loop: false,
        centeredSlides: false,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1.5,
            },
            1200: {
                slidesPerView: 2,
            },
        },
    });
}

export default projectsSlider;