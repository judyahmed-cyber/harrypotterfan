var cards = document.querySelectorAll(".card");
cards.forEach(function(card) {
  card.onclick = function() {
    card.classList.toggle("flipped");
  }
});
