# FinBento 💹

📰 Real-time finance news • 🧘 Focus Mode • 🌓 Dark Mode • 🔁 Auto-Refresh • 📁 Saved Articles • ✍️ Blog • ⚡ Fast, Static, Serverless

![FinBento Icon](finfav.png)

> A bite-sized finance and investing news reader. FinBento keeps you in the loop — with clean headlines, curated sources, and no extra noise. Stay focused, stay informed.

---

## 📑 Table of Contents

- [📸 Demo](#-demo)
- [⭐ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [🤝 Contributing](#-contributing)
- [📁 Repo Structure](#-repo-structure)
- [📄 License](#-license)
- [🙏 Acknowledgements](#-acknowledgements)

---

## 📸 Demo

**FinBento**

Your daily bite of finance, investing, and money news.  
Curated from trustworthy sources. Filtered for clarity.

(COMING SOON)

---

## ⭐ Features

- 📈 **Real-time finance headlines** from trusted sources (MarketWatch, Seeking Alpha, CNBC, WSJ, etc.)
- 🔍 **Filter by source** — focus only on what you care about
- 🧘 **Focus Mode** — distraction-free reading view
- 🌓 **Dark Mode** — toggle anytime
- 📁 **Saved Articles** — save and export to read later
- 🔁 **Auto-refresh every 10 minutes** — always up to date
- 🔄 **Manual refresh button** — control when you want the latest
- ✍️ **Built-in blog** — behind-the-scenes insights and updates
- ⚡ **Lightweight, fast, and serverless** — deployed via Cloudflare Workers

---

## 🛠️ Tech Stack

- ☁️ **Cloudflare Workers** — combines API logic and static site delivery
- 💡 **Languages**: HTML, Vanilla JS, and CSS
- 💻 **No frameworks or build steps**
- 📂 **Single flat-file architecture** — simple, readable code

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for local testing, optional)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) for deployment

### Installation

```bash
git clone https://github.com/your-org/finbento.git
cd finbento
```

### Install Wrangler (if not already)

```bash
npm install -g @cloudflare/wrangler
```

### Development

```bash
wrangler login
wrangler pages dev
```

Then open `http://127.0.0.1:8787` in your browser.

### Deployment

```bash
wrangler pages publish .
```

---

## 🤝 Contributing

Pull requests and ideas welcome!

1. Fork the repo
2. Create a branch (`git checkout -b feature/your-feature`)
3. Commit with clear messages
4. Push to your fork and open a PR

> Whether it's bug fixes, content ideas, blog posts, or just feedback — we're all ears. Let's make FinBento better together!

---

## 📁 Repo Structure

```
index.html           # Main landing page
script.js            # Core site logic (rendering, filters, fetch)
style.css            # Layout and visual styles
favicon.ico          # Site icon
finfav.png           # App icon/logo
/blog/               # Blog posts (markdown or html)
```

---

## 📄 License

MIT — [View license »](LICENSE)

---

## 🙏 Acknowledgements

- Built with love and caffeine
- Inspired by simple, useful dashboards like ByteBento
- Thanks to Cloudflare Workers for powering the fast delivery
- Made with 🧠 + 📊 + ❤️