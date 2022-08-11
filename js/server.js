
const list_title=[
    { 
    title:"Excellence in Travel",
    icon:"icon-paper-plane",
},
    { 
    title:"Discover Best",
    icon:"icon-tag",
},
    { 
    title:"A New Moments of Life",
    icon:"icon-user",
},
    { 
    title:"Joy To Your Journey",
    icon:"icon-support",
},
];


let server_count_js=document.querySelector(".server_count_js");
list_title.forEach(item=>{
if(server_count_js){

    server_count_js.innerHTML+=`
    <div class="col l-3 m-3 c-6">
    <div class="service text_align">
        <div class="service_item">
            <span class="${item.icon}"></span>
            <h3>${item.title}</h3>
        </div>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.</p>
    </div>
    </div>`;
}

})