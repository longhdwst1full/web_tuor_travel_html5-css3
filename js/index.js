const list_products = [
    {
        image: "image/hero-slider-1.jpg",
        place_item: "Lake Thun",
        location_county: "Switzerland",
        country: "San Francisco.",
    },
    {
        image: "image/hero-slider-2.jpg",
        place_item: "Oia",
        location_county: "Greece",
        country: "Paris.",

    },
    {
        image: "image/hero-slider-3.jpg",
        place_item: "Perhentian Islands",
        location_county: "Malaysia",
        country: "New Zealand.",

    },
    {
        image: "image/hero-slider-4.jpg",
        place_item: "Pragser Wildsee",
        location_county: "Italy",
        country: "Maui.",

    },
    {
        image: "image/hero-slider-5.jpg",
        place_item: "San Francisco, United States",
        location_county: "United States",
        country: "London.",

    },
];
const arra_img = ["image/hero-slider-1.jpg", "image/hero-slider-2.jpg", "image/hero-slider-3.jpg", "image/hero-slider-4.jpg", "image/hero-slider-5.jpg"];
const list_country = ["San Francisco.", " Paris.", " New Zealand.", " Maui.", " London."];
let current_index = 0;

let banner_img = document.querySelector(".banner_img img");
let popular_visit_show = document.querySelector(".swiper-wrapper");
let show_place_count_js = document.querySelector(".show_place-count_js");


list_products.forEach((item, index) => {
    if (popular_visit_show) {
        popular_visit_show.innerHTML += `
        <div class="show_img swiper-slide">
        <img src="${item.image}" alt="">
        <div class="bg_show"></div>
        <div class="show_place">
            <h3>${item.place_item}</h3>
            <span class="location">${item.location_county}</span>
        </div>
    </div>
        `;
    }
})

function slide_show_next() {
    if (current_index == arra_img.length - 1) {
        current_index = -1;

    }
    current_index++;
    banner_img.src = arra_img[current_index];
    show_place_count_js.innerHTML = list_country[current_index];
}
if (banner_img) {
    setInterval("slide_show_next()", 2000);

}



let slider_swiper1 = document.querySelector(".slide-content");
if (slider_swiper1) {
    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
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
            650: {
                slidesPerView: 2,
            },
            1023: {
                slidesPerView: 3,
            },
        },
    });
}


// count number homed
let number_count_home = document.querySelectorAll(".number_run");
if(number_count_home){
number_count_home.forEach(item => {
    count_up_number(item);
})
}
function count_up_number(element) {
    let count_finish = parseInt(element.innerText);
    let count = 0;
    let time = 800;
    let stept = count_finish / time;
    let counting = setInterval(function () {
        count += stept;
        if (count > count_finish) {
            clearInterval(counting);
            element.innerText = count_finish;
        }
        else {
            element.innerText = Math.round(count)
        }
    }, 1.5)
}
