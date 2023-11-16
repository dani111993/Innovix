document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form-value form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      sendConfirmationEmail();
    });
  
    function sendConfirmationEmail() {
      // Aquí se simularía el envío del correo
      alert('Se ha enviado un correo a su cuenta para confirmar el registro');
    }
  });