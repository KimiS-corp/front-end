$(document).ready(function() {
    $("#entry-date").datepicker({
        dateFormat: 'dd/mm/yy'
    });

    function clearForm() {
        $('#user-form')[0].reset();
        $('.error-message').text('').hide();
        $('input, select').removeClass('input-error');
    }

    $('#cancel-btn').on('click', function() {
        clearForm();
    });

    $('#save-btn').on('click', function() {
        let isValid = true;
        $('.error-message').text('').hide();
        $('input, select').removeClass('input-error');

        const name = $('#name').val().trim();
        if (name === '') {
            $('#name-error').text('El nombre es requerido.').show();
            $('#name').addClass('input-error');
            isValid = false;
        }

        const username = $('#username').val().trim();
        if (username === '') {
            $('#username-error').text('El usuario es requerido.').show();
            $('#username').addClass('input-error');
            isValid = false;
        }

        const entryDate = $('#entry-date').val().trim();
        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        if (entryDate === '') {
            $('#entry-date-error').text('La fecha de ingreso es requerida.').show();
            $('#entry-date').addClass('input-error');
            isValid = false;
        } else if (!dateRegex.test(entryDate)) {
            $('#entry-date-error').text('Formato de fecha inválido. Use dd/MM/yyyy.').show();
            $('#entry-date').addClass('input-error');
            isValid = false;
        }

        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            $('#email-error').text('El email es requerido.').show();
            $('#email').addClass('input-error');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            $('#email-error').text('Formato de email inválido (ej. nombre@servidor.algo).').show();
            $('#email').addClass('input-error');
            isValid = false;
        }

        if (isValid) {
            const userData = {
                name: name,
                username: username,
                email: email,
                website: $('#website').val().trim(),
                entryDate: entryDate,
                gender: $('#gender').val()
            };

            console.log('Datos a enviar :', userData);
            alert('¡Envío de datos exitoso! ');
            clearForm();
        } else {
            alert('Por favor, corrija los errores del formulario para continuar.');
        }
    });

    $('input, select').on('input change', function() {
        const fieldId = $(this).attr('id');
        $(`#${fieldId}-error`).text('').hide();
        $(this).removeClass('input-error');
    });
});