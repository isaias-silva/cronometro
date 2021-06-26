var time = window.document.getElementById("time");
var saves = window.document.getElementById("saves");
var s = 00;
var min = 00;
var mil = 00;
var interval;
var item = 0;

function save() {
    item++;
    var salvo = document.createElement("option");
    salvo.setAttribute("class", "save");
    salvo.setAttribute("id", `a_${item}`);
    salvo.setAttribute("value", `${time.value}`);
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
        s = 00;
    }

    var ss, smin, smil;
    ss = String(s);
    smin = String(min);
    smil = String(mil);
    var z = "";
    var x = "";
    var y = "";

    if (smin.length < 2) {
        z = 0;
    }

    if (ss.length < 2) {
        x = 0;
    }

    if (smil.length < 2) {
        y = 0;
    }

    time.value = `${z}${min}:${x}${s}:${y}${mil}`;

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

function carregar(vs) {

    window.document.getElementById("button-main").innerHTML = "iniciar";
    window.document.getElementById("button-main").value = "i";
    clearInterval(interval);
    time.value = vs;
    var separator = vs.split(":");
    min = separator[0];
    s = separator[1];
    mil = separator[2] - 1;
    temp(min, s, mil);
}