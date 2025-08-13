// theme toggle (simple)
const themeBtn = document.getElementById('theme-toggle');
themeBtn?.addEventListener('click', () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme') || 'light';
  html.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
  themeBtn.textContent = current === 'light' ? '☀️' : '🌙';
});

// fetch products and render
let products = [];
const productsContainer = document.getElementById('products');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filter-btn');

fetch('books.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    renderProducts('all');
  })
  .catch(err => {
    console.error('Failed to load products:', err);
    if (productsContainer) productsContainer.innerHTML = '<p>Failed to load products.</p>';
  });

function renderProducts(filter = 'all', query = '') {
  if (!productsContainer) return;
  const q = query.trim().toLowerCase();
  const filtered = products.filter(p => {
    if (filter !== 'all' && p.type !== filter) return false;
    if (!q) return true;
    return (p.title + ' ' + (p.author||'') + ' ' + (p.description||'')).toLowerCase().includes(q);
  });

  if (filtered.length === 0) {
    productsContainer.innerHTML = '<p>No items found.</p>';
    return;
  }

  productsContainer.innerHTML = filtered.map(p => `
    <article class="card">
      <img src="${p.thumbnail}" alt="${p.title}">
      <div class="card-body">
        <h3>${p.title}</h3>
        <p>${p.author || ''}</p>
        <p class="price">₦${p.price}</p>
        <div class="actions">
          <button class="btn view" onclick="viewProduct(${p.id})">View</button>
          <button class="btn buy" onclick="buyProduct(${p.id})">Buy</button>
        </div>
      </div>
    </article>
  `).join('');
}

// filter buttons
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.getAttribute('data-filter');
    renderProducts(f, searchInput?.value || '');
  });
});

// search
searchInput?.addEventListener('input', (e) => {
  const active = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
  renderProducts(active, e.target.value);
});

// navigation helpers
function viewProduct(id) {
  window.location.href = `product.html?id=${id}`;
}
function buyProduct(id) {
  window.location.href = `checkout.html?id=${id}`;
}

// expose to window so buttons can call them
window.viewProduct = viewProduct;
window.buyProduct = buyProduct;
