document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.cars', {
        slidesPerView: "auto",      
        centeredSlides: true,       
        spaceBetween: 24,           
        loop: true,                 
        grabCursor: true,           
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        breakpoints: {
            992: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 30,
            }
        }
    });
});