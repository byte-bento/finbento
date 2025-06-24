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
      <article class="card">
        <h2><a href="${article.link}" target="_blank" rel="noopener">${article.title}</a></h2>
        <p class="source">${article.source}${article.pubDate ? ` — ${new Date(article.pubDate).toLocaleDateString()}` : ''}</p>
        <p class="summary">${article.description || ''}</p>
      </article>
    `).join('');
  } catch (err) {
    container.innerHTML = `<p>Failed to load news: ${err.message}</p>`;
  }
});
