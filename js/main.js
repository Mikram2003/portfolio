const projectDetails = {
  cyber: {
    number: "01", year: "2025", type: "Individual academic project", title: "Cyber Security Website",
    gallery: [
      { src: "cybersecurity-home.png", label: "01 / Homepage", alt: "Cyber Security Website homepage with four security topic panels" },
      { src: "cybersecurity-home-hover.png", label: "02 / Topic selection", alt: "Cyber Security Website homepage with the Mobile Security topic highlighted" },
      { src: "cybersecurity-mobile-security.png", label: "03 / Mobile security", alt: "Mobile Security page with guidance about strong passwords and biometrics" },
      { src: "cybersecurity-password-guide.png", label: "04 / Password guide", alt: "Strong Passwords article with password safety recommendations" },
      { src: "cybersecurity-contact.png", label: "05 / Contact page", alt: "Contact page with precise map details hidden for privacy" },
      { src: "cybersecurity-about.png", label: "06 / About page", alt: "About page with project information" }
    ],
    source: "https://github.com/mikram2003/Cybersecurity",
    overview: "An individual website developed as part of the Higher National Diploma in Information Technology programme at SLIATE.",
    role: "Individually planned and developed a responsive website.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    tool: "Visual Studio Code",
    highlights: ["Responsive website development", "Front-end design", "Project planning, implementation, testing and documentation", "Practical problem-solving"]
  },
  arvina: {
    number: "02", year: "2026", type: "Individual academic e-commerce project", title: "Arvina Accessories Collection",
    gallery: [
      { src: "arvina-men-categories.png", label: "01 / Categories", alt: "Arvina clothing category page" },
      { src: "arvina-product-detail.png", label: "02 / Product detail", alt: "Arvina product detail page" },
      { src: "arvina-cart.png", label: "03 / Shopping cart", alt: "Arvina shopping cart page" },
      { src: "arvina-order-confirmation.png", label: "04 / Order confirmation", alt: "Arvina order confirmation with shipping details hidden" },
      { src: "arvina-login.png", label: "05 / Customer login", alt: "Arvina login page with demo credentials hidden" },
      { src: "arvina-admin-dashboard.png", label: "06 / Admin dashboard", alt: "Arvina administrator dashboard" },
      { src: "arvina-order-management.png", label: "07 / Order management", alt: "Arvina administrator order management list" },
      { src: "arvina-order-status.png", label: "08 / Status update", alt: "Arvina order status update dialog" }
    ],
    source: "https://github.com/mikram2003/Arvina_Clothing",
    overview: "An academic e-commerce website project focused on an attractive, user-friendly online shopping interface.",
    role: "Designed and developed the project individually.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    tool: "Visual Studio Code",
    highlights: ["Product management", "Shopping cart", "User authentication", "Testing, debugging and documentation"]
  },
  watch: {
    number: "03", year: "2025", type: "Academic group project", title: "Watch Hub",
    gallery: [
      { src: "watch-hub-home.png", label: "01 / Homepage", alt: "Watch Hub homepage featuring a close-up watch banner" },
      { src: "watch-hub-features.png", label: "02 / Shopping details", alt: "Watch Hub delivery, payment, and order information section" },
      { src: "watch-hub-products.png", label: "03 / Product listing", alt: "Watch Hub women's product listing with filters and watch items" },
      { src: "watch-hub-stores.png", label: "04 / Store locations", alt: "Watch Hub store locations and opening hours" }
    ],
    overview: "A responsive, user-friendly e-commerce website designed and developed collaboratively as an academic group project.",
    role: "Collaborated with a team through the software development lifecycle.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tool: "Visual Studio Code",
    highlights: ["Academic e-commerce web application", "Planning, development, testing and documentation", "Teamwork and problem-solving"]
  },
  human: {
    number: "04", year: "2025", type: "Team project", title: "Human Value Project",
    gallery: [
      { src: "human-value-event-team.jpg", label: "01 / Event team", alt: "Human Value Project event team photograph" },
      { src: "human-value-event-filming.jpg", label: "02 / Event coverage", alt: "Human Value Project event coverage photograph" },
      { src: "human-value-event-stage.jpg", label: "03 / Event group", alt: "Human Value Project group photograph on stage" },
      { src: "human-value-event-class.jpg", label: "04 / HNDIT community", alt: "HNDIT student community group photograph" }
    ],
    eventLinks: [
      { href: "https://m.facebook.com/story.php?story_fbid=pfbid0qYuMQPtPCBNisQXuYsQ4ZJUDcDqiYj9FcHaHNtYR4Hk1jWSSj3Z6kyBsFDgPPXxWl&id=100064206064013&mibextid=wwXIfr", label: "Event post" },
      { href: "https://youtu.be/7A3arj43a34?si=X-6luCmScF0_81kD", label: "Event video" }
    ],
    overview: "A team project completed as part of the HNDIT programme at SLIATE, presented here with photographs from the related event.",
    role: "Led the team and coordinated project planning, task allocation, team communication and project coordination.",
    technologies: [],
    highlights: ["Team leadership", "Collaborative project coordination", "Planning and task allocation", "Communication and timely completion"]
  }
};

const body = document.body;
const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const progressBar = document.querySelector("#scroll-progress");
const dialog = document.querySelector(".project-dialog");
const closeDialogButton = document.querySelector(".dialog-close");
let lastProjectTrigger = null;

