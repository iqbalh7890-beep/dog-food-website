// script.js

// Sticky Header Background
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.background = "#111";
    header.style.transition = "0.3s";
  } else {
    header.style.background = "rgba(0,0,0,0.4)";
  }
});


// Mobile Menu Toggle
const menuBtn = document.createElement("div");
menuBtn.classList.add("menu-btn");
menuBtn.innerHTML = "☰";

document.querySelector(".nav").appendChild(menuBtn);

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Smooth Scroll
document.querySelectorAll('a[href="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});


// Fade In Animation On Scroll
const fadeElements = document.querySelectorAll(
  ".product-card, .service-box, .testimonial-card, .about-content, .about-image"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });
  },
  {
    threshold: 0.2,
  }
);

fadeElements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});


// Counter Animation
const counters = document.querySelectorAll(".stat-box h3");

const speed = 100;

counters.forEach((counter) => {

  const animate = () => {

    const value = +counter.innerText.replace(/\D/g, "");
    const data = +counter.getAttribute("data-count");

    const time = data / speed;

    if (value < data) {
      counter.innerText = Math.ceil(value + time) + "+";
      setTimeout(animate, 20);
    } else {
      counter.innerText = data + "+";
    }
  };

  counter.innerText = "0";
  animate();

});


// Simple Product Hover Sound Effect
const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px) scale(1)";
  });

});


// Scroll To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {
    topBtn.classList.add("show-top");
  } else {
    topBtn.classList.remove("show-top");
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

});
