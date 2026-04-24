// =========================================================================
// CUSTOM CURSOR
// =========================================================================
const cursor = document.getElementById("custom-cursor");
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

document.addEventListener("mousemove", (e) => { mouseX = e.clientX; mouseY = e.clientY; });
document.addEventListener("mouseleave", () => cursor.classList.add("hidden"));
document.addEventListener("mouseenter", () => cursor.classList.remove("hidden"));

(function tick() {
  cursorX += (mouseX - cursorX) * 0.2;
  cursorY += (mouseY - cursorY) * 0.2;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  requestAnimationFrame(tick);
})();

document.querySelectorAll("[data-cursor]").forEach(el => {
  el.addEventListener("mouseenter", () => {
    const t = el.getAttribute("data-cursor");
    if (t === "hover") cursor.classList.add("is-hover");
    if (t === "view")  cursor.classList.add("is-view");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("is-hover", "is-view");
  });
});

// =========================================================================
// LOADER
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  function initScrollReveal() {
    // =========================================================================
    // SCROLL REVEAL — runs AFTER content-ready so in-viewport elements trigger
    // =========================================================================
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll(".rev").forEach(el => io.observe(el));
  }

  // Skip the loader when returning from a sub-page (back=1 param)
  const isBack = new URLSearchParams(window.location.search).get("back") === "1";

  if (isBack) {
    // Instantly remove loader and reveal content
    loader.remove();
    document.body.style.overflowY = "auto";
    document.body.classList.add("content-ready");
    setTimeout(initScrollReveal, 50);
    // Clean the URL without triggering a reload
    history.replaceState(null, "", window.location.pathname);
  } else {
    setTimeout(() => {
      loader.classList.add("loaded");
      setTimeout(() => {
        document.body.style.overflowY = "auto";
        document.body.classList.add("content-ready");
        // Small delay lets the browser paint the revealed wrapper before
        // IntersectionObserver fires, so above-the-fold .rev elements are caught
        setTimeout(initScrollReveal, 100);
        setTimeout(() => loader.remove(), 1500);
      }, 500);
    }, 3200);
  }
});
