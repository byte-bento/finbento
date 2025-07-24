document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("news-container");
  const savedArticlesList = document.getElementById("saved-articles-list");
  const savedDrawer = document.getElementById("saved-drawer");
  const toggleSavedBtn = document.getElementById("toggle-saved");
  const closeSavedBtn = document.getElementById("close-saved");
  const clearSavedBtn = document.getElementById("clear-saved");
  const exportSavedBtn = document.getElementById("export-saved");

  try {
    const res = await fetch("https://purple-wind-2637.tough-bed6922.workers.dev");
    let articles = await res.json();

    articles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    if (!articles.length) {
      container.innerHTML = `<p>No articles available right now.</p>`;
      return;
    }

    container.innerHTML = articles.map(article => {
      const savedId = encodeURIComponent(article.link);
      return `
        <article class="card" data-source="${article.source}" data-id="${savedId}">
          <h2><a href="${article.link}" target="_blank" rel="noopener">${article.title}</a></h2>
          <p class="source">
            <span class="source-badge source-${article.source.toLowerCase().replace(/[^a-z0-9]/g, '')}">
              ${article.source}
            </span>
            ${article.pubDate ? ` <strong class="dot">•</strong> <span class="pub-date">${formatDate(article.pubDate)}</span>` : ''}
          </p>
          <p class="summary">${article.description || ''}</p>
          <div class="card-footer">
            <button class="save-button" data-id="${savedId}">📌 Save</button>
          </div>
        </article>
      `;
    }).join('');

    setupFiltering();
    setupSaveButtons();

    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
      const now = new Date();
      lastUpdated.textContent = `🕒 Last updated: ${now.toLocaleString()}`;
    }

    const refreshButton = document.getElementById('refresh-button');
    if (refreshButton) {
      refreshButton.addEventListener('click', () => location.reload());
    }

  } catch (err) {
    container.innerHTML = `<p>Failed to load news: ${err.message}</p>`;
  }

  // ✅ Focus Mode toggle
  const focusToggle = document.getElementById('focus-toggle');
  if (focusToggle) {
    focusToggle.addEventListener('click', () => {
      document.body.classList.toggle('focus-mode');
      focusToggle.classList.toggle('active');
    });
  }

  // 🌙 Dark Mode toggle
  const darkToggle = document.getElementById('dark-mode-toggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  // 📁 Saved drawer toggle
  toggleSavedBtn?.addEventListener('click', () => {
    savedDrawer.classList.toggle('hidden');
    renderSavedArticles();
  });

  closeSavedBtn?.addEventListener('click', () => {
    savedDrawer.classList.add('hidden');
  });

  clearSavedBtn?.addEventListener('click', () => {
    localStorage.removeItem("savedArticles");
    renderSavedArticles();
  });

  exportSavedBtn?.addEventListener('click', () => {
    const saved = getSavedArticles();
    const blob = new Blob([JSON.stringify(saved, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "saved-articles.json";
    a.click();

    URL.revokeObjectURL(url);
  });

  function setupSaveButtons() {
    document.querySelectorAll(".save-button").forEach(button => {
      button.addEventListener("click", () => {
        const card = button.closest(".card");
        const id = card.dataset.id;
        const title = card.querySelector("h2").textContent;
        const link = card.querySelector("a").href;
        const source = card.dataset.source;
        const date = card.querySelector(".pub-date")?.textContent || "";
        const summary = card.querySelector(".summary")?.textContent || "";

        const saved = getSavedArticles();
        if (!saved[id]) {
          saved[id] = { title, link, source, date, summary };
          localStorage.setItem("savedArticles", JSON.stringify(saved));
          renderSavedArticles();
          showToast("📌 Article saved!");
        }
      });
    });
  }

  function renderSavedArticles() {
    const saved = getSavedArticles();
    if (!saved || Object.keys(saved).length === 0) {
      savedArticlesList.innerHTML = "<p>No saved articles yet.</p>";
      return;
    }

    savedArticlesList.innerHTML = Object.entries(saved).map(([id, article]) => `
      <div class="card saved-card" data-id="${id}">
        <h2><a href="${article.link}" target="_blank" rel="noopener">${article.title}</a></h2>
        <p class="source"><strong>${article.source}</strong> • <span class="pub-date">${article.date}</span></p>
        <p class="summary">${article.summary}</p>
        <div class="remove-container">
          <button class="remove-button" data-id="${id}">🗑️ Remove</button>
        </div>
      </div>
    `).join('');

    document.querySelectorAll(".remove-button").forEach(button => {
      button.addEventListener("click", () => {
        const id = button.dataset.id;
        const saved = getSavedArticles();
        delete saved[id];
        localStorage.setItem("savedArticles", JSON.stringify(saved));
        renderSavedArticles();
      });
    });
  }

  function getSavedArticles() {
    return JSON.parse(localStorage.getItem("savedArticles") || "{}");
  }

   // 🔄 Auto-refresh every 10 minutes (600,000ms)
  setInterval(() => {
    location.reload();
  }, 600000);

  console.log("🔄 Auto-refresh is enabled for FinBento."); 
});

function showToast(message = "Saved!") {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 2000);
}

function formatDate(pubDate) {
  const date = new Date(pubDate);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function setupFiltering() {
  const buttons = document.querySelectorAll('.filter-button[data-source]');
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
