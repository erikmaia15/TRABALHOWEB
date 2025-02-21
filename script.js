document
  .getElementById("btn-cadastrar")
  .addEventListener("submit", function () {
    const matricula_user = document.getElementById("matricula").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    } else {
      criarUser();
      alert("Inscrição realizada com sucesso!");
      console.log(users);
    }

    // Aqui você pode adicionar a lógica para enviar os dados do formulário
  });
function criarUser() {
  const users = {
    matricula: matricula_user,
    email: email,
    senha: password,
  };
}
