document.addEventListener("DOMContentLoaded", function () {
    const formContacto = document.getElementById("form-contacto");

    if (formContacto) {
        formContacto.addEventListener("submit", function (e) {
            e.preventDefault(); // Detiene el envío del formulario

            // 1. Obtener los campos del formulario
            const inputNombre = document.getElementById("nombre");
            const inputCorreo = document.getElementById("correo");
            const inputComentario = document.getElementById("comentario");

            // 2. Limpiar mensajes de error previos
            const erroresPrevios = document.querySelectorAll(".msj-error");
            for (let i = 0; i < erroresPrevios.length; i++) {
                erroresPrevios[i].remove();
            }

            let esValido = true;

            // Función para insertar el mensaje de error debajo del campo correspondiente
            function mostrarError(inputElemento, mensaje) {
                const pError = document.createElement("p");
                pError.className = "msj-error";
                pError.textContent = mensaje;
                pError.style.color = "red";
                pError.style.fontSize = "0.85em";
                pError.style.marginTop = "2px";
                pError.style.marginBottom = "8px";
                inputElemento.insertAdjacentElement("afterend", pError);
            }

            // 3. Validar Nombre (Obligatorio, Máximo 100 caracteres)
            const nombre = inputNombre.value.trim();
            if (nombre === "") {
                mostrarError(inputNombre, "El nombre es obligatorio.");
                esValido = false;
            } else if (nombre.length > 100) {
                mostrarError(inputNombre, "El nombre no puede superar los 100 caracteres.");
                esValido = false;
            }

            // 4. Validar Correo (Opcional, Máximo 100 caracteres, Dominios permitidos)
            const correo = inputCorreo.value.trim();
            if (correo.length > 100) {
                mostrarError(inputCorreo, "El correo no puede superar los 100 caracteres.");
                esValido = false;
            } else if (correo !== "") {
                if (!correo.endsWith("@duoc.cl") && !correo.endsWith("@profesor.duoc.cl") && !correo.endsWith("@gmail.com")) {
                    mostrarError(inputCorreo, "El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com.");
                    esValido = false;
                }
            }

            // 5. Validar Comentario (Obligatorio, Máximo 500 caracteres)
            const comentario = inputComentario.value.trim();
            if (comentario === "") {
                mostrarError(inputComentario, "El comentario es obligatorio.");
                esValido = false;
            } else if (comentario.length > 500) {
                mostrarError(inputComentario, "El comentario no puede superar los 500 caracteres.");
                esValido = false;
            }

            // 6. Si todas las reglas se cumplen, mostrar alerta y limpiar formulario
            if (esValido) {
                alert("¡Mensaje enviado con éxito!");
                formContacto.reset();
            }
        });
    }
});