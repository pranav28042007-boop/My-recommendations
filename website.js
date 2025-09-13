
function searchTitles() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".card"); // selects all recommendation cards

  cards.forEach(card => {
    let title = card.querySelector("h3").innerText.toLowerCase();
    if(title.includes(input)) {
      card.style.display = "block"; // show matching card
    } else {
      card.style.display = "none";  // hide non-matching card
    }
  });
}


