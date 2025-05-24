// show / hide back-to-top button
window.addEventListener("scroll", () => {
  const btn = document.getElementById("backToTop");
  btn.style.display =
    document.documentElement.scrollTop > 120 ? "block" : "none";
});

// smooth scroll to top
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
