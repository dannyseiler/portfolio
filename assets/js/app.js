//Menu Responsive

window.onload = function () {
  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 100) {
      document.querySelector("header").classList.add("is-scrolling");
    } else {
      document.querySelector("header").classList.remove("is-scrolling");
    }
  });

  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
};

/*
// Switch
const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  // Guardamos el modo en localstorage.
  if(document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode','true');
  } else {
    localStorage.setItem('dark-mode', 'false');
  }
});

// Obtenemos el modo actual.
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}
*/