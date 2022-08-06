const cards = document.querySelectorAll('.products-section__item');
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
  });
}
