// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptar() {
    var mensaje = document.getElementById("ingreso").value;
    var mensajeEncriptado = "";
    for (var i = 0; i < mensaje.length; i++) {
        if (mensaje[i] == "e") {
            mensajeEncriptado += "enter";
        } else if (mensaje[i] == "i") {
            mensajeEncriptado += "imes";
        } else if (mensaje[i] == "a") {
            mensajeEncriptado += "ai";
        } else if (mensaje[i] == "o") {
            mensajeEncriptado += "ober";
        } else if (mensaje[i] == "u") {
            mensajeEncriptado += "ufat";
        } else {
            mensajeEncriptado += mensaje[i];
        }
    }
    document.getElementById("egreso").innerHTML = mensajeEncriptado;
}

// document.getElementById('encriptar').addEventListener('click', encriptar);

function copiar() {
    var copyText = document.getElementById("egreso").value;
    // copyText.select();
    // copyText.setSelectionRange(0, 99999);
    // navigator.clipboard.writeText(copyText.value);
    navigator.clipboard.writeText(copyText);
}

// document.querySelector('#egreso').addEventListener('click', copiar);


function desencriptar() {
    var mensaje = document.getElementById("ingreso").value;
    // var mensajedesEncriptado = "";
    if (mensaje.includes("enter")) {
        mensaje = mensaje.replace(/enter/g, "e");
    };
    if (mensaje.includes("imes")) {
        mensaje = mensaje.replace(/imes/g, "i");
    };
    if (mensaje.includes("ober")) {
        mensaje = mensaje.replace(/ober/g, "o");
    };
    if (mensaje.includes("ufat")) {
        mensaje = mensaje.replace(/ufat/g, "u");
    };
    if (mensaje.includes("ai")) {
        mensaje = mensaje.replace(/ai/g, "a");
    };
    
    document.getElementById("egreso").innerHTML = mensaje;
}

// document.getElementById('desencriptar').addEventListener('click', desencriptar);