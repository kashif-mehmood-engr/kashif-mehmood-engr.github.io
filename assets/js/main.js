
// Read More buttons
document.addEventListener('click', function(e){
  const btn = e.target.closest('[data-readmore]');
  if(!btn) return;
  const sel = btn.getAttribute('data-readmore');
  const el = document.querySelector(sel);
  if(!el) return;
  const isHidden = el.classList.contains('hidden');
  if(isHidden){
    el.classList.remove('hidden');
    btn.textContent = btn.getAttribute('data-less') || 'Show Less';
  } else {
    el.classList.add('hidden');
    btn.textContent = btn.getAttribute('data-more') || 'Read More';
  }
});
