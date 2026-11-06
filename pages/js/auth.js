const formulario = document.getElementById("form-login");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const correo = document.getElementById("email").value;
  const clave = document.getElementById("password").value;
  const mensaje = document.getElementById("mensaje-error");

  if (correo === "admin@biblioweb.test" && clave === "Admin123") {
    sessionStorage.setItem("sesionAdmin", "activa");
    window.location.href = "admin.html";
  } else {
    mensaje.textContent = "Correo o contraseña incorrectos";
    mensaje.hidden = false;
  }
});
