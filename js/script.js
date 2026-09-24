const revealItems = document.querySelectorAll(".reveal");
const prototypeVideos = document.querySelectorAll(".prototype-video");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("reveal-visible"));
}

if ("IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play().catch(() => {});
          return;
        }

        video.pause();
      });
    },
    {
      threshold: 0.65,
    }
  );

  prototypeVideos.forEach((video) => videoObserver.observe(video));
}

const fintaGallery = document.querySelector(".finta-gallery");

if (fintaGallery) {
  const slides = Array.from(fintaGallery.querySelectorAll(".finta-slide"));
  const dots = Array.from(fintaGallery.querySelectorAll("[data-gallery-index]"));
  const count = fintaGallery.querySelector(".finta-gallery-count");
  const label = fintaGallery.querySelector(".finta-gallery-label");
  let activeSlide = 0;

  const showSlide = (index) => {
    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === activeSlide);
    });
    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeSlide;
      dot.classList.toggle("is-active", isActive);
      if (isActive) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
    count.textContent = `${String(activeSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    label.textContent = slides[activeSlide].dataset.label;
  };

  fintaGallery.querySelectorAll("[data-gallery-step]").forEach((button) => {
    button.addEventListener("click", () => {
      showSlide(activeSlide + Number(button.dataset.galleryStep));
    });
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => showSlide(Number(dot.dataset.galleryIndex)));
  });
}
