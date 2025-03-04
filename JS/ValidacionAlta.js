document.getElementById("precio").addEventListener("blur", function (e) {
    let value = e.target.value.trim();

    value = value.replace(/[^0-9,\.]/g, '');

    if (value.includes(".") && value.includes(",")) {
        value = value.replace(/\./g, "");
    }

    value = value.replace(/([.,])(?=[^.,]*$)/, ",");

    let [integer, decimal] = value.split(",");

    let numericValue = parseFloat((integer || "0") + "." + (decimal || "00"));

    if (numericValue > 999999.99) {
        alert("El precio no puede ser mayor a $999.999,99");
        numericValue = 999999.99;
    } else if (numericValue < 1) {
        alert("El precio debe ser al menos $1");
        numericValue = 1.00;
    }

    let formattedValue = numericValue.toFixed(2).replace(".", ",");
    formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    e.target.value = `$ ${formattedValue}`;
});


function actualizarContadorCorto() {
    let campoDescCorta = document.getElementById("desc_corta");
    let contadorCorto = document.getElementById("contadorCorto");

    let numCaracteres = campoDescCorta.value.length;

    contadorCorto.textContent = numCaracteres + "/100";

    if (numCaracteres > 100) {
        campoDescCorta.value = campoDescCorta.value.substring(0, 100);
        contadorCorto.textContent = "100/100";
    }
}

function actualizarContadorLargo() {
    let campoDescLarga = document.getElementById("desc_largo");
    let contadorLargo = document.getElementById("contadorLargo");

    let numCaracteres = campoDescLarga.value.length;

    contadorLargo.textContent = numCaracteres + "/400";

    if (numCaracteres > 400) {
        campoDescLarga.value = campoDescLarga.value.substring(0, 400);
        contadorLargo.textContent = "400/400";
    }
}

function ajustarAltura() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
}

function validarTexto(textarea) {
    let pattern = /^[A-Za-zÁÉÍÓÚÜáéíóúü0-9\s.,;:!#()&=+%-]*$/;
    if (!pattern.test(textarea.value)) {
        alert("El texto contiene caracteres no permitidos.");
        textarea.value = textarea.value.replace(/[^A-Za-zÁÉÍÓÚÜáéíóúü0-9\s.,;:!#()&=+%-]/g, '');
    }
}

document.getElementById("desc_corta").addEventListener("input", ajustarAltura);
document.getElementById("desc_largo").addEventListener("input", ajustarAltura);

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        let fechaDesde = document.getElementById("fecha_desde").value;
        let fechaHasta = document.getElementById("fecha_hasta").value;

        if (fechaDesde === "" || fechaHasta === "") {
            alert("Debe completar ambos campos de fecha.");
            event.preventDefault();
            return;
        }

        let fechaDesdeObj = new Date(fechaDesde);
        let fechaHastaObj = new Date(fechaHasta);

        if (fechaHastaObj < fechaDesdeObj) {
            alert("La fecha hasta no puede ser menor que la fecha desde.");
            event.preventDefault();
        }
    });
});

document.querySelector("form").addEventListener("submit", function (event) {
    let archivoInput = document.getElementById("archivo");

    if (archivoInput.files.length === 0) {
        alert("Debe subir un archivo antes de enviar el formulario.");
        event.preventDefault();
    }
});
