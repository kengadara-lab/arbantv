// Header Component Script
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("[data-toggle]");
  const nav = document.querySelector("[data-nav]");

  toggle?.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });

  // Active link switching
  document.querySelectorAll(".atv-nav__link").forEach(link => {
    link.addEventListener("click", function () {
      document.querySelectorAll(".atv-nav__link")
        .forEach(l => l.classList.remove("is-active"));
      this.classList.add("is-active");
    });
  });
});
