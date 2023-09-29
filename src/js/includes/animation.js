import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "smoothscroll-for-websites/SmoothScroll"

const animation = () => {
    gsap.registerPlugin(ScrollTrigger);
    
    SmoothScroll({
        stepSize: 50,
        animationTime: 600,
    });

    // const tl = gsap.timeline();

    // tl.set(".preloader__img", {
    //     display: "block",
    // });
    // tl.from(".preloader__img", 1, {
    //     opacity: 0,
    //     ease: "expo.inOut",
    // });
    // tl.to(".preloader", 1, {
    //     yPercent: -100,
    //     ease: "expo.inOut",
    // });
    // tl.set(".preloader", {
    //     display: "none",
    //     onComplete: startScrollTrigger,
    // });
    // tl.set(".header",{clearProps:"transition"});
	// tl.from(".header", 1, {
	// 	opacity: 0,
	// 	y: -200,
	// 	ease: "expo.easeInOut"
	// });


    // function startScrollTrigger() {
        gsap.utils.toArray('.animation-fade').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-down').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        y: 30,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-up').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        y: -30,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-left').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        x: -70,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-right').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        x: 70,
                        ease: "back.out"
                    });
                }
            });
        });
    // }
}

export default animation;