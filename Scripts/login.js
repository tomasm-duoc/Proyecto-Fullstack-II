document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("form-login");

    if (formLogin) {
        formLogin.addEventListener("submit", function (e) {
            e.preventDefault(); // Detiene el envío predeterminado

            // 1. Obtener los elementos de los inputs
            const inputEmail = document.getElementById("email-login");
            const inputPass = document.getElementById("pass-login");

            // 2. Limpiar errores previos si existen
            const erroresPrevios = document.querySelectorAll(".msj-error");
            for (let i = 0; i < erroresPrevios.length; i++) {
                erroresPrevios[i].remove();
            }

            let esValido = true;

            // Función para renderizar errores justo debajo de cada input
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

            // 3. Validar Correo (Obligatorio, Máx 100 caracteres, Dominios permitidos)
            const email = inputEmail.value.trim();
            if (email === "") {
                mostrarError(inputEmail, "El correo electrónico es obligatorio.");
                esValido = false;
            } else if (email.length > 100) {
                mostrarError(inputEmail, "El correo no puede superar los 100 caracteres.");
                esValido = false;
            } else if (!email.endsWith("@duoc.cl") && !email.endsWith("@profesor.duoc.cl") && !email.endsWith("@gmail.com")) {
                mostrarError(inputEmail, "El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com.");
                esValido = false;
            }

            // 4. Validar Contraseña (Obligatoria, entre 4 y 10 caracteres)
            const pass = inputPass.value;
            if (pass === "") {
                mostrarError(inputPass, "La contraseña es obligatoria.");
                esValido = false;
            } else if (pass.length < 4 || pass.length > 10) {
                mostrarError(inputPass, "La contraseña debe tener entre 4 y 10 caracteres.");
                esValido = false;
            }

            // 5. Si no hay errores, mostrar confirmación
            if (esValido) {
                alert("¡Inicio de sesión exitoso!");
                formLogin.reset();
            }
        });
    }
});