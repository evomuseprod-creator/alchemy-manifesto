/**
 * Alchemy of Self — Multi-Chapter Assessment Wizard
 * Contains all 38 individual questions across Chapters 1-4.
 * Completely generic and privacy-safe.
 */

const QUESTIONNAIRE_SCHEMA = {
  chapter1: {
    title: "Personal History & Foundation",
    questions: [
      {
        id: "ch1_q1",
        num: 1,
        title: "What is your first name and how old are you?",
        prompt: "This information will be used to personalize your Alchemy of Self manifesto.",
        placeholder: "e.g. First Name, Age",
        type: "text"
      },
      {
        id: "ch1_q2",
        num: 2,
        title: "What was your childhood like overall and what were you told about yourself growing up?",
        prompt: "Describe the general atmosphere and environment you grew up in, along with the messages or beliefs your parents, teachers, or other important people instilled in you about your abilities, personality, or potential.",
        placeholder: "Reflect on your upbringing, family atmosphere, and early messages...",
        type: "textarea"
      },
      {
        id: "ch1_q3",
        num: 3,
        title: "What was your educational and early career path like?",
        prompt: "Include any major transitions, first jobs, or pivotal professional moments. How did you experience each phase - what did you feel about it at the time? What did these experiences teach you about yourself, work, or life in general? Share as much detail as you can about the journey and its impact on you.",
        placeholder: "Share your early career transitions, lessons learned about fairness and work...",
        type: "textarea"
      },
      {
        id: "ch1_q4",
        num: 4,
        title: "Add photos or describe your childhood home, neighborhood, or places that represent where you grew up.",
        prompt: "Explain in depth why you chose these places. What does each place or photo represent about your upbringing and the environment that shaped you.",
        placeholder: "Describe the places that shaped your childhood...",
        type: "textarea"
      },
      {
        id: "ch1_q5",
        num: 5,
        title: "Growing up, what role did money play in your household?",
        prompt: "Every family has its own relationship with money — whether it was talked about openly, avoided, tight, comfortable, or somewhere in between. Share whatever comes to mind about how it shaped the environment you grew up in.",
        placeholder: "Reflect on your early relationship with money, abundance, or scarcity...",
        type: "textarea"
      },
      {
        id: "ch1_q6",
        num: 6,
        title: "What are the defining moments, big or small, that shaped who you are today?",
        prompt: "These could be proud achievements, turning points, or harder experiences you had to move through. For each one, share what happened and the lesson or strength it left you with.",
        placeholder: "Key defining moments and the strengths they left you with...",
        type: "textarea"
      },
      {
        id: "ch1_q7",
        num: 7,
        title: "What has been the most significant life change or transition you've experienced in recent years?",
        prompt: "Describe what happened, why it was important, and how it changed you.",
        placeholder: "Recent pivots, major decisions, and personal shifts...",
        type: "textarea"
      },
      {
        id: "ch1_q8",
        num: 8,
        title: "Add a photo or describe a significant moment, achievement, or turning point from your past.",
        prompt: "Explain what this moment was and why it was so important to your story.",
        placeholder: "A specific milestone, proof of capability, or breakthrough moment...",
        type: "textarea"
      },
      {
        id: "ch1_q9",
        num: 9,
        title: "What patterns do you notice repeating in your life?",
        prompt: "What situations, relationship dynamics, or challenges keep showing up? Be very introspective here - what are certain belief systems that keep stopping you? What internal narratives or assumptions do you find yourself falling back into? Look beyond just the external events to examine the underlying thoughts, fears, or limiting beliefs that might be creating these cycles.",
        placeholder: "Repeating loops, fear of failure, procrastination, perfectionism...",
        type: "textarea"
      }
    ]
  },
  chapter2: {
    title: "Current Reality & Present Self",
    questions: [
      {
        id: "ch2_q1",
        num: 1,
        title: "How would you describe yourself right now in three sentences or less?",
        prompt: "Describe yourself as you actually are - your temperament, how you handle life, and what's going on in your mind these days.",
        placeholder: "Three honest sentences about who you are right now...",
        type: "textarea"
      },
      {
        id: "ch2_q2",
        num: 2,
        title: "Where do you currently live, and what is your living situation like?",
        prompt: "Tell us about your living situation - who do you live with, what's the space like, what do you love or dislike about it? How does your current environment affect your daily life and mood?",
        placeholder: "City, living space, environment, mood impact...",
        type: "textarea"
      },
      {
        id: "ch2_q3",
        num: 3,
        title: "Describe or share your current friends, group, or the people you spend the most time with.",
        prompt: "Tell us about the people you spend time with these days — old friends, new connections, or a mix. What role do they play in your life right now?",
        placeholder: "Your circle, community, colleagues, friends...",
        type: "textarea"
      },
      {
        id: "ch2_q4",
        num: 4,
        title: "Describe your family relationships.",
        prompt: "How do you feel about your family relationships? What role does your family play in your current life? Are these relationships close, complicated, supportive, or distant? How has your family shaped who you are today? What are the dynamics like, and how much influence do they have on your life decisions and daily experience? Share as much detail as you can about your family connections and how they impact you.",
        placeholder: "Dynamics with family members, emotional closeness or distance...",
        type: "textarea"
      },
      {
        id: "ch2_q5",
        num: 5,
        title: "What is your current relationship status, and how satisfied are you with your social life?",
        prompt: "Tell us about your romantic life and friendships. Are you single by choice or circumstance? Do you have close friends or feel isolated? Be honest about whether your relationships are adding energy to your life or draining it.",
        placeholder: "Romantic partner, relationship goals, supporting loved ones...",
        type: "textarea"
      },
      {
        id: "ch2_q6",
        num: 6,
        title: "What does your typical day look like from wake-up to bedtime?",
        prompt: "Include your daily habits (both good and bad), work, personal time, and how you feel throughout.",
        placeholder: "Morning routine, work rhythm, evening habits, wind-down...",
        type: "textarea"
      },
      {
        id: "ch2_q7",
        num: 7,
        title: "How do you feel about your current job or career?",
        prompt: "Are you fulfilled, frustrated, or somewhere in between? What specifically do you love or hate about your work? How does your job align with your values and long-term goals? What would need to change for you to feel more satisfied? How does work affect your overall well-being and sense of purpose?",
        placeholder: "Fulfillment vs. frustration, long-term aspirations...",
        type: "textarea"
      },
      {
        id: "ch2_q8",
        num: 8,
        title: "What is your current financial situation?",
        prompt: "Include your annual income, savings, and debt as you see fit. Beyond the numbers, how do you feel about your financial position? What are your biggest financial priorities or concerns? How has your relationship with money shaped your daily decisions and future planning? Share whatever level of detail feels appropriate about both the practical and emotional aspects of your finances.",
        placeholder: "Monthly income, expenses, debts, feelings about money...",
        type: "textarea"
      },
      {
        id: "ch2_q9",
        num: 9,
        title: "What are your strengths and weaknesses?",
        prompt: "List 5 strengths and 5 weaknesses. Don't just list them - explain each one. Why do you see it as a strength or weakness? Give examples of how each trait manifests in your daily life, relationships, or work. How do these characteristics help or hinder you?",
        placeholder: "5 strengths and 5 weaknesses with real-world examples...",
        type: "textarea"
      },
      {
        id: "ch2_q10",
        num: 10,
        title: "What specific things consistently prevent you from taking action toward your goals?",
        prompt: "Include both external obstacles (things outside your control like time, money, other people, circumstances) and internal resistance (fears, self-doubt, perfectionism, procrastination, limiting beliefs). Give examples of each and explain how they specifically hold you back.",
        placeholder: "Internal resistance, hesitation, fear of the hard path...",
        type: "textarea"
      },
      {
        id: "ch2_q11",
        num: 11,
        title: "What things do you worry about in the future?",
        prompt: "Be specific about your fears and anxieties about what's ahead. Do you worry more about things within your control or outside your control? How do these worries manifest - do they motivate you to take action or paralyze you? What future scenarios play out in your mind most often?",
        placeholder: "Fears regarding finances, potential, future milestones...",
        type: "textarea"
      }
    ]
  },
  chapter3: {
    title: "Inspirations & Dream Life",
    questions: [
      {
        id: "ch3_q1",
        num: 1,
        title: "Who are 3 people you deeply admire, respect, or aspire to be like, and what do you admire about each?",
        prompt: "They can be public figures, people you know personally, or historical figures. For each one, give their name and then the specific traits, behaviours, qualities, or achievements that draw you to them. Be as detailed as you can. Feel free to add a photo of each person too, if you have one.",
        placeholder: "Name 3 people and the exact traits you respect in them...",
        type: "textarea"
      },
      {
        id: "ch3_q2",
        num: 2,
        title: "What are your 3 most important goals and when do you want to achieve them?",
        prompt: "Choose goals that would create real transformation in your life. Give specific deadlines rather than vague timeframes. What are the changes that would have the most significant impact on your overall life satisfaction and direction?",
        placeholder: "3 transformative goals with explicit deadlines...",
        type: "textarea"
      },
      {
        id: "ch3_q3",
        num: 3,
        title: "What does financial freedom look like to you?",
        prompt: "Include specific income, savings, and what money enables you to do.",
        placeholder: "Specific income targets, providing for family, peace of mind...",
        type: "textarea"
      },
      {
        id: "ch3_q4",
        num: 4,
        title: "Describe or add photos of your dream home.",
        prompt: "Show different angles of the same home - inside, outside, and the features that stand out to you. Explain why you chose this specific home and what it represents about your ideal lifestyle. Be specific about the location, size, style, and features that appeal to you.",
        placeholder: "Location, architecture, feeling of safety/calm...",
        type: "textarea"
      },
      {
        id: "ch3_q5",
        num: 5,
        title: "Describe or add photos of your dream car.",
        prompt: "Show different angles of the same car - exterior, interior, and the features you love about it. Explain what this car represents to you and why you chose it. What does this vehicle say about your personality, values, or lifestyle aspirations?",
        placeholder: "Specific vehicles and what they symbolize...",
        type: "textarea"
      },
      {
        id: "ch3_q6",
        num: 6,
        title: "What are your ideal travel locations?",
        prompt: "Describe the destinations you dream of visiting and what draws you to each one — the culture, adventure, relaxation, or something else you're hoping to experience.",
        placeholder: "Countries, landscapes, open spaces, mountains...",
        type: "textarea"
      },
      {
        id: "ch3_q7",
        num: 7,
        title: "Describe or add photos showing your dream fashion style.",
        prompt: "Describe what these fashion styles represent to you and how they align with who you are. Consider the emotions, confidence, or energy this aesthetic evokes and why it resonates with your personal vision. Share what wearing this style would mean for how you express yourself and move through the world.",
        placeholder: "Your aesthetic and personal expression...",
        type: "textarea"
      },
      {
        id: "ch3_q8",
        num: 8,
        title: "What are some activities and hobbies you want to enjoy?",
        prompt: "Explain why these activities and hobbies are important to your dream lifestyle.",
        placeholder: "Traveling, hobbies, athletic pursuits, creative crafts...",
        type: "textarea"
      },
      {
        id: "ch3_q9",
        num: 9,
        title: "Describe or add photos of your dream fitness level.",
        prompt: "How does this fitness level align with your dream lifestyle? What would this level of health and strength allow you to do in your ideal life? How would feeling this good in your body impact your ability to pursue your other goals and dreams? What does peak physical wellness mean for living your best life?",
        placeholder: "Physical vitality, energy, feeling grounded...",
        type: "textarea"
      },
      {
        id: "ch3_q10",
        num: 10,
        title: "What does your perfect day look like from morning to night?",
        prompt: "Include both personal time and business activities - describe your entire ideal day from start to finish.",
        placeholder: "From morning routine to focused work, meals, recreation...",
        type: "textarea"
      }
    ]
  },
  chapter4: {
    title: "Future Self & The Keystone Change",
    questions: [
      {
        id: "ch4_q1",
        num: 1,
        title: "What matters most to you right now in your life?",
        prompt: "What are your current priorities? Is it making money, advancing your career, spending time with family, improving your health, finding a relationship, personal growth, or something else entirely? Be specific about what's driving your decisions and where you're putting most of your focus and energy.",
        placeholder: "Current top priority driving all your daily decisions...",
        type: "textarea"
      },
      {
        id: "ch4_q2",
        num: 2,
        title: "How have you been feeling about your life overall in recent months?",
        prompt: "Optimistic, stuck, frustrated, content, etc. What's contributing to these feelings? Are you in a good place mentally and emotionally, or going through a rough patch? What aspects of your life are working well, and what feels challenging or disappointing right now?",
        placeholder: "Current headspace, challenges, and aspirations...",
        type: "textarea"
      },
      {
        id: "ch4_q3",
        num: 3,
        title: "If you were to describe the future version of yourself who has already achieved everything you want, what skills, knowledge and qualities does this future self have?",
        prompt: "How do they think, act, and carry themselves? Be specific about the gaps between current you and future you — the skills, knowledge, and qualities they have that you're still missing.",
        placeholder: "How future you thinks, speaks, monetizes knowledge, leads...",
        type: "textarea"
      },
      {
        id: "ch4_q4",
        num: 4,
        title: "What are this future self's defining character traits, and how would others describe their personality and approach to life?",
        prompt: "Select or list a total of 5 character traits (e.g., Self-discipline, Strong leader, Confidence, Patience, Growth mindset).",
        placeholder: "List your 5 defining character traits...",
        type: "textarea"
      },
      {
        id: "ch4_q5",
        num: 5,
        title: "What specific fears, doubts, habits, commitments and limiting beliefs are holding you back from becoming the person you admire and dream of being?",
        prompt: "Write down the actual thoughts that stop you before you even try — 'People like me don't...' or 'I'm not smart enough to...' Then think about what you're clinging to that's actually keeping you small: a job that pays the bills but kills your soul, relationships that don't support your growth, or habits that feel safe but limit your potential. Sometimes what feels like security is actually a prison.",
        placeholder: "Thoughts that stop you before starting, false security blankets...",
        type: "textarea"
      },
      {
        id: "ch4_q6",
        num: 6,
        title: "Looking at the people you admire, can you see how your current identity might conflict with what you need to become to achieve your dreams?",
        prompt: "Explain the internal conflicts you notice between who you are now and who you need to become.",
        placeholder: "Internal conflicts between current habits and future potential...",
        type: "textarea"
      },
      {
        id: "ch4_q7",
        num: 7,
        title: "What's the single biggest thing that must change for you to bridge the gap between who you are now and your future self?",
        prompt: "If you could change one fundamental thing about how you think, feel, or act, what would create the biggest transformation? This is usually something internal - a core belief, deep fear, or pattern that's running everything else. What's the keystone change that would unlock everything else?",
        placeholder: "The keystone shift (e.g. self-discipline, staying in the work)...",
        type: "textarea"
      },
      {
        id: "ch4_q8",
        num: 8,
        title: "What would you regret most if you looked back 3-5 years from now and hadn't accomplished?",
        prompt: "What would feel like a genuine waste of your potential? If you're still in the same place 3-5 years from now, what would hurt the most about that? This fear of regret shows what matters most to you.",
        placeholder: "What would hurt the most if you stayed in the same place...",
        type: "textarea"
      }
    ]
  }
};

