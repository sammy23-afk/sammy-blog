// === THEME TOGGLE ===
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Save preference in local storage
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Load saved theme preference on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
}

// === SEARCH BAR (placeholder) ===
const searchForm = document.querySelector('.search-bar');
if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchForm.querySelector('input').value.trim();
    if (query) {
      alert(`You searched for: ${query}\n(Search function coming soon!)`);
      // Later: filter blog posts or redirect to a search results page
    }
  });
}

// === BUBBLE LINKS ===
const aboutCircle = document.getElementById('aboutCircle');
const featuredCircle = document.getElementById('featuredCircle');
const playlistCircle = document.getElementById('playlistCircle');
const connectCircle = document.getElementById('connectCircle');

if (aboutCircle) {
  aboutCircle.addEventListener('click', () => {
    window.location.href = "about.html";
  });
}

if (featuredCircle) {
  featuredCircle.addEventListener('click', () => {
    window.location.href = "featured.html";
  });
}

if (playlistCircle) {
  playlistCircle.addEventListener('click', () => {
    window.location.href = "playlists.html";
  });
}

if (connectCircle) {
  connectCircle.addEventListener('click', () => {
    window.location.href = "connect.html";
  });
}

// === BUBBLE HOVER ANIMATION ===
const circles = document.querySelectorAll('.circle-card');
circles.forEach(circle => {
  circle.addEventListener('mouseover', () => {
    circle.style.transform = 'scale(1.08)';
  });
  circle.addEventListener('mouseout', () => {
    circle.style.transform = 'scale(1)';
  });
});
