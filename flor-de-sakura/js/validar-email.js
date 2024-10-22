// Validação do formulário
(function() {
  'use strict';
  window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
              // Se o formulário não for válido, previne o envio
              if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
              }
              form.classList.add('was-validated');
          }, false);
      });
  }, false);
})();

// Validação específica para o e-mail
document.getElementById('login-form').addEventListener('submit', function(event) {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Validação do e-mail
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      event.preventDefault(); // Impede o envio do formulário
      document.getElementById('email').classList.add('is-invalid'); // Adiciona a classe de erro
      return; // Sai da função
  } else {
      document.getElementById('email').classList.remove('is-invalid'); // Remove o erro se válido
  }

  // Validação da senha
  if (password.length < 8) {
      event.preventDefault(); // Impede o envio do formulário
      document.getElementById('password').classList.add('is-invalid'); // Adiciona a classe de erro
      return; // Sai da função
  } else {
      document.getElementById('password').classList.remove('is-invalid'); // Remove o erro se válido
  }

  // Se tudo estiver correto
  console.log('Login realizado com sucesso!');
});
