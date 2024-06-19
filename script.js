document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("scrollToUp").addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});