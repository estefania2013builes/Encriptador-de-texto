function mostrarMensajeError(mensaje) {
    document.getElementById('mensajeError').textContent = mensaje;
}

function ocultarMensajeError() {
    document.getElementById('mensajeError').textContent = '';
}

function validarTexto(texto) {
    let verificacion = /^[a-z0-9\s]*$/; 
    return verificacion.test(texto);
}

function encriptarTexto() {
    let texto = document.getElementById('inputText').value;

    if (!validarTexto(texto)) {
        mostrarMensajeError('No se pueden ingresar mayúsculas, acentos ni caracteres especiales.');
        return;
    }

    ocultarMensajeError();

    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    document.getElementById('outputText').value = textoEncriptado;
}

function desencriptarTexto() {
    let texto = document.getElementById('inputText').value;

    if (!validarTexto(texto)) {
        mostrarMensajeError('No se pueden ingresar mayúsculas, acentos ni caracteres especiales.');
        return;
    }

    ocultarMensajeError();

    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    document.getElementById('outputText').value = textoDesencriptado;
}

function copiarTexto() {
    let texto = document.getElementById('outputText');
    texto.select();
    document.execCommand('copy');
    alert('Texto copiado');
}

function limpiarTexto() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
    ocultarMensajeError();
}