// State
let currentStep = 1;
const TOTAL_STEPS = 4;

document.addEventListener('DOMContentLoaded', () => {
  renderAllQuestions();
  loadSavedAnswers();
  initWizardNavigation();
  initFormActions();
});

// Render all questions dynamically into their respective chapter containers
function renderAllQuestions() {
  renderChapterQuestions('chapter1', 'q-list-ch1');
  renderChapterQuestions('chapter2', 'q-list-ch2');
  renderChapterQuestions('chapter3', 'q-list-ch3');
  renderChapterQuestions('chapter4', 'q-list-ch4');
}

function renderChapterQuestions(chKey, targetId) {
  const container = document.getElementById(targetId);
  const chapterData = QUESTIONNAIRE_SCHEMA[chKey];
  if (!container || !chapterData) return;

  container.innerHTML = '';

  chapterData.questions.forEach(q => {
    const card = document.createElement('div');
    card.className = 'question-card';

    const header = document.createElement('div');
    header.className = 'q-header';
    header.innerHTML = `
      <span class="q-number">${q.num}</span>
      <div class="q-titles">
        <label class="q-title" for="${q.id}">${q.title}</label>
        <p class="q-prompt">${q.prompt}</p>
      </div>
    `;

    let inputElem;
    if (q.type === 'text') {
      inputElem = document.createElement('input');
      inputElem.type = 'text';
      inputElem.id = q.id;
      inputElem.name = q.id;
      inputElem.placeholder = q.placeholder;
      inputElem.className = 'form-control';
    } else {
      inputElem = document.createElement('textarea');
      inputElem.id = q.id;
      inputElem.name = q.id;
      inputElem.rows = 4;
      inputElem.placeholder = q.placeholder;
      inputElem.className = 'form-control';
    }

    // Auto-save on input
    inputElem.addEventListener('input', () => {
      saveAnswersToStorage();
    });

    card.appendChild(header);
    card.appendChild(inputElem);
    container.appendChild(card);
  });
}

