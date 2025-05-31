document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.getElementById('registroForm');
    const btnCancelar = document.getElementById('btnCancelar');
    const btnGuardar = document.getElementById('btnGuardar');

    const nombreCompletoInput = document.getElementById('nombreCompleto');
    const errorNombreCompleto = document.getElementById('errorNombreCompleto');

    const rutInput = document.getElementById('rut');
    const errorRut = document.getElementById('errorRut');

    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    const errorFechaNacimiento = document.getElementById('errorFechaNacimiento');

    const curriculumVitaeInput = document.getElementById('curriculumVitae');
    const errorCurriculumVitae = document.getElementById('errorCurriculumVitae');

    const emailInput = document.getElementById('email');
    const errorEmail = document.getElementById('errorEmail');

    const generoSelect = document.getElementById('genero');
    const errorGenero = document.getElementById('errorGenero');

    const contrasenaInput = document.getElementById('contrasena');
    const errorContrasena = document.getElementById('errorContrasena');

    const repetirContrasenaInput = document.getElementById('repetirContrasena');
    const errorRepetirContrasena = document.getElementById('errorRepetirContrasena');
 
    const validaciones = {
        nombreCompleto: {
            required: true,
            message: 'El nombre completo es requerido.'
        },
        rut: {
            required: true,
            message: 'El Rut es requerido y debe ser válido (Ej: 12345678-9).'
        },
        fechaNacimiento: {
            required: false,
            message: 'El formato de fecha debe ser dd/MM/yyyy.'
        },
        curriculumVitae: {
            required: false,
            message: 'Solo se permiten archivos .docx o .pdf.'
        },
        email: {
            required: true,
            message: 'El formato de correo electrónico no es válido.'
        },
        contrasena: {
            required: true,
            message: 'La contraseña debe tener al menos 1 mayúscula, 1 minúscula, 1 número y entre 6 y 12 caracteres.'
        },
        repetirContrasena: {
            required: true,
            message: 'Las contraseñas no coinciden.'
        },
        genero: {
            required: false, 
            message: 'El género es requerido.'
        }
    };

    const camposFormulario = [
        { input: nombreCompletoInput, error: errorNombreCompleto, group: nombreCompletoInput.parentElement },
        { input: rutInput, error: errorRut, group: rutInput.parentElement },
        { input: fechaNacimientoInput, error: errorFechaNacimiento, group: fechaNacimientoInput.parentElement },
        { input: curriculumVitaeInput, error: errorCurriculumVitae, group: curriculumVitaeInput.parentElement },
        { input: emailInput, error: errorEmail, group: emailInput.parentElement },
        { input: generoSelect, error: errorGenero, group: generoSelect.parentElement },
        { input: contrasenaInput, error: errorContrasena, group: contrasenaInput.parentElement },
        { input: repetirContrasenaInput, error: errorRepetirContrasena, group: repetirContrasenaInput.parentElement }
    ];

    function mostrarError(inputElement, errorMessageElement, message, isValid) {
        const formGroup = inputElement.parentElement;
        if (!isValid) {
            formGroup.classList.add('has-error');
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
            errorMessageElement.textContent = message;
            errorMessageElement.style.display = 'block';
        } else {
            formGroup.classList.remove('has-error');
            inputElement.classList.remove('is-invalid');
            inputElement.classList.add('is-valid');
            errorMessageElement.textContent = '';
            errorMessageElement.style.display = 'none';
        }
    }


    function validarNombreCompleto() {
        const value = nombreCompletoInput.value.trim();
        if (validaciones.nombreCompleto.required && value === '') {
            mostrarError(nombreCompletoInput, errorNombreCompleto, validaciones.nombreCompleto.message, false);
            return false;
        }
        mostrarError(nombreCompletoInput, errorNombreCompleto, '', true);
        return true;
    }

    function validarRut() {
        const rut = rutInput.value.replace(/\./g, '').replace(/-/g, '').trim();
        if (validaciones.rut.required && rut === '') {
            mostrarError(rutInput, errorRut, 'El Rut es requerido.', false);
            return false;
        }

        if (!/^[0-9]+[0-9kK]{1}$/.test(rut)) {
            mostrarError(rutInput, errorRut, 'Formato de Rut incorrecto.', false);
            return false;
        }

        const cuerpo = rut.slice(0, -1);
        const dv = rut.slice(-1).toUpperCase();
        let suma = 0;
        let multiplo = 2;

        for (let i = cuerpo.length - 1; i >= 0; i--) {
            suma += parseInt(cuerpo[i]) * multiplo;
            if (multiplo < 7) {
                multiplo++;
            } else {
                multiplo = 2;
            }
        }

        const dvEsperado = 11 - (suma % 11);
        let dvFinal = '';
        if (dvEsperado === 11) {
            dvFinal = '0';
        } else if (dvEsperado === 10) {
            dvFinal = 'K';
        } else {
            dvFinal = dvEsperado.toString();
        }

        if (dvFinal !== dv) {
            mostrarError(rutInput, errorRut, 'Rut inválido.', false);
            return false;
        }
        mostrarError(rutInput, errorRut, '', true);
        return true;
    }

    function validarFechaNacimiento() {
        const fecha = fechaNacimientoInput.value;
        if (!validaciones.fechaNacimiento.required && fecha === '') {
            mostrarError(fechaNacimientoInput, errorFechaNacimiento, '', true);
            return true;
        }

        if (fecha === '') {
             mostrarError(fechaNacimientoInput, errorFechaNacimiento, 'La fecha de nacimiento no es opcional.', false);
             return false;
        }

        const fechaObj = new Date(fecha);
        const hoy = new Date();
        if (fechaObj > hoy) {
            mostrarError(fechaNacimientoInput, errorFechaNacimiento, 'La fecha de nacimiento no puede ser en el futuro.', false);
            return false;
        }

        mostrarError(fechaNacimientoInput, errorFechaNacimiento, '', true);
        return true;
    }

    function validarCurriculumVitae() {
        const file = curriculumVitaeInput.files[0];
        if (!validaciones.curriculumVitae.required && !file) {
            mostrarError(curriculumVitaeInput, errorCurriculumVitae, '', true);
            return true;
        }
        if (file) {
            const fileName = file.name;
            const fileExtension = fileName.split('.').pop().toLowerCase();
            if (!['docx', 'pdf'].includes(fileExtension)) {
                mostrarError(curriculumVitaeInput, errorCurriculumVitae, validaciones.curriculumVitae.message, false);
                return false;
            }
        } else if (validaciones.curriculumVitae.required) {
             mostrarError(curriculumVitaeInput, errorCurriculumVitae, 'Debe adjuntar un archivo.', false);
             return false;
        }
        mostrarError(curriculumVitaeInput, errorCurriculumVitae, '', true);
        return true;
    }

    function validarEmail() {
        const value = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (validaciones.email.required && value === '') {
            mostrarError(emailInput, errorEmail, 'El correo electrónico es requerido.', false);
            return false;
        }
        if (!emailRegex.test(value)) {
            mostrarError(emailInput, errorEmail, validaciones.email.message, false);
            return false;
        }
        mostrarError(emailInput, errorEmail, '', true);
        return true;
    }

    function validarGenero() {
        mostrarError(generoSelect, errorGenero, '', true);
        return true;
    }

    function validarContrasena() {
        const value = contrasenaInput.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,12}$/;
        if (validaciones.contrasena.required && value === '') {
            mostrarError(contrasenaInput, errorContrasena, 'La contraseña es requerida.', false);
            return false;
        }
        if (!passwordRegex.test(value)) {
            mostrarError(contrasenaInput, errorContrasena, validaciones.contrasena.message, false);
            return false;
        }
        mostrarError(contrasenaInput, errorContrasena, '', true);
        return true;
    }

    function validarRepetirContrasena() {
        const value = repetirContrasenaInput.value;
        const contrasenaValue = contrasenaInput.value;
        if (validaciones.repetirContrasena.required && value === '') {
            mostrarError(repetirContrasenaInput, errorRepetirContrasena, 'Debe repetir la contraseña.', false);
            return false;
        }
        if (value !== contrasenaValue) {
            mostrarError(repetirContrasenaInput, errorRepetirContrasena, validaciones.repetirContrasena.message, false);
            return false;
        }
        mostrarError(repetirContrasenaInput, errorRepetirContrasena, '', true);
        return true;
    }

    function limpiarFormulario() {
        registroForm.reset(); 
        camposFormulario.forEach(campo => {
            campo.input.classList.remove('is-invalid', 'is-valid');
            campo.group.classList.remove('has-error');
            campo.error.textContent = '';
            campo.error.style.display = 'none';
        });
        alert('Formulario limpiado exitosamente.');
    }

    function validarFormularioCompleto() {
        let esValido = true;

        esValido = validarNombreCompleto() && esValido;
        esValido = validarRut() && esValido;
        esValido = validarFechaNacimiento() && esValido;
        esValido = validarCurriculumVitae() && esValido;
        esValido = validarEmail() && esValido;
        esValido = validarGenero() && esValido;
        esValido = validarContrasena() && esValido;
        esValido = validarRepetirContrasena() && esValido;
        return esValido;
    }


    btnCancelar.addEventListener('click', limpiarFormulario);

    registroForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (validarFormularioCompleto()) {
            alert('¡Datos enviados correctamente!\n\n(Muchas gracias por tu registro.)');
        } else {
            alert('Por favor, corrige los errores en el formulario.');
        }
    });

  
    nombreCompletoInput.addEventListener('blur', validarNombreCompleto);
    rutInput.addEventListener('blur', validarRut);
    fechaNacimientoInput.addEventListener('change', validarFechaNacimiento); 
    curriculumVitaeInput.addEventListener('change', validarCurriculumVitae);
    emailInput.addEventListener('blur', validarEmail);
    generoSelect.addEventListener('change', validarGenero);
    contrasenaInput.addEventListener('blur', validarContrasena);
    repetirContrasenaInput.addEventListener('blur', validarRepetirContrasena);

      contrasenaInput.addEventListener('input', validarRepetirContrasena);
});