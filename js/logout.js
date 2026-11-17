const cerrarSesion = document.getElementById("cerrarSesion");

cerrarSesion.addEventListener("click", (event) => {
    event.preventDefault();

    localStorage.removeItem("sesionAdmin");

    window.location.href = "../index.html";
});