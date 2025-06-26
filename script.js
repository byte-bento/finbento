document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("news-container");

  try {
    const res = await fetch("https://purple-wind-2637.tough-bed6922.workers.dev");
    const articles = await res.json();

    if (!articles.length) {
      container.innerHTML = `<p>No articles available right now.</p>`;
      return;
    }

    container.innerHTML = articles.map(article => `
      <article class="card" data-source="${article.source}">
        <h2><a href="${article.link}" target="_blank" rel="noopener">${article.title}</a></h2>
        <p class="source">
          <span class="source-badge source-${article.source.toLowerCase().replace(/[^a-z0-9]/g, '')}">
            ${article.source}
          </span>
          ${article.pubDate ? ` — <span class="pub-date">${formatDate(article.pubDate)}</span>` : ''}
        </p>
        <p class="summary">${article.description || ''}</p>
      </article>
    `).join('');

    setupFiltering();

  } catch (err) {
    container.innerHTML = `<p>Failed to load news: ${err.message}</p>`;
  }

  // ✅ Focus Mode toggle
  const focusToggle = document.getElementById('focus-toggle');
  if (focusToggle) {
    focusToggle.addEventListener('click', () => {
      document.body.classList.toggle('focus-mode');
    });
  }

  // 🌙 Dark Mode toggle
  const darkToggle = document.getElementById('dark-mode-toggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
});

function formatDate(pubDate) {
  const date = new Date(pubDate);
  const options = { month: 'short', day: 'numeric' };

  if (pubDate.includes(":")) {
    options.hour = 'numeric';
    options.minute = '2-digit';
  }

  return date.toLocaleString('en-US', options);
}

function setupFiltering() {
  const buttons = document.querySelectorAll('.filter-button');
  const articles = document.querySelectorAll('.card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const selected = button.dataset.source.toLowerCase();

      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      articles.forEach(article => {
        const articleSource = article.dataset.source.toLowerCase();
        if (selected === 'all' || articleSource === selected) {
          article.style.display = '';
        } else {
          article.style.display = 'none';
        }
      });
    });
  });
}
