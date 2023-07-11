document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username && password) {
    // Redirecionar para a página Lista de Produtos
    window.location.href = 'product-list.html';
  }
});
