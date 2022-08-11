let category=document.querySelector(".category");

category.innerHTML=`<h2>Danh muc sản phẩm</h2>
<ul>
    <li><a href="">Trang chủ</a></li>
    <li><a href="">Du lịch nước ngoài</a></li>
    <li><a href="">Du lịch trong nước</a></li>
    <li><a href="">Du lịch Khách sạn </a></li>
</ul>

<div class="fillter">
    <h2>Lọc theo giá</h2>
    <input type="range">
    <div class="fillter_price">

        <button class="btn_fillter">Lọc</button>
        <span class="fillter_price_">
            Giá từ 4,099,000d-10,999,000đ
        </span>
    </div>

</div>
<div class="place_action">
    <h2>Nơi khởi hành</h2>
    <ul>
        <li><a href="">Hà Nội</a></li>
        <li><a href="">Tp Hồ Chí Minh</a></li>
    </ul>
</div>
<div class="day_number">
    <h2>Số ngày</h2>
    <select name="" id="">
        <option value="">Mời chọn số ngày</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
    </select>
</div>`

let category_mb=document.querySelector(".category_mb");
let category_show_mb=document.querySelector(".category_show_mb");

    category_show_mb.innerHTML= ` <div class="col l-3 m-3 c-0 category1">
    <h2>Danh muc sản phẩm</h2>
    <ul>
        <li><a href="">Trang chủ</a></li>
        <li><a href="">Du lịch nước ngoài</a></li>
        <li><a href="">Du lịch trong nước</a></li>
        <li><a href="">Du lịch Khách sạn </a></li>
    </ul>
    
    <div class="fillter">
        <h2>Lọc theo giá</h2>
        <input type="range">
        <div class="fillter_price">
    
            <button class="btn_fillter">Lọc</button>
            <span class="fillter_price_">
                Giá từ 4,099,000d-10,999,000đ
            </span>
        </div>
    
    </div>
    <div class="place_action">
        <h2>Nơi khởi hành</h2>
        <ul>
            <li><a href="">Hà Nội</a></li>
            <li><a href="">Tp Hồ Chí Minh</a></li>
        </ul>
    </div>
    <div class="day_number">
        <h2>Số ngày</h2>
        <select name="" id="">
            <option value="">Mời chọn số ngày</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
        </select>
        </div>
    </div>`

// category_mb.addEventListener("click", (e)=>{
// console.log(e.target);
// show_category()
// })


function show_menu1(){
    category_show_mb.classList.toggle('hidden');
}
function close_menu1(){
    category_show_mb.classList.remove('hidden')
}
category_show_mb.addEventListener('click',(e)=>{
    if(e.target=e.currentTarget){
        show_menu1();
    }
});
category_mb.addEventListener('click',show_menu1);
