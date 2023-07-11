document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;

  if (email) {
    alert('O link de redefinição de senha foi enviado para o e-mail informado');
    // Redirecionar para a tela de Login
    window.location.href = 'index.html';
  }
});
