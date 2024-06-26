const header = document.querySelector("header");

const Counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

window.addEventListener("scroll", () => {
   ml_counters();
});

/* -------- Sticky Navbar -------- */

function stickyNavbar() {
   header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

let sr = ScrollReveal({
   duration: 2500,
   distance: "60px"
});

sr.reveal(".showcase-info", {delay: 600});
sr.reveal(".showcase-image", {origin: "top", delay: 700});

/* -------- Service Counter Animation -------- */

let activated = false;
window.addEventListener("scroll", () => {
   if (pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated == false) {
      Counters.forEach(Counter => {
         Counter.innerText = 0;

         let count = 0;

         function updateCount() {
            const target = parseInt(Counter.dataset.count);
            if (count < target) {
               count++;
               Counter.innerText = count;
               setTimeout(updateCount, 150);
            } else {
               Counter.innerText = target; 
            }
         }
         updateCount();
         activated = true;
      });
} else if (pageYOffset < container.offsetTop - container.offsetHeight - 500 
   || pageYOffset === 0 && activated === true) {
   Counters.forEach(Counter => {
      Counter.innerText = 0;
   });
   activated = false;
}
});

/* -------- Change Page Theme -------- */

const toggle_btn = document.querySelector(".toggle-btn");

let firstTheme = localStorage.getItem("dark");

changeTheme(+firstTheme);

function changeTheme(isDark) {
   if(isDark) {
      document.body.classList.add("dark");
      toggle_btn.classList.replace("uil-moon", "uil-sun");
      localStorage.setItem("dark", 1);
   } else {
      document.body.classList.remove("dark");
      toggle_btn.classList.replace("uil-sun", "uil-moon");
      localStorage.setItem("dark", 0);
   }
}

toggle_btn.addEventListener("click", () => {
   changeTheme(!document.body.classList.contains("dark"));
});

/* -------- Hamburger -------- */
// Assuming links are anchors in your navigation menu
const links = document.querySelectorAll(".nav-link");

document.addEventListener("DOMContentLoaded", function() {
   const hamburger = document.querySelector(".hamburger");
   const links = document.querySelectorAll(".nav-link"); // Adjust the selector accordingly

   hamburger.addEventListener("click", () => {
       document.body.classList.toggle("open");
       document.body.classList.toggle("stopScrolling");
   });

   links.forEach((link) => {
      link.addEventListener("click", () => {
          document.body.classList.remove("open");
          document.body.classList.remove("stopScrolling");
      });
   });
});