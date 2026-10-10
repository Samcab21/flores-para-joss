
const botonTema = document.getElementById("tema");
const botonExplorar = document.getElementById("explorar");
const botonSiguiente = document.getElementById("siguiente");
const botonRegresar = document.getElementById("regresar");

const inicio = document.getElementById("inicio");
const pantallaFlor = document.getElementById("pantalla-flor");
const pie = document.getElementById("pie");

let temaClaro = false;

// Cambiar el tema sin alterar el contenido.
botonTema.addEventListener("click", () => {
  temaClaro = !temaClaro;

  document.body.classList.toggle("claro", temaClaro);

  botonTema.textContent = temaClaro
    ? "🌙 Cambiar tema"
    : "☀️ Cambiar tema";
});

// Desplazarse hasta la historia.
botonExplorar.addEventListener("click", () => {
  document.getElementById("contenido").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

// Revelar el ramo.
botonSiguiente.addEventListener("click", () => {
  inicio.hidden = true;
  pie.hidden = true;
  pantallaFlor.hidden = false;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Volver a la página de inicio sin perder los textos.
botonRegresar.addEventListener("click", () => {
  pantallaFlor.hidden = true;
  inicio.hidden = false;
  pie.hidden = false;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
