// Año automático en el footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Scroll suave para enlaces internos del menú
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
// Menú hamburguesa en móviles
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });

  // Cerrar el menú al hacer clic en un enlace (móvil)
  navLinks.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
    });
  });
}

