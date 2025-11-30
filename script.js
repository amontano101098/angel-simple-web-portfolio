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
// End of Contact Me form

// ================================
// Making my Project Section Dynamic
// =================================

const projects = [
  {
    title: "LABS MARITEST",
    img: "./img/TAPH-LOGO.jpg",
    description: `A Playground for testers that helps Test Automation 
    Ph Students implement their Test Scripts using different Tools in 
    Testing, such as Playwright and Cypress. This helped over 30 students
     in a partnership between Test Automation Ph and Code Blossom.`,
    link: "https://labs.testautomationph.com/"
  },
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
//End of projects renderer

// ============================
// Reviews Data
// ============================
const reviews = [
  {
    name: "Reginald Offemaria",
    role: "Mentor in Code Blossom /Founder/Mentor at Test Automation Ph",
    avatar: "./img/reg_profile.jfif",
    review: `Angel played a key role in bringing the playground to life. Her dedication, patience, and attention to detail really showed throughout the entire development process. She approached every challenge with creativity and determination, 
    making sure the platform was not only functional but also smooth and enjoyable to use
    On top of that, Angel has been amazing in creating the social media graphics for Test Automation PH. Her designs are clean, professional, and eye-catching—always capturing the message and vibe perfectly. 
    She consistently puts in the extra effort to make every graphic look polished and engaging.`,
    date: "November 2025"
  },
  {
    name: "Corlyne Mutemi",
    role: "Mentor — Code Blossom",
    avatar: "./img/corlyne-reviewer.png",
    review: `Angel has shown strong dedication and authentic engagement throughout the program.
Their projects consistently reflect thoughtful effort, clear understanding, and their own creative touch.
Their Computer Science background provides a strong foundation, but it's their curiosity, discipline, and willingness to go deeper that truly set them apart.

Their hackathon ideas and execution have been especially impressive, showcasing both solid technical skills and creativity. A highly promising developer — we're glad to have them in the cohort.`,
    date: "November 2025"
  },
  {
    name: "Alice Musukwa",
    role: "Mentor/Lead Africa — Code Blossom",
    avatar: "./img/alice_profile.jfif",
    review: `During her time at Code Blossom, Angel has shown strong determination and excellent discipline in her studies toward becoming a full-stack developer. She completes curriculum tasks thoroughly and often ahead of schedule, reaching key milestones quickly. She also consistently follows community guidelines 
    and actively participates in all our events, making her a standout member of the program.`,
    date: "November 2025"
  }
];

// ============================
// DOM Renderer
// ============================
function renderReviews(listEl, items = []) {
  if (!listEl) return;
  listEl.innerHTML = '';

  const frag = document.createDocumentFragment();

  items.forEach((r) => {
    const li = document.createElement('li');
    li.className = 'project_card mb-4 position-relative';

    const container = document.createElement('div');
    container.className = 'container-fluid px-3';

    const row = document.createElement('div');
    row.className = 'row g-3 align-items-center';

    const colAvatar = document.createElement('div');
    colAvatar.className = 'col-auto d-flex justify-content-center';
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.alt = r.name ? `${r.name} avatar` : 'Reviewer avatar';
    img.src = r.avatar || './img/default-avatar.png';
    colAvatar.appendChild(img);

    const colContent = document.createElement('div');
    colContent.className = 'col';

    const wrapper = document.createElement('div');
    wrapper.className = 'd-flex flex-column';

    // Name + Role
    const nameEl = document.createElement('strong');
    nameEl.textContent = r.name || 'Anonymous';
    const roleEl = document.createElement('small');
    roleEl.textContent = r.role || '';

    const metaWrap = document.createElement('div');
    metaWrap.appendChild(nameEl);
    if (r.role) metaWrap.appendChild(roleEl);
    wrapper.appendChild(metaWrap);

    // Review paragraphs
    const paragraphs = (r.review || '').split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
    paragraphs.forEach(pText => {
      const p = document.createElement('p');
      p.className = 'mt-2 mb-0 review-body';
      p.innerHTML = pText;
      wrapper.appendChild(p);
    });

    // Optional date
    if (r.date) {
      const dateEl = document.createElement('small');
      dateEl.className = 'text-muted mt-2';
      dateEl.textContent = r.date;
      wrapper.appendChild(dateEl);
    }

    colContent.appendChild(wrapper);
    row.appendChild(colAvatar);
    row.appendChild(colContent);
    container.appendChild(row);
    li.appendChild(container);
    frag.appendChild(li);
  });

  listEl.appendChild(frag);
}

// ============================
// Initialize Reviews
// ============================
document.addEventListener('DOMContentLoaded', () => {
  const reviewListEl = document.querySelector('.review-text');
  renderReviews(reviewListEl, reviews);
});
// End of Reviews Renderer

// ================================
// BLOG POSTS (Carousel Render)
// ================================

const blogPosts = [
  {
    title: "Day 1: Starting Over as an IT Graduate in 2026",
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7398040652292395008?collapsed=1",
  },
  {
    title: "DAY 2 — Relearning HTML",
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7398042778473127936?collapsed=1",
  },
  {
    title: "DAY 3 — CSS and the Art of Patience",
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7398046933627523072?collapsed=1",
  },
  {
    title: "DAY 4 — First Wins with JavaScript",
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7398367838811451392?collapsed=1", // check that this isn't accidentally duplicated
  },
  {
    title: " DAY 5 — Understanding DOM Manipulation",
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7398681136228548608?collapsed=1",
  },
  {
    title: "  DAY 6 — Building My First Small Interactive Project",
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7398698063810293760?collapsed=1",
  },
  {
    title: "DAY 7 — Catch the Code Blossom Offer: Free Learning for Women in Tech! 🌸💻",
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7399687158006992896?collapsed=1",
  },
  {
    title: " DAY 8 — Is AI gonna replace Human?",
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7400070732912918530?collapsed=1",
  },
];

/**
 * Accepts either:
 *  - a full LinkedIn embed URL (https://www.linkedin.com/embed/feed/update/urn:li:share:...),
 *  - or a URN like "urn:li:share:123..."
 * Returns a safe iframe src string for LinkedIn embed.
 */
function getLinkedInEmbedSrc(urlOrUrn) {
  if (!urlOrUrn) return null;

  // If it's already a full embed URL, return it (trim whitespace)
  const trimmed = urlOrUrn.trim();

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    // Ensure it points to /embed/feed/update/...
    if (trimmed.includes("/embed/feed/update/")) {
      return trimmed;
    }
    // If user passed a normal post URL, try to extract the update part:
    const idx = trimmed.indexOf("/update/");
    if (idx !== -1) {
      return "https://www.linkedin.com/embed/feed" + trimmed.slice(idx);
    }
  }

  // If it's a URN (starts with urn:)
  if (trimmed.startsWith("urn:")) {
    return `https://www.linkedin.com/embed/feed/update/${encodeURIComponent(trimmed)}`;
  }

  // Fallback: try to find the 'update/...' part
  const parts = trimmed.split("update/");
  if (parts.length > 1) {
    return `https://www.linkedin.com/embed/feed/update/${parts[1]}`;
  }

  // Can't resolve — return null
  return null;
}

