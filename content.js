console.log("Ejecutando content.js...")

chrome.storage.local.get(["username", "password"], function (data) {
  if (data.username && data.password) {
    const usernameInput = document.getElementById("login_username");
    const passwordInput = document.getElementById("login_password");
    const loginButton = document.querySelector('input[type="submit"]');

    if (usernameInput && passwordInput && loginButton) {
      console.log("Inputs y boton encontrados")
      usernameInput.value = data.username;
      passwordInput.value = data.password;
      loginButton.click();

      console.log("Campos rellenados y botón de inicio de sesión pulsado")
    }
    else {
      console.log("Inputs y botón no encontrados")
    }
  }
});
