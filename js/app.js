(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.querySelector(".action").onclick = function() {
        auto();
    };
    function auto() {
        let masCopy = [];
        let quantity_user = document.querySelector(".user-form").value;
        if (quantity_user > 30) alert("Не вводите так много!"); else if ("" == quantity_user || void 0 == quantity_user) alert("Введите какое либо значение"); else {
            let quantity_user_massiv = [];
            let area_rand = [];
            let picture;
            let copyText = "";
            let i = 1;
            let i_new = 1;
            let roles_massiv = [ "Мафия", "Комиссар", "Дон" ];
            let mafia = Math.floor(quantity_user / 4);
            document.querySelector(".card__bodya").innerHTML = "";
            while (roles_massiv.length != mafia + 2) roles_massiv.push("Мафия");
            while (roles_massiv.length != quantity_user) roles_massiv.push("Мирный");
            while (quantity_user_massiv.length != quantity_user) {
                quantity_user_massiv.push(i);
                i += 1;
            }
            let rand;
            for (let counter = 0; counter < quantity_user_massiv.length; counter += 1) {
                rand = Math.floor(Math.random() * quantity_user_massiv.length);
                while (-1 != area_rand.indexOf(rand)) rand = Math.floor(Math.random() * quantity_user_massiv.length);
                if (-1 == area_rand.indexOf(rand)) area_rand.push(rand);
                if ("Мирный" == roles_massiv[rand]) picture = "img/cute-new-born-lamb-bob-van-den-berg-photography.jpg";
                if ("Мафия" == roles_massiv[rand]) picture = "img/1550944291_dobryy-volk-art.jpg";
                if ("Дон" == roles_massiv[rand]) picture = "img/image_562609151347263189912.png";
                if ("Доктор" == roles_massiv[rand]) picture = "img/doc.jpg";
                if ("Комиссар" == roles_massiv[rand]) picture = "img/sher.jpg";
                masCopy = [ ...masCopy, roles_massiv[rand] ];
                let mapnumber = 1;
                let newmassrand = masCopy.map((function(num) {
                    return " " + mapnumber++ + "." + " " + num;
                }));
                document.querySelector(".card__bodya").innerHTML += `\n\t\t\t\t\t\t\t\t\t\t<div class="card__item">\n\t\t\t\t\t\t\t\t\t\t\t<div class="card__picture">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src="${picture}" alt="">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="card__info">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="card__number">${i_new}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="card__name">${roles_massiv[rand]} </div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div >\n`;
                document.querySelector(".button-copy").onclick = function() {
                    copyText = newmassrand;
                    var clipboard = navigator.clipboard;
                    if (void 0 == clipboard) console.log("clipboard is undefined"); else clipboard.writeText(copyText).then((() => {
                        alert("Скопировано");
                    })).catch((err => {
                        alert("Ошыбка");
                    }));
                };
                let tooltip = document.getElementById("myTooltip");
                tooltip.innerHTML = "Cкопировать: " + newmassrand;
                i_new += 1;
            }
            document.querySelector(".card__end").innerHTML = "Веселой вам игры!";
        }
    }
    window["FLS"] = true;
    isWebp();
})();