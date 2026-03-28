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
