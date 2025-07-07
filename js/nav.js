// js/nav.js

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });

  // ✅ Fix: Auto-close mobile menu on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      document.body.classList.remove('nav-open');
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Nav toggle logic (already exists)
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav ul");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show-nav");
      navToggle.classList.toggle("open");
    });
  }

  // FILTER LOGIC
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedGroup = button.getAttribute("data-group");

      // Update button styles
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Show/hide items
      portfolioItems.forEach((item) => {
        const itemGroup = item.getAttribute("data-group");
        if (selectedGroup === "all" || itemGroup === selectedGroup) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Filter logic...
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedGroup = button.getAttribute("data-group");
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      portfolioItems.forEach((item) => {
        const itemGroup = item.getAttribute("data-group");
        item.style.display = (selectedGroup === "all" || itemGroup === selectedGroup) ? "block" : "none";
      });
    });
  });

  // LIGHTBOX LOGIC
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

    let currentIndex = 0;
  let currentGroupImages = [];

  function updateVisibleImages() {
    currentGroupImages = Array.from(document.querySelectorAll(".portfolio-item"))
      .filter(item => item.style.display !== "none")
      .map(item => item.querySelector("img"));
  }

  updateVisibleImages(); // initial grab

  // Update on filter
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedGroup = button.getAttribute("data-group");
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      portfolioItems.forEach((item) => {
        const itemGroup = item.getAttribute("data-group");
        item.style.display = (selectedGroup === "all" || itemGroup === selectedGroup) ? "block" : "none";
      });

      updateVisibleImages(); // 💡 refresh filtered group
    });
  });

  // Attach lightbox click to each image
  const allImages = document.querySelectorAll(".portfolio-item img");
  allImages.forEach((img) => {
    img.addEventListener("click", () => {
      updateVisibleImages();
      currentIndex = currentGroupImages.indexOf(img);
      showLightbox(img.src);
    });
  });

  function showLightbox(src) {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
  }

  function hideLightbox() {
    lightbox.style.display = "none";
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + currentGroupImages.length) % currentGroupImages.length;
    lightboxImg.src = currentGroupImages[currentIndex].src;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % currentGroupImages.length;
    lightboxImg.src = currentGroupImages[currentIndex].src;
  }

  closeBtn.addEventListener("click", hideLightbox);
  prevBtn.addEventListener("click", showPrev);
  nextBtn.addEventListener("click", showNext);

  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
      if (e.key === "Escape") hideLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
  });


  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
      if (e.key === "Escape") hideLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

