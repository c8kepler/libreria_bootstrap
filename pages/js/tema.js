const selectorTema = document.getElementById("tema-switch");
const pagina = document.documentElement;
const temaGuardado = localStorage.getItem("tema");
const temaInicial = temaGuardado === "dark" ? "dark" : "light";

pagina.setAttribute("data-bs-theme", temaInicial);
selectorTema.checked = temaInicial === "dark";

selectorTema.addEventListener("change", () => {
  const temaSeleccionado = selectorTema.checked ? "dark" : "light";

  pagina.setAttribute("data-bs-theme", temaSeleccionado);
  localStorage.setItem("tema", temaSeleccionado);
});