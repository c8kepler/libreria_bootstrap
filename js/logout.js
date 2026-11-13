const cerrarSesion = document.getElementById("cerrarSesion");

cerrarSesion.addEventListener("click", (event) => {
    event.preventDefault();

    sessionStorage.removeItem("sesionAdmin");

    window.location.href = "../index.html";
});