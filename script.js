// Load saved theme from localStorage on every page
window.onload = () => {
  const theme = JSON.parse(localStorage.getItem("theme"));
  if (theme) {
    document.documentElement.style.setProperty("--primary-color", theme.primary);
    document.documentElement.style.setProperty("--background-color", theme.background);
    document.documentElement.style.setProperty("--text-color", theme.text);
  }
};

// Mobile menu toggle
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  if (navMenu) {
    navMenu.classList.toggle("active");
  }
}
function filterTools() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const cards = document.querySelectorAll(".tool-card");

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
}
function setTheme(primary, background, text) {
  document.documentElement.style.setProperty('--primary-color', primary);
  document.documentElement.style.setProperty('--background-color', background);
  document.documentElement.style.setProperty('--text-color', text);

  const heroText = document.getElementById('hero-subtext');
  if (heroText) {
    if (primary === '#444444' && background === '#dcdcdc' && text === '#000000') {
      // Theme 7: Gray Canvas / White Cards
      heroText.style.color = '#000000';
    } else {
      heroText.style.color = 'var(--text-color)';
    }
  }
}
