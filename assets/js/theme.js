
// Persist theme
(function initTheme(){
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') document.documentElement.classList.add('dark');
  if (saved === 'light') document.documentElement.classList.remove('dark');
})();

function toggleTheme(){
  const el = document.documentElement;
  const isDark = el.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
