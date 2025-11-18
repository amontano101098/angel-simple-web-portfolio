// ================================
// Section Highlight on Scroll
// ================================
const sections = document.querySelectorAll("section, main");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

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
// Contact Me form Clear form after sending email
// ================================

const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      form.reset(); // <-- Clears the form
    } else {
      alert("❌ Oops! Something went wrong.");
    }
  } catch (error) {
    alert("❌ Network error. Please try again.");
  }
});

// ================================
// Making my Project Section Dynamic
// =================================

const projects = [
  {
    title: "CRITTER COVE",
    img: "./img/crittercove.png",
    description: `CritterCove is a one-stop haven for your furry, feathered,
    and four-legged friends. Whether you're looking to
    adopt a new best friend, glam them up in their next
    OOTD, or book a weekend getaway (yes, for your pet!),
    CritterCove has it all. It is the ULTIMATE pet paradise. It is developed
    using <strong> HTML, CSS, JavaScript, and Bootstrap. Was presented to international members of CodeBlosoom. </strong>`,
    link: "https://joanneblocks.github.io/2025_CritterCove/index.html"
  },
  {
    title: "DOG MATE",
    img: "./img/logo_dogmate.png",
    description: `This platform helps pet owners manage and organize their pets’ important records,
    including vaccination history, check-up schedules, and personal details. 
    It also provides reminders for upcoming vaccines, check-ups, and vitamin intake.
    In addition, the website helps users easily locate the nearest veterinary clinics and pet shops.`,
    link: "https://amontano101098.github.io/Dog-Care-App/"
  },
  {
    title: "SAMPLE LANDING PAGES FOR DIGITAL SELLERS",
    img: "./img/digital.png",
    description: `I created sample landing pages for digital sellers to showcase their products and services effectively.
    These landing pages are designed to attract potential customers, highlight key features, and drive conversions.
    It is developed using <strong> HTML, CSS, and JavaScript. </strong>`,
    link: "https://amontano101098.github.io/landingpage_digital_seller/"
  },
  {
    title: "SAMPLE LANDING PAGES FOR SERVICE BASED BUSINESSES",
    img: "./img/digital.png",
    description: `I created sample landing pages for service-based businesses to effectively present their offerings and attract clients.
    These landing pages are designed to highlight the unique value propositions of various services, making it easier for potential customers to understand and engage with the business.
    It is developed using <strong> HTML, CSS, and JavaScript. </strong>`,
    link: "https://amontano101098.github.io/landingpage_servicebased/"
  }
];
const projectList = document.querySelector(".project_photos");

projectList.innerHTML = projects.map(project => `
  <li>
    <img src="${project.img}" alt="${project.title}">
    <div class="project_text">
      <span class="project_title"><strong>${project.title}</strong></span>
      <p>${project.description}</p>
      <a href="${project.link}" class="learn_more ${project.title.toLowerCase().replace(/\s+/g, "_")}_link">
        Visit Now
      </a>
    </div>
  </li>
`).join("");

