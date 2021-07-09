const time = window.document.getElementById("time");
const saves = window.document.getElementById("saves");
let s = 00;
let min = 00;
let mil = 00;
let interval;
let item = 0;
let timeguard = [];
let stats;
let iten_s;
let loade;

function save() {

    item++;
    const salvo = document.createElement("option");
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

    let ss, smin, smil;
    ss = String(s);
    smin = String(min);
    smil = String(mil);
    let z = "";
    let x = "";
    let y = "";

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
        guard()
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
    if (vs == "") { alert('ERRO NENHUM VALOR SELECIONADO') } else {
        window.document.getElementById("button-main").innerHTML = "iniciar";
        window.document.getElementById("button-main").value = "i";
        clearInterval(interval);
        time.value = vs;
        var separator = vs.split(":");
        min = separator[0];
        s = separator[1];
        mil = separator[2] - 1;
        temp(min, s, mil);

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

}

function guard() {

    timeguard[item] = time.value;


    localStorage.setItem(stats, JSON.stringify(timeguard));


}

function load() {
    loade = JSON.parse(localStorage.getItem(stats));
    if (loade === null) {} else {
        for (let i in loade) {
            timeguard[i] = loade[i];
            const salvo = document.createElement("option");
            salvo.setAttribute("class", "save");
            salvo.setAttribute("id", `a_${item}`);
            salvo.setAttribute("value", `${loade[i]}`);
            salvo.setAttribute("selected", "");
            saves.appendChild(salvo);
            salvo.innerHTML = `${loade[i]}`;

        }
        item = loade.length;
    }


}

function del() {


    saves.innerText = ""

    localStorage.clear();

    alert('limpo!')


}