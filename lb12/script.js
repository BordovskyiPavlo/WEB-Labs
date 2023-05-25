$(document).ready(function() {
    $('#registerForm').submit(function(event) {
        event.preventDefault();

        const name = $('#name').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();

        if (name === '' || password === '' || confirmPassword === '') {
            $('.error').text('Заповніть всі поля.');
            return;
        }

        if (password !== confirmPassword) {
            $('.error').text('Пароль та підтвердження паролю не співпадають.');
            return;
        }

        $('.success').text('Реєстрація успішна!');
        $('.error').empty();
        $('#registerForm')[0].reset();
    });
});