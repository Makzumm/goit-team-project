// const container = document.querySelector('.products-section__list');
// container.addEventListener('click', flipCard);
// function flipCard(event) {
//   if (!event.target.classList.contains('products-section__button')) {
//     return;
//   }
//   const card = event.target.closest('.products-section__item');
//   card.classList.toggle('is-flipped');
// }
const cards = document.querySelectorAll(".products-section__item");
for(let i = 0; i < cards.length; i++){
    const card = cards[i];
    card.addEventListener("click", function() {
        card.classList.toggle("is-flipped");
    });
}

//# sourceMappingURL=index.e5e95213.js.map
