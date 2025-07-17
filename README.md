# 🧠 Story Pointing Tool

A lightweight, free-to-host web tool for remote agile teams to estimate story points collaboratively during refinement ceremonies. Built with Node.js and Express, this tool allows team members to vote using the Fibonacci scale (1, 2, 3, 5, 8) and view shared results in real time.

---

## 🚀 Features

- Vote on story points using the Fibonacci sequence (1, 2, 3, 5, 8)
- Accessible via a single public URL — no login required
- Requires a **name** to vote, while **story ID** is optional
- Reveal votes only when the team is ready
- Clear votes between stories to reuse the session
- Deployed on [Render](https://render.com) or similar zero-cost hosting platforms

---

## 📦 Tech Stack

- **Frontend:** Vanilla HTML, CSS, and JavaScript
- **Backend:** Node.js + Express
- **Hosting:** Render, Vercel, or any Node.js-compatible provider

---

## 🛠 How to Use

1. Enter your **name** (required)
2. Optionally enter a **story ID**
3. Click one of the point buttons (1, 2, 3, 5, or 8)
4. Once everyone has voted, click **"Reveal Votes"**
5. Click **"Clear Votes"** to reset the session for the next story

---

## 🧪 Running Locally

```bash
git clone https://github.com/your-username/story-pointing-tool.git
cd story-pointing-tool
npm install
npm start
