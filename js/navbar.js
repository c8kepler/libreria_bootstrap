const botonLogin = document.getElementById("login");
const avatarUsuario = document.getElementById("avatar");

const sesionActiva = localStorage.getItem("sesionAdmin") === "activa";

if (sesionActiva){
    botonLogin.classList.add("d-none");
    avatarUsuario.classList.remove("d-none");
} else {
    botonLogin.classList.remove("d-none");
    avatarUsuario.classList.add("d-none");
}