body.classList.add("motion-ready");

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;
}

updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  mobileNav.classList.toggle("is-open", open);
  mobileNav.inert = !open;
  body.classList.toggle("menu-open", open);
}

menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menuButton.focus();
  }
});
window.matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
  if (event.matches && menuButton.getAttribute("aria-expanded") === "true") setMenu(false);
});

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll(".desktop-nav a").forEach((link) => {
      if (link.getAttribute("href") === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  });
}, { rootMargin: "-28% 0px -62% 0px" });

document.querySelectorAll("main section[id]").forEach((section) => navObserver.observe(section));

function fillDialog(project) {
  document.querySelector("#dialog-number").textContent = project.number;
  document.querySelector("#dialog-year").textContent = project.year;
  document.querySelector("#dialog-type").textContent = project.type;
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-overview").textContent = project.overview;
  document.querySelector("#dialog-role").textContent = project.role;
  const gallery = document.querySelector(".dialog-gallery");
  const galleryGrid = document.querySelector("#dialog-gallery-grid");
  galleryGrid.replaceChildren();
  (project.gallery || []).forEach((image, index) => {
    const figure = document.createElement("figure");
    const link = document.createElement("a");
    const img = document.createElement("img");
    const caption = document.createElement("figcaption");
    const src = `assets/${image.src}`;
    link.href = src;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.setAttribute("aria-label", `Open full-size ${project.title} screenshot: ${image.label}`);
    img.src = src;
    img.alt = image.alt;
    img.loading = index < 2 ? "eager" : "lazy";
    img.decoding = "async";
    img.width = 1920;
    img.height = 1080;
    caption.textContent = image.label;
    link.append(img);
    figure.append(link, caption);
    galleryGrid.append(figure);
  });
  gallery.hidden = galleryGrid.childElementCount === 0;
  const techContainer = document.querySelector("#dialog-tags");
  const techSection = document.querySelector(".dialog-tech");
  const toolSection = document.querySelector(".dialog-tool");
  techContainer.replaceChildren();
  project.technologies.forEach((technology) => {
    const tag = document.createElement("span");
    tag.textContent = technology;
    techContainer.append(tag);
  });
  techSection.hidden = project.technologies.length === 0;
  toolSection.hidden = !project.tool;
  document.querySelector("#dialog-tool").textContent = project.tool || "";
  const sourceSection = document.querySelector(".dialog-source");
  const sourceLink = document.querySelector("#dialog-source-link");
  sourceSection.hidden = !project.source;
  if (project.source) sourceLink.href = project.source;
  else sourceLink.removeAttribute("href");
  const eventSection = document.querySelector(".dialog-events");
  const eventLinks = document.querySelector("#dialog-event-links");
  eventLinks.replaceChildren();
  (project.eventLinks || []).forEach((eventLink) => {
    const link = document.createElement("a");
    const arrow = document.createElement("span");
    link.href = eventLink.href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = eventLink.label;
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";
    link.append(" ", arrow);
    eventLinks.append(link);
  });
  eventSection.hidden = eventLinks.childElementCount === 0;
  const highlightList = document.querySelector("#dialog-highlights");
  highlightList.replaceChildren();
  project.highlights.forEach((highlight) => {
    const item = document.createElement("li");
    item.textContent = highlight;
    highlightList.append(item);
  });
}

document.querySelectorAll("[data-project]").forEach((article) => {
  const trigger = article.querySelector(".project-open");
  trigger.addEventListener("click", () => {
    const project = projectDetails[article.dataset.project];
    if (!project) return;
    lastProjectTrigger = trigger;
    fillDialog(project);
    dialog.showModal();
    closeDialogButton.focus();
  });
});

closeDialogButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => lastProjectTrigger?.focus());

const heroVisual = document.querySelector(".hero-visual");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (window.matchMedia("(pointer: fine)").matches && !reducedMotion.matches) {
  window.addEventListener("scroll", () => {
    if (window.scrollY < window.innerHeight) {
      heroVisual.style.setProperty("--parallax-y", `${Math.min(18, window.scrollY * 0.025)}px`);
    }
  }, { passive: true });
}

if (!reducedMotion.matches) {
  document.querySelectorAll(".project-art.has-screenshot").forEach((artwork) => {
    const project = projectDetails[artwork.closest("[data-project]").dataset.project];
    const screenshots = project?.gallery?.map((image) => `assets/${image.src}`) || [];
    if (screenshots.length < 2) return;

    const firstLayer = artwork.querySelector(".project-screenshot");
    const secondLayer = firstLayer.cloneNode();
    let currentIndex = 0;
    let activeLayer = firstLayer;
    let nextLayer = secondLayer;

    firstLayer.src = screenshots[currentIndex];
    firstLayer.classList.add("carousel-layer", "is-active");
    secondLayer.src = screenshots[1];
    secondLayer.classList.add("carousel-layer");
    artwork.append(secondLayer);

    window.setInterval(() => {
      const projectButton = artwork.closest(".project-open");
      if (document.hidden || artwork.matches(":hover") || projectButton.matches(":focus-within")) return;

      currentIndex = (currentIndex + 1) % screenshots.length;
      nextLayer.src = screenshots[currentIndex];
      nextLayer.classList.add("is-active");
      activeLayer.classList.remove("is-active");
      [activeLayer, nextLayer] = [nextLayer, activeLayer];
    }, 2000);
  });
}
