document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("loginButton");

  loginButton.addEventListener("click", function () {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Guarda credenciales en chrome.storage.local
    if (username && password) {
      chrome.storage.local.set({ username: username, password: password, }, function () {
        console.log("Credenciales guardadas");
        statusMessage.textContent = "Credenciales guardadas correctamentes!";
        statusMessage.style.color = "#7bd14f";
      });
    }
    else {
      console.log("No se guardaron las credenciales");
      statusMessage.textContent = "Ocurrio un error al guardar las credenciales";
      statusMessage.style.color = "#f53b3b";
    }
  });

    // Probablemente hubiera sido mejor crear una funcion en vez de repetir este codigo, pero ya es tarde
    passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Guarda credenciales en chrome.storage.local
    if (username && password) {
      chrome.storage.local.set({ username: username, password: password, }, function () {
        console.log("Credenciales guardadas");
        statusMessage.textContent = "Credenciales guardadas correctamentes!";
        statusMessage.style.color = "#7bd14f";
      });
    }
    else {
      console.log("No se guardaron las credenciales");
      statusMessage.textContent = "Ocurrio un error al guardar las credenciales";
      statusMessage.style.color = "#f53b3b";
    }
    }
  });
});
