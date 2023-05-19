const tipoDeDocumento = document.getElementById("inputTipoDeDocumento")
const numeroDeDocumento = document.getElementById("inputNumeroDeDocumento")
const buttonEnviar = document.getElementById("buttonEnviar")



tipoDeDocumento.addEventListener("change", () => {
    if (tipoDeDocumento.value !== "1") {
        // Restablecer estilo y disponibilidad del botón de envío
        numeroDeDocumento.removeAttribute("style");
        buttonEnviar.removeAttribute("disabled");
    }
});

numeroDeDocumento.addEventListener("input", () => {
    console.log("aaaa")
    if (tipoDeDocumento.value == "1") {
        let input = numeroDeDocumento.value;
        const pattern = /^\d+-\d{1}$/;
        if (pattern.test(input)) {
            // Número de documento válido
            buttonEnviar.removeAttribute("disabled");
            numeroDeDocumento.removeAttribute("style");
        } else {
            // Número de documento inválido
            buttonEnviar.setAttribute("disabled", "true");
            numeroDeDocumento.style.border = "1px solid red";
            numeroDeDocumento.style.backgroundColor = "rgba(251, 54, 54, 0.778)";
        }
    }
});