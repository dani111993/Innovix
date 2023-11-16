document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores ingresados por el usuario
    var cardNumber = document.getElementById('card-number').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;

    // Aquí puedes procesar los datos del formulario, por ejemplo, enviar a una API de pago
    
    // Una vez procesado el pago, se redirige a una página de confirmación
    window.location.href = 'confirmacion-de-pago.html';

});