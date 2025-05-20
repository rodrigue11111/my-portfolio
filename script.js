// Smooth scroll already handled by CSS

// Show/hide back to top button
window.onscroll = function () {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  // Scroll to top
  document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
