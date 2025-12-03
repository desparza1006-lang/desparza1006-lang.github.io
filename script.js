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
// Carrusel automático de tecnologías
const skillsCarousel = document.getElementById("skillsCarousel");
if (skillsCarousel) {
  // Duplicar elementos para que el scroll sea continuo
  const items = Array.from(skillsCarousel.children);
  items.forEach((item) => {
    skillsCarousel.appendChild(item.cloneNode(true));
  });

  let scrollSpeed = 1; // píxeles por paso
  setInterval(() => {
    skillsCarousel.scrollLeft += scrollSpeed;

    // Cuando llegue a la mitad (los clonados), vuelve al inicio
    const halfWidth = skillsCarousel.scrollWidth / 2;
    if (skillsCarousel.scrollLeft >= halfWidth) {
      skillsCarousel.scrollLeft = 0;
    }
  }, 20); // velocidad (ms). Más bajo = más rápido
}
