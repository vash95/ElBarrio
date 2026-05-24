const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const bookingForm = document.getElementById("bookingForm");
const menuGrid = document.getElementById("menuGrid");

const menuData = [
  {
    categoria: "Entrantes",
    platos: ["Croquetas caseras", "Chipirones con ali-oli", "Morcilla de Zaratán"]
  },
  {
    categoria: "Carnes",
    platos: ["Entrecot a la plancha", "Churrasco", "Secreto ibérico"]
  },
  {
    categoria: "Huevos y sartenes",
    platos: ["Huevos rotos con jamón", "Huevos con chistorra", "Sartén campera"]
  },
  {
    categoria: "Ensaladas y ligeros",
    platos: ["Ensalada mixta", "Ensalada de ventresca", "Tomate aliñado con bonito"]
  },
  {
    categoria: "Postres",
    platos: ["Tarta de queso", "Flan casero", "Arroz con leche"]
  },
  {
    categoria: "Bodega",
    platos: ["Ribera del Duero", "Rueda verdejo", "Selección de cervezas"]
  }
];

function renderMenu() {
  if (!menuGrid) return;

  menuGrid.innerHTML = menuData
    .map(
      (bloque) => `
        <article class="card">
          <h3>${bloque.categoria}</h3>
          <ul>
            ${bloque.platos.map((plato) => `<li>${plato}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Solicitud enviada. Te contactaremos para confirmar la reserva.");
  bookingForm.reset();
});

renderMenu();
