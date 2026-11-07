const selectorTema = document.getElementById("selectColor");
const pagina = document.documentElement;
const temaGuardado = localStorage.getItem("tema");
const temaInicial = temaGuardado === "dark" ? "dark" : "light";

pagina.setAttribute("data-bs-theme", temaInicial);
selectorTema.value = temaInicial;

selectorTema.addEventListener("change", () => {
  const temaSeleccionado = selectorTema.value;

  pagina.setAttribute("data-bs-theme", temaSeleccionado);
  localStorage.setItem("tema", temaSeleccionado);
});