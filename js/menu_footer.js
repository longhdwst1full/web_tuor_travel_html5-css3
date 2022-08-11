let nav_menu = document.querySelector('.nav');
let footerJs = document.querySelector(".footer");



nav_menu.innerHTML = `
 <div class="col nav_logo">
     <a href="index.html">
     <img src="https://vac.vitravel.com.vn//Web/Resources/Uploaded/1/images/Logo-Vitravel_Header.png" alt=""></a>
 </div>
 <div>
 <ul class="col nav_menu">
     <li class="active">
         <a href="index.html" class="">Trang chủ</a></li>
     <li class="">
         <a href="#" class="">Tour</a>
         <ul class="dropdown">
             <li>
                 <a href="elements.html">Liên quan

                 </a>
             </li>
             <li>
                 <a href="./tour_trong_nuoc.html">Trong nước</a>
             </li>
             <li class="">
                 <a href="./tour_quocte.html">Quốc tế</a>
                 <ul class="sub_menu">
                     <li><a href="#">Sub Menu One</a></li>
                     <li><a href="#">Sub Menu Two</a></li>
                     <li><a href="#">Sub Menu Three</a></li>
                 </ul>
             </li>
             
         </ul>
     </li>
     <li><a href="./tintuc.html" class="">Tin Tức</a></li>
     <li><a href="./about.html" class="">Giới Thiệu</a></li>
     <li><a href="./contact.html" class="">Liên Hệ</a></li>
     <li><a href="./sign_in.html" class="">Đăng Nhập</a></li>
     <li><a href="./sign_up.html" class="">Đăng kí</a></li>

 </ul>
 <div class="icon_menu">
 <i class='bx bx-menu'></i>
 </div>
 </div>
 `;



footerJs.innerHTML = `

<div class=" grid wide row services_count">
    <div class="col l-4 m-4 c-12">
        <div class="widget">
          <h3 class="heading">  <a href="index.html">
     <img src="https://vac.vitravel.com.vn//Web/Resources/Uploaded/1/images/Logo-Vitravel_Header.png" alt=""></a>
     </h3>
        </div>
        <div class="widget">
        <h4>Kết Nối chúng tôi</h4>
            <ul class="row icon_contac">
                <li><a href="#"><i class='bx bxl-twitter'></i></a></li>
                <li><a href="#"><i class='bx bxl-instagram-alt'></i></a></li>
                <li><a href="#"><i class='bx bxl-facebook-circle'></i></a></li>
                <li><a href="#"><i class='bx bxl-linkedin-square'></i></a></li>
                <li><a href="#"><i class='bx bxl-dribbble'></i></a></li>
                <li><a href="#"><i class='bx bxl-pinterest'></i></a></li>
                <li><a href="#"><i class='bx bxl-apple'></i></a></li>
                <li><a href="#"><i class='bx bxl-google-plus-circle'></i></a></li>
            </ul>
        </div>
    </div>
    <div class="col l-2 m-3 c-12">
        <div class="widget">
            
        </div>
    </div>
    <div class="col l-2 m-2 c-12">
        <div class="widget">
            <h3 class="heading">Dịch vụ</h3>
            <ul class="links list-unstyled">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Giới thiệu </a></li>
                <li><a href="#">Liên hệ</a></li>
            </ul>
        </div>
    </div>
    <div class="col l-3 m-3 c-12 mobie_item">
        <div class="widget">
            <h3 class="heading">Hỗ trợ khách hàng</h3>
            <ul class="">
                <li class="email"><a href="#">longhd@fpt.vn</a></li>
                <li class="phone"><a href="#">+1 222 212 3819</a></li>
                <li class="address"><a href="#">Số 10 Trịnh Văn Bô - Bắc Từ Liêm -Hà Nội</a></li>
            </ul>
        </div>
    </div>
</div>
<p class="wide text_align services_count">
Bản quyền © 2022. Đã đăng ký Bản quyền. - Được thiết kế với tình yêu bởi <a href="#">Hoàng Đình Long</a>
</p>

`;

let li_a_active = document.querySelectorAll("ul.nav_menu>li");
li_a_active.forEach(function (item) {
    item.addEventListener("click", function (e) {
        remove_item()
        // e.preventDefault();
        this.classList.add("active");
    })




})

const remove_item = () => {
    li_a_active.forEach(li_a => {
        li_a.classList.remove("active")

    })
}