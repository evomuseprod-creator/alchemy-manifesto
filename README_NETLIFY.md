# Alchemy of Self — Netlify Web Application

This web application allows you and your friends to fill in (or paste) your questionnaire answers and immediately generate a complete, elevated **Alchemy of Self Manifesto** powered by the **DeepSeek API**.

---

## 🌟 Why DeepSeek?
- **Ultra-affordable:** DeepSeek V3 costs ~\$0.14 per million tokens. Generating a complete 4-part manifesto costs less than **\$0.002 (a fraction of a cent)**!
- **Fast & Capable:** Delivers nuanced, high-level psychological prose and follows long-form system instructions.
- **Secure:** Your `DEEPSEEK_API_KEY` stays safely on Netlify's serverless backend (`netlify/functions/generate.js`) and is **never** visible to users or in browser dev tools.

---

## 🚀 How to Deploy to Netlify (Step-by-Step)

### Step 1: Get your DeepSeek API Key
1. Go to [platform.deepseek.com](https://platform.deepseek.com/).
2. Sign up and top up a few dollars (even \$2–\$5 will generate thousands of manifestos).
3. Navigate to **API Keys** and click **Create new secret key**.
4. Copy the key (starts with `sk-...`).

---

### Step 2: Deploy to Netlify

#### Method A: Using Git / GitHub (Recommended)
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Alchemy of Self manifesto generator"
   # Create a repo on GitHub and push:
   git remote add origin https://github.com/YOUR_USERNAME/alchemy-manifesto.git
   git push -u origin main
   ```
2. Go to [netlify.com](https://www.netlify.com/) and click **"Add new site"** → **"Import an existing project"**.
3. Select your GitHub repository.
4. In **Site Configuration**:
   - Build command: *(leave blank)*
   - Publish directory: `.`
   - Functions directory: `netlify/functions`
5. Click **Add environment variables**:
   - **Key:** `DEEPSEEK_API_KEY`
   - **Value:** `sk-your-deepseek-api-key-here`
6. Click **Deploy site**.
7. In under 30 seconds, Netlify will give you a public URL (e.g. `https://alchemy-of-self.netlify.app`) that you can share with all your friends!

---

#### Method B: Using Netlify CLI (Fastest from Terminal)
If you have node installed:
```bash
npm install -g netlify-cli
netlify login
netlify init
# Set the environment variable:
netlify env:set DEEPSEEK_API_KEY "sk-your-deepseek-api-key-here"
# Deploy live to production:
netlify deploy --prod
```

---

## 📱 How Your Friends Use It
1. They open the Netlify link on their phone or laptop.
2. They enter their name and answer the questions across Chapters 1 to 4 (or click **"Load Demo Answers"** to test with an example).
3. They tap **"Generate My Manifesto"**.
4. The web app sends the request to the secure Netlify function, which calls DeepSeek with the master psychological framework.
5. In ~10–15 seconds, the full manifesto appears on screen!
6. Friends can:
   - Read and reflect on their personalized creed.
   - Click **"Print / Save as PDF"** to generate a clean PDF formatted like a book.
   - Click **"Download .md"** or **"Copy Text"** to save to Notion, Apple Notes, or Word.
