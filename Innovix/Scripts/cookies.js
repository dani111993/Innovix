document.addEventListener('DOMContentLoaded', function() {
  // Preguntar por aceptar cookies en cada recarga de página
  var acceptCookies = confirm('Este sitio web utiliza cookies. ¿Aceptas el uso de cookies?');
  if (acceptCookies) {
    localStorage.setItem('cookiesAccepted', 'true');
  } else {
    localStorage.removeItem('cookiesAccepted');
  }
});