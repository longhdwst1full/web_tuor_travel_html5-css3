
let slider_swiper = document.querySelector(".slide-content");
if (slider_swiper) {
    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
    });
}
const array_list_img_about = ["./image/slider-1.jpg", "./image/slider-2.jpg", "./image/slider-3.jpg", "./image/slider-4.jpg", "./image/slider-5.jpg",
];
let silder_content_about = document.querySelector(".slider_content img");
let count = 0;
if (silder_content_about) {

    setInterval("slider_about(array_list_img_about)", 2000)
}
function slider_about(array) {
    if (count == array.length - 1) {
        count = -1;
    }
    count++;
    silder_content_about.src = array[count];
}
