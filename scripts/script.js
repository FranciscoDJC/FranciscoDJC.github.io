document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img"); 

  images.forEach(img => {
    img.style.transition = "box-shadow 0.3s ease";

    img.addEventListener("mouseenter", () => {
      img.style.boxShadow = "0 0 20px 5px #d5a1a3";
    });

    img.addEventListener("mouseleave", () => {
      img.style.boxShadow = "none";
    });
  });
});
