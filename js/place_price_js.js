const img_place_item_country = [
    {
        image: "image/hero-slider-1.jpg",
        price: 570,
        place_item: "Rialto Mountains",
        country: "Italy",
        title: "Excellence in Travel",
        name: "Excellence in Travel",
       
    },
    {
        image: "image/hero-slider-2.jpg",
        price: 620,
        place_item: "San Francisco",
        country: "United States",
        title: "Discover Best",
        name: "Discover Best",
       
    },
    {
        image: "image/hero-slider-3.jpg",
        price: 750,
        place_item: "Perhentian Islands",
        country: "Malaysia",
        title: "A New Moments of Life",
        name: "A New Moments of Life",
       
    },
    {
        image: "image/hero-slider-4.jpg",
        price: 570,
        place_item: "Lake Thun",
        country: "Switzerland",
        title: "Joy To Your Journey",
        name: "EJoy To Your Journey",
        
    },


];



const list_customer = [
    {
        image: "image/person_1.jpg",
        name: "Hoàng Đình Long",
        desc: " Đồng sáng lập & Giám đốc điều hành",comment:"Tôi rất hài lòng về chuyến du lịch , nhân viên tận tình,chất lượng tua rất tốt",

    },
    {
        image: "image/person_2.jpg",
        name: "Hoàng THị Linh",
        desc: "Trưởng Phòng Quản lí Tour du lịch",comment:"Tôi rất hài lòng về chuyến du lịch , nhân viên tận tình,chất lượng tua rất tốt",
    },
    {
        image: "image/person_3.jpg",
        name: "Hoàng Văn Hạnh",
        desc: " PGD điều hành",
        comment:"Tôi rất hài lòng về chuyến du lịch , nhân viên tận tình,chất lượng tua rất tốt",
    },
    {
        image: "image/person_4.jpg",
        name: "Lê Thị Nhâm",
        desc: " Đồng sáng lập & Giám đốc điều hành",
comment:"Tôi rất hài lòng về chuyến du lịch , nhân viên tận tình,chất lượng tua rất tốt",
    },
];

let place_price_js = document.querySelector(".place_price_js");//file index
let introduce_title = document.querySelector(".introduce_title");


img_place_item_country.forEach(item => {
    if (place_price_js) {
        place_price_js.innerHTML += `
    <div class="col l-3 m-6 c-12 mobie_item">
        <div class="place_detal_item">
            <a href="#" class=""><img src="${item.image}"></a> 
            <p>
            <i class='bx bxs-location-plus icon_location' ></i> ${item.country}
            </p>
             
               
            <div class="item_price">
                <h3><a href="#">${item.place_item}</a></h3>
    
                <p class="price">$${item.price}</p>
            </div>
        </div>
    </div>`
    }
})
function renden_info_place_custom(element) {

}

if (introduce_title) {
    introduce_title.innerHTML = `

    <div class="col l-4 m-4 c-12 tl_mb-100 servers_img">
    <img src="./image/hero-slider-1.jpg" alt="">


</div>

<div class="col l-8 m-8 c-12 tl_mb-100">
    <div class="row">
        <div class="col l-6 m-6 c-6 tl_mb-50">
            <div class="servives_title_taitle">
                <span class="flaticon-house display-4"></span>
                <h3>Căn hộ đẹp</h3>
                <p class="mb-0">Ngay cả Pointing toàn năng cũng không kiểm soát được các văn bản mù quáng.
                </p>
            </div>
        </div>
        <div class="col l-6 m-6 c-6 tl_mb-50">
            <div class="servives_title_taitle">
                <span class="flaticon-mail display-4"></span>
                <h3>Dễ dàng kết nối</h3>
                <p class="mb-0">Ngay cả Pointing toàn năng cũng không kiểm soát được các văn bản mù quáng.
                </p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col l-6 m-6 c-6 tl_mb-50">
            <div class="servives_title_taitle">
                <span class="flaticon-restaurant display-4"></span>
                <h3>Nhà hàng &amp; Quán cà phê</h3>
                <p class="mb-0">Ngay cả Pointing toàn năng cũng không kiểm soát được các văn bản mù quáng.
                </p>
            </div>
        </div>
        <div class="col l-6 m-6 c-6 tl_mb-50">
            <div class="servives_title_taitle">
                <span class="flaticon-phone-call display-4"></span>
                <h3>Hỗ trợ 24/7</h3>
                <p class="mb-0">Ngay cả Pointing toàn năng cũng không kiểm soát được các văn bản mù quáng.
                </p>
            </div>
        </div>
    </div>
</div>             
`}




/*file element customer_team_js  */

let customer_team_js = document.querySelector(".customer_team_js");
let services_place_price_js = document.querySelector(".services_place_price_js");


function show_customer_detaiPlace(element, array) {
    array.forEach(item => {
        if (element) {
            item.desc==true?item.desc:"";
            item.comment==true?item.comment:"";
            element.innerHTML += `
           
            <div class="col l-3 m-6 c-12 mobie_item">
            <div class="place_detal_item">
                <a href="#"><img src="${item.image}"></a>
    
                <div class="item_price">
                    <h3><a href="#">${item.name}
                        </a></h3>
                    <p class="">
                   ${item.desc}
                  
                    </p>
                </div>
            </div>
        </div>
        
            `;
        }

    })
}
show_customer_detaiPlace(customer_team_js, list_customer)
show_customer_detaiPlace(services_place_price_js, img_place_item_country)





let slide_custumer_server_js1 = document.querySelector(".slide_custumer_server_js1.swiper-wrapper ");
list_customer.forEach(item => {


    if (slide_custumer_server_js1) {
        slide_swipe();
        slide_custumer_server_js1.innerHTML += `     
    <div class="info_customer_datel swiper-slide">
          <div class="info_img">
                            <img src="${item.image}">
                            </div>
          <h3 class="name">${item.name}</h3>
          <div class="info_desc">
              <p>“${item.desc}”
              <p style="margin-top:10px;">
              ${item.comment}
              </p>
     </div>
      </div>
    `;
    }
})
function slide_swipe() {


    var swiper = new Swiper(".mySwiper", {




        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },

    });
}