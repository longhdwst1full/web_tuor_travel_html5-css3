let contact_info=document.querySelector(".contact_info");
if(contact_info){
contact_info.innerHTML=`<div class="grid wide">
<div class="row services_count">
    <div class="col l-12 text_align contact_info_title">
        <h2 class="">Cho phép bạn khám phá những điều tốt nhất. Liên lạc với chúng tôi ngay</h2>
        <p class="">Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Excepturi, fugit?</p>
        <button class="btn_get_datel"><a href="booking.html">Liên hệ ngay</a>
        </button>
    </div>
</div>
</div>`;
}




// phần có video



let video_item =document.querySelector(".video_item ");
if(video_item ){
    video_item .innerHTML=`
    
    <div class="row">
        <div class="col l-6">
            <figure class="img-play-video">
                <a id="play-video" class="video-play-button" href="https://www.youtube.com/watch?v=mwtbEGNABWU" data-fancybox="">
                    <span></span>
                </a>
                <img src="image/hero-slider-2.jpg" alt="Image" class="img-fluid rounded-20">
            </figure>
        </div>

        <div class="col l-5 video_right_datel ">
            <h2 class="section-title">Hãy đi tham quan nào !</h2>
            <p>Với các nguồn lực dồi dào tài chính vững mạnh, kinh nghiệm và uy tín trong lĩnh vực dịch vụ du lịch, mối quan hệ bền vững với các đối tác lớn khắp nơi trên thế giới, đội ngũ nhân viên năng động và chuyên nghiệp, <strong>ITRAVEL</strong> luôn nỗ lực mang đến cho khách hàng những sản phẩm du lịch giá trị nhất.</p>

            <p class="mb-4"><strong>ITRAVEL</strong> luôn coi trọng ý thức trách nhiệm của doanh nghiệp đối với cộng đồng và môi trường, phát triển các sản phẩm và hoạt động kinh doanh trên tiêu chí hài hòa lợi ích doanh nghiệp với cộng đồng xã hội, thân thiện môi trường thiên nhiên.</p>

            <dl class="list_item">
                <li>Hoạt động vui chơi giải trí ngoài trời</li>
                <li>Các hãng hàng không</li>
                <li>Cho thuê ô tô</li>
                <li>Tàu hàng</li>
                <li>Nhiều khách sạn</li>
                <li>Đường sắt</li>
                <li>Bảo hiểm</li>
                <li>Gói du lịch</li>
                <li>Bảo hiểm du lịch</li>
                <li>Sách hướng dẫn</li>
            </dl>

            <button class="btn_start">Bắt Đầu</button>


        </div>
    </div>

    `
}

