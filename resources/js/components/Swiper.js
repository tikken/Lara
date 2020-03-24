window.onload = function () {

    var mainSwiper = new Swiper('.best_printers', {
        pagination: {
            el: '.swiper-pagination',
        },
        direction: 'vertical',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    var feedBackSwiper = new Swiper('.feedback_swiper', {
        containerClass: 'owl_swiper',
        activeSlideKey: '5',
        // centeredSlides: true,
        // loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            }
        }
    });

    var mainSwiper = new Swiper('.main_slider', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    var salesSwiper = new Swiper('.sales_slider', {
        slidesPerView: 1
    });

    var mySwiper = new Swiper ('.owl_swiper', {
        containerClass: 'owl_swiper',
        activeSlideKey: '5',
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            }
        }
    })
};