function getLinkedInEmbed(url) {
  const src = getLinkedInEmbedSrc(url);
  if (!src) return "<!-- invalid LinkedIn URL/URN -->";

  // Keep iframe attributes minimal and accessible
  return `
    <div class="blog-iframe-wrapper" style="position:relative;padding-top:56.25%;width:100%;height:0;">
      <iframe src="${src}"
              style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
              allowfullscreen
              title="LinkedIn Post"></iframe>
    </div>
  `;
}

function titleLink(title, url) {
  // Use the actual url if valid, otherwise just render plain text
  const anchor = getLinkedInEmbedSrc(url) ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>` : title;
  return anchor;
}

function renderBlogCarousel() {
  const carouselInner = document.getElementById("blogCarouselInner");
  if (!carouselInner) {
    console.warn("No element with id 'blogCarouselInner' found.");
    return;
  }
  carouselInner.innerHTML = "";

  blogPosts.forEach((post, index) => {
    const isActive = index === 0 ? "active" : "";

    const slide = document.createElement("div");
    slide.className = `carousel-item ${isActive}`;

    slide.innerHTML = `
      <div class="project_card" style="padding:1rem;">
        <h5>${titleLink(post.title.trim(), post.url)}</h5>
        ${getLinkedInEmbed(post.url)}
      </div>
    `;

    carouselInner.appendChild(slide);
  });
}

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  renderBlogCarousel();
});