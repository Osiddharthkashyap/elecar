document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.cars')) {
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
    }
    const filters = document.querySelectorAll(".feature-filter__option");
    const cars = document.querySelectorAll(".feature-filter__results .car[data-brand]");

    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            filters.forEach(other => other.classList.remove("active"));
            filter.classList.add("active");

            const selectedBrand = filter.getAttribute("data-feature-filter-brand");

            cars.forEach(car => {
                const carBrand = car.getAttribute("data-brand");
                const shouldShow = selectedBrand === "all" || carBrand === selectedBrand;
                car.classList.toggle("hide", !shouldShow);
            });
        });
    });
});

const navbarLinks = document.querySelectorAll(".nav-link");
navbarLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);

        const targetElement = document.getElementById(targetId);
        if (targetElement)
            targetElement.scrollIntoView({ behavior: "smooth" });
    });
});
