// Mobile menu toggle (works for index and other pages)
document.addEventListener('DOMContentLoaded', function () {
  // toggle nav when a button with id starts with menuBtn exists
  ['menuBtn','menuBtn2'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        // find nearest nav sibling
        const nav = btn.nextElementSibling || document.getElementById('nav') || document.getElementById('nav2');
        if (nav) {
          nav.style.display = (nav.style.display === 'flex' || nav.style.display === 'block') ? 'none' : 'block';
        }
      });
    }
  });

  // set year in footer placeholders
  for (let i=1;i<=9;i++){
    const el = document.getElementById('year' + i);
    if (el) el.textContent = new Date().getFullYear();
  }
});
