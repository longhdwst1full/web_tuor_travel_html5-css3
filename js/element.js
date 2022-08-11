let show_detal_desc = document.querySelectorAll(".collapse");
console.log(show_detal_desc)

let btn = document.querySelectorAll(".accordion-item .btn");
let btn_hidden = document.querySelector(".collapse.hidden");
console.log(btn)


btn.forEach((tab, index) => {
    tab.onclick = function () {
        const panes = show_detal_desc[index];

        document.querySelector(".collapse.hidden").classList.remove("hidden");

        document.querySelector(".btn.hidden").classList.remove("hidden")


        this.classList.add("hidden")
        panes.classList.add("hidden")

    }
})