(() => {
    "use strict";
    ! function(t) {
        let e = new Image;
        e.onload = e.onerror = function() {
            ! function(t) {
                let e = !0 === t ? "webp" : "no-webp";
                document.documentElement.classList.add(e)
            }(2 == e.height)
        }, e.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }();
    let t = new Date,
        e = t.getTime(),
        n = ["Янв.", "Февр.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Ноя.", "Дек."],
        i = document.querySelectorAll(".month__item"),
        o = t.getMonth(),
        s = t.getDate(),
        a = s >= 10 ? o + 1 : o;
    for (let t = 0; t < 12; t++) 12 == a && (a = 0), i[t].innerText = n[a], a++, console.log(s);
    let l = t.getDay(),
        r = 1 == l ? 350 : 2 == l ? 351 : 3 == l ? 352 : 4 == l ? 353 : 5 == l ? 354 : 6 == l ? 355 : 356,
        c = document.querySelector(".contribution__list");
    for (let t = r; t >= 0; t--) {
        let n = document.createElement("div");
        n.classList.add("list__item"), n.setAttribute("onclick", "checkStatus(this)"), n.setAttribute("id", `list-item${t}`);
        let i = new Date(e - 864e5 * t),
            o = i.getDay(),
            s = 1 == o ? "Понед." : 2 == o ? "Вторник" : 3 == o ? "Среда" : 4 == o ? "Четверг" : 5 == o ? "Пятница" : 6 == o ? "Суббота" : "Воскр.",
            a = i.getMonth(),
            l = 0 == a ? "Январь" : 1 == a ? "Февраль" : 2 == a ? "Март" : 3 == a ? "Апрель" : 4 == a ? "Май" : 5 == a ? "Июнь" : 6 == a ? "Июль" : 7 == a ? "Август" : 8 == a ? "Сентябрь" : 9 == a ? "Октябрь" : 10 == a ? "Ноябрь" : "Декабрь";
        n.setAttribute("date", `${s}, ${l} ${i.getDate()}, ${i.getFullYear()}`), fetch("https://dpg.gg/test/calendar.json").then((t => t.json())).then((t => {
            let e = `${i.getFullYear()}-${(i.getMonth()+1).toString().length<2?"0"+(i.getMonth()+1):i.getMonth()}-${i.getDate().toString().length<2?"0"+i.getDate():i.getDate()}`,
                o = Object.keys(t).indexOf(e) > -1 ? t[Object.keys(t)[Object.keys(t).indexOf(e)]] : 0;
            n.setAttribute("contributions", `${o}`), c.appendChild(n), n.style.background = n.getAttribute("contributions") >= 30 ? "rgba(37, 78, 119, 1)" : n.getAttribute("contributions") >= 20 ? "rgba(82, 123, 160, 1)" : n.getAttribute("contributions") >= 10 ? "rgba(127, 168, 201, 1)" : n.getAttribute("contributions") >= 1 ? "rgba(172, 213, 242, 1)" : "rgba(237, 237, 237, 1)"
        }))
    }
    window.checkStatus = t => {
        let e = document.createElement("div");
        e.classList.add("list__item-status"), e.setAttribute("onmouseout", "closeStatus(this)");
        let n = document.createElement("font");
        n.classList.add("item-status__data"), n.innerText = t.getAttribute("date");
        let i = document.createElement("font");
        i.classList.add("item-status__contrib"), i.innerText = `${t.getAttribute("contributions")} contributions`, e.appendChild(i), e.appendChild(n), t.appendChild(e)
    }, window.closeStatus = t => {
        t.parentNode.removeChild(t)
    }
})();