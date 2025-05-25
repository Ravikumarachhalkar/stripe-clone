document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-reveal");
  const imageElements = document.querySelectorAll(
    ".gradient-image-section .image img"
  );
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeIcon = document.querySelector(".close-icon");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav ul li a");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  elements.forEach((element) => {
    observer.observe(element);
  });

  imageElements.forEach((element) => {
    imageObserver.observe(element);
  });

  hamburgerIcon.addEventListener("click", () => {
    mobileNav.classList.add("open");
    hamburgerIcon.classList.add("open");
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    hamburgerIcon.classList.remove("open");
    hamburgerIcon.style.display = "flex";
    closeIcon.style.display = "none";
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      hamburgerIcon.classList.remove("open");
      hamburgerIcon.style.display = "flex";
      closeIcon.style.display = "none";
    });
  });
});

document
  .querySelectorAll('nav a[href^="#"], .mobile-nav a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
