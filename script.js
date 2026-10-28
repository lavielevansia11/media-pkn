// Navigation between material topics
const nav = document.getElementById('topicNav');
const topics = document.querySelectorAll('.topic');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('backdrop');
const menuToggle = document.getElementById('menuToggle');

function showTopic(key) {
  topics.forEach(t => t.classList.toggle('is-active', t.dataset.topic === key));
  nav.querySelectorAll('.topic-btn').forEach(b =>
    b.classList.toggle('is-active', b.dataset.topic === key)
  );
  document.getElementById('content').scrollTo?.({ top: 0 });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMenu();
}

nav.addEventListener('click', e => {
  const btn = e.target.closest('.topic-btn');
  if (btn) showTopic(btn.dataset.topic);
});

// Mobile menu
function closeMenu() {
  sidebar.classList.remove('is-open');
  menuToggle.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  backdrop.hidden = true;
}

menuToggle.addEventListener('click', () => {
  const open = !sidebar.classList.contains('is-open');
  sidebar.classList.toggle('is-open', open);
  menuToggle.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  backdrop.hidden = !open;
});

backdrop.addEventListener('click', closeMenu);