// LocalStorage helpers
function saveAnswersToStorage() {
  const data = {};
  document.querySelectorAll('.form-control').forEach(input => {
    data[input.id] = input.value;
  });
  localStorage.setItem('alchemy_assessment_answers', JSON.stringify(data));
}

function loadSavedAnswers() {
  try {
    const raw = localStorage.getItem('alchemy_assessment_answers');
    if (!raw) return;
    const data = JSON.parse(raw);
    Object.keys(data).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = data[id];
    });
  } catch (e) {
    console.warn("Could not load stored answers", e);
  }
}

// Wizard navigation
function initWizardNavigation() {
  const btnNext = document.getElementById('btn-next');
  const btnPrev = document.getElementById('btn-prev');
  const btnGenerate = document.getElementById('btn-generate');
  const stepPills = document.querySelectorAll('.step-pill');

  function updateStepView() {
    // Update chapters visibility
    for (let i = 1; i <= TOTAL_STEPS; i++) {
      const chElem = document.getElementById(`chapter-${i}`);
      if (chElem) chElem.classList.toggle('active', i === currentStep);
    }

    // Update pills
    stepPills.forEach((pill, idx) => {
      const step = idx + 1;
      pill.classList.toggle('active', step === currentStep);
      pill.classList.toggle('completed', step < currentStep);
    });

    // Update progress bar
    const percent = (currentStep / TOTAL_STEPS) * 100;
    document.getElementById('progress-bar').style.width = `${percent}%`;

    // Button states
    btnPrev.style.display = currentStep > 1 ? 'inline-flex' : 'none';

    if (currentStep === TOTAL_STEPS) {
      btnNext.style.display = 'none';
      btnGenerate.style.display = 'inline-flex';
    } else {
      btnNext.style.display = 'inline-flex';
      btnNext.textContent = `Next: Chapter ${currentStep + 1} →`;
      btnGenerate.style.display = 'none';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  btnNext.addEventListener('click', () => {
    if (currentStep < TOTAL_STEPS) {
      currentStep++;
      updateStepView();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateStepView();
    }
  });

  stepPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const step = parseInt(pill.dataset.step, 10);
      if (step >= 1 && step <= TOTAL_STEPS) {
        currentStep = step;
        updateStepView();
      }
    });
  });

  updateStepView();
}

