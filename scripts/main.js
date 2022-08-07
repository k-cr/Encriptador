generarTexto()

function generarTexto() {
    var botonCopiar = document.querySelector('#botonCopiar')
    var outputTexto = document.getElementById('conTexto')
    var sinTexto = document.getElementById('sinTexto')
    var inputTexto = document.getElementById('inputTexto').value
    if(inputTexto == '') {
        outputTexto.style.display = 'none'
        sinTexto.style.display = 'block'
        botonCopiar.disabled = true;
    } else {
        outputTexto.style.display = 'block'
        sinTexto.style.display = 'none'
        botonCopiar.disabled = false;
    }
}

function encriptar() {
    var inputTexto = document.getElementById('inputTexto').value
    var encriptado = inputTexto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat')
    var outputTexto = document.getElementById('conTexto')
    outputTexto.value = encriptado
}

function desencriptar() {
    var inputTexto = document.getElementById('inputTexto').value
    var desencriptado = inputTexto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')
    var outputTexto = document.getElementById('conTexto')
    outputTexto.value = desencriptado
}