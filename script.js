const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const bookingForm = document.getElementById("bookingForm");
const logList = document.getElementById("logList");

const logs = [];

function addLog(message) {
  const timestamp = new Date().toLocaleString("es-ES");
  logs.unshift(`[${timestamp}] ${message}`);
  renderLogs();
  console.log(message);
}

function renderLogs() {
  if (!logList) return;
  logList.innerHTML = logs.slice(0, 10).map((entry) => `<li>${entry}</li>`).join("");
}

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  addLog("Menú móvil alternado.");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    addLog(`Navegación a sección: ${link.getAttribute("href")}`);
  });
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const fecha = document.getElementById("fecha").value;
  const personas = document.getElementById("personas").value;

  addLog(`Reserva recibida de ${nombre} (${email}) para ${personas} personas el ${fecha}.`);
  alert("Solicitud enviada. Te contactaremos para confirmar la reserva.");
  bookingForm.reset();
});

addLog("Web cargada correctamente.");
