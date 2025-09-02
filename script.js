// ================================
// Section Highlight on Scroll
// ================================
const sections = document.querySelectorAll("section, main");
const navLinks = document.querySelectorAll(".nav_text li a");

window.addEventListener("scroll", () => {
  let current = "";
  const offset = window.innerWidth >= 750 ? 80 : 120; // Adjust for header height

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - offset;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  // Special case: highlight last section at bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    current = sections[sections.length - 1].getAttribute("id");
  }

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href").includes(current));
  });

  // Back-to-Top toggle
  backToTop.classList.toggle("show", window.scrollY > 300);
});

// ================================
// Fade-In Effect on Scroll
// ================================
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => appearOnScroll.observe(fader));

// ================================
// Back-to-Top Button
// ================================
const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================================
// Hamburger Menu Toggle
// ================================
const menuToggle = document.getElementById("menu_toggle");
const navLink = document.getElementById("nav_link");

menuToggle.addEventListener("click", () => {
  navLink.classList.toggle("show");
  menuToggle.classList.toggle("active"); // <-- This switches ☰ ↔ ✖
});
