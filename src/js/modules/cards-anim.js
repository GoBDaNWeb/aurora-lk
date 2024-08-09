export const cardsAnim = () => {
  const eventCards = document.querySelectorAll(".event-card-wrapper");
  const boatsCards = document.querySelectorAll(".boat-card ");
  eventCards.forEach((card) => {
    const pagination = card.querySelector(".event-pagination");
    card.addEventListener("mouseenter", () => {
      pagination.classList.add("anim");
    });
    card.addEventListener("mouseleave", () => {
      pagination.classList.remove("anim");
    });
  });

  boatsCards.forEach((card) => {
    const pagination = card.querySelector(".boat-pagination");
    card.addEventListener("mouseenter", () => {
      pagination.classList.add("anim");
    });
    card.addEventListener("mouseleave", () => {
      pagination.classList.remove("anim");
    });
  });
};
