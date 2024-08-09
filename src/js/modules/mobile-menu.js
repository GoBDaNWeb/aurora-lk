export const mobileMenu = () => {
  try {
    const menu = document.querySelector(".menu");
    const closeBtn = menu.querySelector(".close-btn");
    const burger = document.querySelector(".burger");
    burger.addEventListener("click", () => {
      if (!menu.className.includes("active")) {
        menu.classList.add("active");
        burger.classList.add("active");
        document.body.style.overflow = "hidden";
      } else {
        menu.classList.remove("active");
        burger.classList.remove("active");
        document.body.removeAttribute("style");
      }
    });
    window.addEventListener("resize", (e) => {
      if (window.innerWidth >= 1400) {
        menu.classList.remove("active");
        document.body.removeAttribute("style");
      }
    });
    window.addEventListener("click", (e) => {
      if (e.target === menu) {
        menu.classList.remove("active");
        document.body.removeAttribute("style");
      }
    });
    closeBtn.addEventListener("click", (e) => {
      menu.classList.remove("active");
      document.body.removeAttribute("style");
    });
  } catch (e) {
    return e;
  }
};
