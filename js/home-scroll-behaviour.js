const coop_card = document.querySelectorAll(".coop-section__card");
const references_card = document.querySelector(".references-section__card-box");

//observer options
const options = { threshold: 0, rootMargin: "-40%" };

//coop_card box detector
const coop_card__observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("show--coop");
  });
}, options);

const references_card__observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("show--references");
  });
}, options);

//giving each coop card a observator
coop_card.forEach((elem) => {
  coop_card__observer.observe(elem);
});

references_card__observer.observe(references_card);