// Form Actions: Clear, Generate
function initFormActions() {
  const btnClear = document.getElementById('btn-clear-form');
  const btnGenerate = document.getElementById('btn-generate');
  const btnBack = document.getElementById('btn-back');
  const btnCopy = document.getElementById('btn-copy');
  const btnDownloadMd = document.getElementById('btn-download-md');
  const btnPrintPdf = document.getElementById('btn-print-pdf');

  const wizardSection = document.getElementById('wizard-section');
  const loadingSection = document.getElementById('loading-section');
  const resultSection = document.getElementById('result-section');
  const manifestoDisplay = document.getElementById('manifesto-display');
  const loadingMessage = document.getElementById('loading-message');

  let currentRawMarkdown = '';
  let loadingInterval = null;

  const loadingPhrases = [
    "Analyzing childhood conditioning and survival reflexes...",
    "Decoding the root emotional drivers behind personal goals...",
    "Reframing hesitation into unintegrated potential...",
    "Harmonizing role models with the emerging archetype...",
    "Forging the Future Self identity manifesto...",
    "Drafting the formal Personal Transformation Agreement..."
  ];

  // Clear Form
  btnClear.addEventListener('click', () => {
    if (confirm("Are you sure you want to clear all responses?")) {
      document.querySelectorAll('.form-control').forEach(input => input.value = '');
      localStorage.removeItem('alchemy_assessment_answers');
    }
  });

  // Compile full text from all 38 questions
  function compileFullQuestionnaireText() {
    let output = '';
    let clientName = 'Client';

    const q1Input = document.getElementById('ch1_q1');
    if (q1Input && q1Input.value.trim()) {
      clientName = q1Input.value.split(',')[0].trim();
    }

    ['chapter1', 'chapter2', 'chapter3', 'chapter4'].forEach((chKey, idx) => {
      const ch = QUESTIONNAIRE_SCHEMA[chKey];
      output += `\n\n## Chapter ${idx + 1}: ${ch.title}\n\n`;

      ch.questions.forEach(q => {
        const el = document.getElementById(q.id);
        const ans = el ? el.value.trim() : '';
        output += `### ${q.num}. ${q.title}\n`;
        output += `*${q.prompt}*\n`;
        output += `**Answer:** ${ans ? ans : '[No answer provided]'}\n\n`;
      });
    });

    return { clientName, fullText: output.trim() };
  }

  // Generate Manifesto
  btnGenerate.addEventListener('click', async () => {
    const { clientName, fullText } = compileFullQuestionnaireText();

    const totalFilled = Object.values(document.querySelectorAll('.form-control'))
      .filter(input => input.value.trim().length > 0).length;

    if (totalFilled < 2) {
      alert("Please answer at least a few questions before generating your manifesto.");
      return;
    }

    wizardSection.classList.add('hidden');
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
          questionnaireText: fullText
        })
      });

      clearInterval(loadingInterval);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error ${response.status}`);
      }

      const data = await response.json();
      currentRawMarkdown = data.manifesto;
      window.currentRawMarkdown = currentRawMarkdown;

      // Render Markdown
      manifestoDisplay.innerHTML = marked.parse(currentRawMarkdown);

      loadingSection.classList.add('hidden');
      resultSection.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (err) {
      clearInterval(loadingInterval);
      loadingSection.classList.add('hidden');
      wizardSection.classList.remove('hidden');
      alert(`Generation failed: ${err.message}`);
    }
  });

  // Back Button
  btnBack.addEventListener('click', () => {
    resultSection.classList.add('hidden');
    wizardSection.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // Download Markdown
  btnDownloadMd.addEventListener('click', () => {
    if (!currentRawMarkdown) return;
    const nameInput = document.getElementById('ch1_q1');
    const name = nameInput && nameInput.value.trim() ? nameInput.value.split(',')[0].trim().replace(/\s+/g, '_') : 'My';
    const blob = new Blob([currentRawMarkdown], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name}_Alchemy_of_Self_Manifesto.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // Print / Save as PDF
  btnPrintPdf.addEventListener('click', () => {
    window.print();
  });
}
