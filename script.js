// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple Lightbox for Gallery Images
const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
      <span class="close">&times;</span>
      <img src="${img.src}" alt="${img.alt}" class="lightbox-content">
    `;
    document.body.appendChild(lightbox);

    lightbox.querySelector('.close').addEventListener('click', () => {
      document.body.removeChild(lightbox);
    });
  });
});

// Newsletter Popup (optional)
window.addEventListener('load', () => {
  if(!localStorage.getItem('newsletterShown')) {
    setTimeout(() => {
      document.querySelector('.newsletter').style.display = 'block';
    }, 3000);
    localStorage.setItem('newsletterShown', 'true');
  }
});