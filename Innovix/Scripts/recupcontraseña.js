document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    // Aquí puedes agregar la lógica para enviar un correo de restablecimiento de contraseña
    alert('Se ha enviado un enlace de restablecimiento de contraseña a ' + email);
});