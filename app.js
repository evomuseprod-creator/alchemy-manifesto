document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const fullInput = document.getElementById('full-input');
  const ch1Input = document.getElementById('ch1-input');
  const ch2Input = document.getElementById('ch2-input');
  const ch3Input = document.getElementById('ch3-input');
  const ch4Input = document.getElementById('ch4-input');
  const clientNameInput = document.getElementById('client-name');

  const btnLoadDemo = document.getElementById('btn-load-demo');
  const btnGenerate = document.getElementById('btn-generate');
  const btnBack = document.getElementById('btn-back');
  const btnCopy = document.getElementById('btn-copy');
  const btnDownloadMd = document.getElementById('btn-download-md');
  const btnPrintPdf = document.getElementById('btn-print-pdf');

  const inputSection = document.getElementById('input-section');
  const loadingSection = document.getElementById('loading-section');
  const resultSection = document.getElementById('result-section');
  const manifestoDisplay = document.getElementById('manifesto-display');
  const loadingMessage = document.getElementById('loading-message');

  let currentRawMarkdown = '';
  let loadingInterval = null;

  const loadingPhrases = [
    "Analyzing early childhood conditioning and survival reflexes...",
    "Decoding the root emotional drivers behind material goals...",
    "Reframing self-doubt into unintegrated potential...",
    "Harmonizing role models with the emerging archetype...",
    "Forging the Future Self identity manifesto...",
    "Drafting the formal Personal Transformation Agreement..."
  ];

  // Tab switching
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetTab = document.getElementById(btn.dataset.tab);
      if (targetTab) targetTab.classList.add('active');
    });
  });

  // Load Demo Data
  btnLoadDemo.addEventListener('click', () => {
    clientNameInput.value = "Dzikri Feeroz";

    ch1Input.value = `1. Dzikri Feeroz, 29
2. Tough childhood, bullied in school and by brothers, abusive parents. Smiled through it. Low self-trust, cloudy vision of potential. Joined a friend's business for 2 years with broken promises.
3. Videography & production background. Switched to social media videographer. Underpaid and felt cheated ($400 vs $2,000). Learned the importance of fairness. Later joined another business doing flyers/roadshows with no strategy; earned $200/mo over 3 years.
4. Uncle's bungalow represents the Hari Raya gathering and the goal to provide safety, dignity, and a warm family home with Rolls Royce and BMW.
5. Father was high-ranking officer who gave money easily, creating laziness. After divorce, faced hunger and poverty. Recently woke up, worked hard, and paid off loans in 1.5 months.
6. Hard to trust people. Quitted job for business that didn't deliver.
7. Survived hard times, realized ability to work and earn fast when needed. Craves a mentor.
8. Paid off loans by earning ~$5,000 recently. Proved capacity to work hard.
9. Quits halfway when progress isn't immediate. Perfectionism without execution.`;

    ch2Input.value = `1. Wants to be wealthy, retreats to comfortable delivery job when hitting struggle. Lacks patience due to past failures.
2. Lives alone in Singapore apartment, working every day, starting to save.
3. Friends from the low-paying business. Recently stepped back.
4. Family is at a distance. Laughter now, but hard to share personal struggles.
5. Has a girlfriend, wants to provide comfort and allow her not to work.
6. Routine: Wakes up, Instagram, blocks shifts 9am-2pm and 4pm-8pm for food delivery. AI tinkering at night or YouTube.
7. Frustrated with delivery job, seeks vision and business leadership.
8. Earns ~$3k/month when active, zero if inactive. Paying off debt and phone plans.
9. Strengths: fast learner, goal-oriented when clear, AI curious. Weaknesses: procrastination, overthinking, easy way out.
10. Laziness, self-doubt, fear of the hard path.
11. Worries about money and becoming ordinary.`;

    ch3Input.value = `1. Alex Hormozi (truth, practical utility) & Andrew Tate (unapologetic confidence, self-belief).
2. Provide for family in next 5 years, financial freedom, own dream cars and home.
3. Freedom to provide, Audi R8 / BMW Z4, Pagani Huayra Roadster, Aston Martin Vanquish.
4. Dream home in New Zealand (mountains) or Dubai. Freedom and calm.
5. Audi R8, Aston Martin Vanquish, Pagani Huayra. Symbolizes control and pride.
6. Travel: New Zealand, Switzerland (green landscapes, open air).
7. Plain shirt and pants — clean, simple, effortless confidence.
8. Traveling, track driving.
9. Dream fitness: high energy, not feeling lazy, confident.
10. Perfect day: Coffee/tea, short focused work, quality dinner with family, swim/gym.`;

    ch4Input.value = `1. Money and security are primary driving factors.
2. Relieved to have income, frustrated at playing small.
3. Future self: Confident, action-oriented, disciplined, monetizing knowledge.
4. Traits: Self-discipline, Strong leader, Confidence, Patience, Growth mindset.
5. Limiting beliefs: Giving up easily, settling for soul-draining security.
6. Identity conflict: laziness vs. builder mindset.
7. Keystone change: DISCIPLINE. Sticking with work when excitement fades.
8. Greatest regret: Looking back in 3-5 years with half-built dreams.`;

    // Also populate full input
    fullInput.value = `CLIENT: Dzikri Feeroz, 29

--- CHAPTER 1: PERSONAL HISTORY ---
${ch1Input.value}

--- CHAPTER 2: CURRENT REALITY ---
${ch2Input.value}

--- CHAPTER 3: INSPIRATIONS & DREAM LIFE ---
${ch3Input.value}

--- CHAPTER 4: FUTURE SELF ---
${ch4Input.value}`;

    alert('Loaded Dzikri’s responses across all chapters!');
  });

  // Collect text from active inputs
  function collectQuestionnaireText() {
    if (fullInput.value.trim().length > 100) {
      return fullInput.value.trim();
    }

    const sections = [];
    if (ch1Input.value.trim()) sections.push(`### Chapter 1: Personal History\n${ch1Input.value.trim()}`);
    if (ch2Input.value.trim()) sections.push(`### Chapter 2: Current Reality\n${ch2Input.value.trim()}`);
    if (ch3Input.value.trim()) sections.push(`### Chapter 3: Inspirations & Dreams\n${ch3Input.value.trim()}`);
    if (ch4Input.value.trim()) sections.push(`### Chapter 4: Future Self\n${ch4Input.value.trim()}`);

    return sections.join('\n\n');
  }

  // Generate Manifesto Handler
  btnGenerate.addEventListener('click', async () => {
    const clientName = clientNameInput.value.trim() || 'Client';
    const text = collectQuestionnaireText();

    if (!text || text.length < 50) {
      alert('Please fill in your responses or paste your notes before generating.');
      return;
    }

    // Switch to loading
    inputSection.classList.add('hidden');
    resultSection.classList.add('hidden');
    loadingSection.classList.remove('hidden');

    let phraseIndex = 0;
    loadingMessage.textContent = loadingPhrases[0];
    loadingInterval = setInterval(() => {
      phraseIndex = (phraseIndex + 1) % loadingPhrases.length;
      loadingMessage.textContent = loadingPhrases[phraseIndex];
    }, 3500);

    try {
      const response = await fetch('/.netlify/functions/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: clientName,
          questionnaireText: text
        })
      });

      clearInterval(loadingInterval);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with ${response.status}`);
      }

      const data = await response.json();
      currentRawMarkdown = data.manifesto;

      // Render Markdown
      manifestoDisplay.innerHTML = marked.parse(currentRawMarkdown);

      // Show Results
      loadingSection.classList.add('hidden');
      resultSection.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (err) {
      clearInterval(loadingInterval);
      loadingSection.classList.add('hidden');
      inputSection.classList.remove('hidden');
      alert(`Generation failed: ${err.message}\n\nMake sure DEEPSEEK_API_KEY is configured in Netlify environment variables.`);
    }
  });

  // Edit / Back button
  btnBack.addEventListener('click', () => {
    resultSection.classList.add('hidden');
    inputSection.classList.remove('hidden');
  });

  // Copy Markdown
  btnCopy.addEventListener('click', () => {
    if (!currentRawMarkdown) return;
    navigator.clipboard.writeText(currentRawMarkdown).then(() => {
      const originalText = btnCopy.textContent;
      btnCopy.textContent = 'Copied!';
      setTimeout(() => btnCopy.textContent = originalText, 2000);
    });
  });

  // Download Markdown file
  btnDownloadMd.addEventListener('click', () => {
    if (!currentRawMarkdown) return;
    const blob = new Blob([currentRawMarkdown], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(clientNameInput.value || 'Client').replace(/\s+/g, '_')}_Alchemy_of_Self_Manifesto.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // Print / Save as PDF
  btnPrintPdf.addEventListener('click', () => {
    window.print();
  });
});
