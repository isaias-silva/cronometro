var time = window.document.getElementById("time");
var saves = window.document.getElementById("saves");
var s = 0;
var min = 0;
var mil = 0;
var interval;
var a = "";
var b = "";
var c = "";
var item = 0;

function save() {
    item++;
    var salvo = document.createElement("option");
    salvo.setAttribute("class", "save");
    salvo.setAttribute("value", `a_${item}`);
    salvo.setAttribute("value", `a_${item}`);
    salvo.setAttribute("selected", "");
    saves.appendChild(salvo);
    salvo.innerHTML = `${time.value}`;
}

function temp() {
    if (mil > 59) {
        s++;
        mil = 00;
    }
    mil++;
    if (s > 59) {
        min++;
        s = 0;
    }
    if (min < 10) {
        a = 0;
    } else {
        a = "";
    }
    if (s < 10) {
        b = 0;
    } else {
        b = "";
    }
    if (mil < 10) {
        c = 0;
    } else {
        c = "";
    }

    time.value = `${a}${min}:${b}${s}:${c}${mil}`;
}

function main(v) {
    if (v == "i") {
        window.document.getElementById("button-main").innerHTML = "pausar";
        window.document.getElementById("button-main").value = "p";
        interval = setInterval(temp, 16);
    } else if (v == "p") {
        window.document.getElementById("button-main").innerHTML = "iniciar";
        window.document.getElementById("button-main").value = "i";

        clearInterval(interval);
        save();
    } else if (v == "z") {
        time.value = "00:00:00";

        min = 0;
        mil = 0;
        s = 0;
        clearInterval(interval);
        if ((window.document.getElementById("button-main").value = "p")) {
            window.document.getElementById("button-main").innerHTML = "iniciar";
            window.document.getElementById("button-main").value = "i";
        }

    }
}