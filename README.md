# FinBento 📊

[![GitHub stars](https://img.shields.io/github/stars/byte-bento/finbento?style=social)](https://github.com/byte-bento/finbento/stargazers)
[![open source](https://img.shields.io/badge/open%20source-Yes-brightgreen.svg)](https://opensource.org)
![Project Type](https://img.shields.io/badge/type-project-blue)
![Platform](https://img.shields.io/badge/platform-Cloudflare%20Workers-black)
![Hosting](https://img.shields.io/badge/hosting-Cloudflare-orange)
![Focus](https://img.shields.io/badge/focus-tech%20news-9cf)
![Interface](https://img.shields.io/badge/interface-frontend--only-lightgrey)
![Architecture](https://img.shields.io/badge/architecture-serverless-yellow)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen)
![Built With](https://img.shields.io/badge/built%20with-curiosity%20%26%20caffeine-ff69b4)

📰 Real-time finance news • 🧘 Focus Mode • 🌓 Dark Mode • 🔁 Auto-Refresh • 📁 Saved Articles • ✍️ Blog • ⚡ Fast, Static, Serverless

![FinBento Icon](finfav.png)

> A bite-sized finance and investing news reader. FinBento keeps you in the loop — with clean headlines, curated sources, and no extra noise. Stay focused, stay informed.

**🔗 Visit the live site:**<br>
[https://finbento.com](https://finbento.com)

**☕ If you find FinBento useful:**<br>
<a href='https://ko-fi.com/O4O81GA31F' target='_blank'>Buy me a coffee at ko-fi.com</a> to help me keep the lights on!

---

## 📋 Table of Contents

- 🌐 [Demo](#demo)
  - [Screenshot](#screenshot)
  - [GIF](#gif)
- ✨ [Features](#features)
- 💻 [Tech Stack](#tech-stack)
- 🏁 [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Deployment](#deployment)
- 🗺️ [Roadmap](#roadmap)
- 🤝 [Contributing](#contributing)
- 📁 [Repo Structure](#repo-structure)
- 📄 [License](#license)
- 🙏 [Acknowledgements](#acknowledgements)

---

## 🌐 Demo

**FinBento**

Your daily bite of finance, investing, and money news.  
Curated from trustworthy sources. Filtered for clarity.

(COMING SOON)

---

## ✨ Features

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

## 💻 Tech Stack

🌀 **Hosted entirely via Cloudflare Workers** – combines serverless API logic and static content delivery in a single deployment.

- **Platform & Hosting:** Cloudflare Workers (API + static assets)
- **Language & Frameworks:** Vanilla JavaScript, HTML, CSS
- **Storage:** Browser LocalStorage
- **Version Control:** Git & GitHub
- **No frameworks, no build step** — just clean, readable code!

---

## 🏁 Getting Started

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

## 🗺️ Roadmap

(COMING SOON)

---

## 🤝 Contributing

Want to improve FinBento or suggest a new feature? Awesome! We welcome all kinds of contributions, so let's make FinBento better together! 

To get started:

1. Fork the repo
2. Create a branch (`git checkout -b feature/awesome-thing`)
3. Make your changes & commit with clear messages
4. Push to your fork (`git push origin feature/awesome-thing`)
5. Open a Pull Request against `main`

Be sure to:

- Review [existing issues](https://github.com/byte-bento/finbento/issues) and add your thoughts
- Label any bugs you find or feature ideas you want to tackle
- Follow consistent code style (ESLint rules if you introduce new JS)

🪄 Whether it’s code, docs, or just ideas - contributions of all kinds are appreciated. 

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
