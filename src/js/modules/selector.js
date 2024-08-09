export const selector = () => {
  const selectors = document.querySelectorAll(".selector");

  if (selectors) {
    selectors.forEach((selector) => {
      const selectorBtn = selector.querySelector(".selector-btn");
      const selectorInputs = selector.querySelectorAll("label");
      selectorBtn.addEventListener("click", (e) => {
        if (selector.className.includes("active")) {
          selector.classList.remove("active");
        } else {
          selector.classList.add("active");
        }
      });
      selector.addEventListener("mouseleave", () => {
        selector.classList.remove("active");
      });
      selectorInputs.forEach((label) => {
        label.addEventListener("change", (e) => {
          const textBtn = selectorBtn.querySelector("p");
          textBtn.textContent = e.target.nextElementSibling.textContent;
          selector.classList.remove("active");
        });
      });
    });
  }
};
