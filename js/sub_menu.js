
let subMenu_hiden_mobie=document.querySelector(".subMenu_hiden_mobie");



subMenu_hiden_mobie.innerHTML=
`
<div class="subMenu_mobie_content">

            <ul class="nav_menu_mobie">
                <li class="active">
                    <a href="index.html" class="">Trang chủ</a>
                </li>
                <li class="">
                    <a href="#" class="">Tour</a>
                    <ul class="dropdown_mobie">
                        <li>
                            <a href="elements.html">Liên quan
                            </a>
                        </li>
                        <li>
                            <a href="./tour_trong_nuoc.html">Trong Nước</a>
                        </li>
                        <li class="">
                            <a href="./tour_quocte.html">Quốc tế</a>
                            
                        </li>
                       
                    </ul>
                </li>
                <li><a href="./tintuc.html" class="">Tin Tức</a></li>
                <li><a href="./about.html" class="">Giới Thiệu</a></li>
                <li><a href="./contact.html" class="">Liên hệ </a></li>
                <li><a href="./sign_in.html" class="">Đăng nhập</a></li>
                <li><a href="./sign_up.html" class="">Đăng Kí</a></li>

            </ul>
        </div>
`


let click_icon_menu= document.querySelector('.icon_menu');

function show_menu(){
    subMenu_hiden_mobie.classList.toggle('hidden');
}
function close_menu(){
    subMenu_hiden_mobie.classList.remove('hidden')
}
subMenu_hiden_mobie.addEventListener('click',(e)=>{
    if(e.target=e.currentTarget){
        show_menu();
    }
});
click_icon_menu.addEventListener('click',show_menu);
