/**
 * Alchemy of Self — Multi-Chapter Assessment Wizard
 * Contains all 38 individual questions across Chapters 1-4.
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
        placeholder: "e.g. Dzikri Feeroz, 29",
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
        placeholder: "City, apartment/house, environment, mood impact...",
        type: "textarea"
      },
      {
        id: "ch2_q3",
        num: 3,
        title: "Describe or share your current friends, group, or the people you spend the most time with.",
        prompt: "Tell us about the people you spend time with these days — old friends, new connections, or a mix. What role do they play in your life right now?",
        placeholder: "Your circle, community, colleagues, business partners...",
        type: "textarea"
      },
      {
        id: "ch2_q4",
        num: 4,
        title: "Describe your family relationships.",
        prompt: "How do you feel about your family relationships? What role does your family play in your current life? Are these relationships close, complicated, supportive, or distant? How has your family shaped who you are today? What are the dynamics like, and how much influence do they have on your life decisions and daily experience? Share as much detail as you can about your family connections and how they impact you.",
        placeholder: "Dynamics with parents, siblings, emotional closeness or distance...",
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
        placeholder: "Morning routine, work shifts, habits, evening wind-down...",
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
        placeholder: "Monthly income, expenses, debts, loans, feelings about money...",
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
        placeholder: "Internal resistance, laziness, fear of the hard path...",
        type: "textarea"
      },
      {
        id: "ch2_q11",
        num: 11,
        title: "What things do you worry about in the future?",
        prompt: "Be specific about your fears and anxieties about what's ahead. Do you worry more about things within your control or outside your control? How do these worries manifest - do they motivate you to take action or paralyze you? What future scenarios play out in your mind most often?",
        placeholder: "Fears regarding finances, mediocrity, potential...",
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
        placeholder: "Location (e.g. New Zealand, Dubai), architecture, feeling of safety/calm...",
        type: "textarea"
      },
      {
        id: "ch3_q5",
        num: 5,
        title: "Describe or add photos of your dream car.",
        prompt: "Show different angles of the same car - exterior, interior, and the features you love about it. Explain what this car represents to you and why you chose it. What does this vehicle say about your personality, values, or lifestyle aspirations?",
        placeholder: "Specific vehicles (e.g. Audi R8, Pagani, Vanquish) and what they symbolize...",
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
        placeholder: "Your aesthetic (e.g. clean plain shirt & pants, quiet confidence)...",
        type: "textarea"
      },
      {
        id: "ch3_q8",
        num: 8,
        title: "What are some activities and hobbies you want to enjoy?",
        prompt: "Explain why these activities and hobbies are important to your dream lifestyle.",
        placeholder: "Traveling, track driving, swimming, culinary experiences...",
        type: "textarea"
      },
      {
        id: "ch3_q9",
        num: 9,
        title: "Describe or add photos of your dream fitness level.",
        prompt: "How does this fitness level align with your dream lifestyle? What would this level of health and strength allow you to do in your ideal life? How would feeling this good in your body impact your ability to pursue your other goals and dreams? What does peak physical wellness mean for living your best life?",
        placeholder: "Physical vitality, energy, looking and feeling grounded...",
        type: "textarea"
      },
      {
        id: "ch3_q10",
        num: 10,
        title: "What does your perfect day look like from morning to night?",
        prompt: "Include both personal time and business activities - describe your entire ideal day from start to finish.",
        placeholder: "From morning tea/coffee to focused work, family dinner, evening recreation...",
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
        placeholder: "Relief vs. frustration, playing small, feeling stuck...",
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
        placeholder: "Internal conflicts: comfort vs. discipline, builder vs. quitter...",
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

const DEMO_RESPONSES = {
  ch1_q1: "Dzikri Feeroz, 29",
  ch1_q2: "When I was small, it was a really tough environment for me to live in. I was bullied in school, I was bullied by my brothers. My parents were abusive. But I still go through everything with a smile. Some people do trust me, but I don't really trust in myself. People do say that I can do better things, but I just don't see the vision. I know I can be one of the best. But it's always cloudy water It's not a clear vision for me to see what's the best potential that I could give. I try to be the best that I can, but I keep giving up halfway or I don't see any progress. Because I really do not know if it's because of the people I trust. For example, one of my friends that asked me to join his business, he promised me a few months and I will get rich. I stayed for almost two years and I've got nothing out of it. So it's really hard for me to see that I can grow a big income from business, where I see the struggles of a lot of owners. I really need that mentor that will help me to improve my vision of how I can be because most of the owners that I know they are either broke or they have closed down shop.",
  ch1_q3: "I was from the filming industry where I thought I wanna be in a production. Then I was brought in by my friend to be a videographer for a social media production. That was when I changed my line from film production to social media videographer. So I learnt all the videographing tips and how to edit like a social media expert. At a point of time I feel like I was being cheated by my friend that was paying me the bills. I know that he was getting a lot of money and I'm only getting a quarter out of it, even though we are doing things together. For example, he was earning 2,000, I was only earning 400. That taught me in the future if I want to be a business owner to be fair with my future employees. Then there was another business from another friend where they promised me a four-digit income in six months. It's been three years, and my monthly income is $200. So that's another thing that I learned: not to give false hope to someone.",
  ch1_q4: "The environment that I lived in was where we would waste our time every single day in someone's house doing stupid things and just thinking that I had no responsibility for the rest of my life. That is why I've always gone the easy route of just being simple with life. My uncle's house is a 3-storey bungalow, which is one of the reasons I want to get a bungalow for my family, with a Rolls Royce and BMW parked outside for Hari Raya celebrations.",
  ch1_q5: "When I was young, my father was a high-ranking officer, so I could get whatever I wanted like iPad, iPhone, PC. Every day I got school money, so I didn't have the mindset of needing to work. After the divorce, that comfort disappeared. My mother didn't have jobs, so sometimes I would go to school not eating, just drinking water. Money in my life now is something I spend without saving. Recently I had a wake-up call to pay my loans, and I paid them off in less than 2 months by working hard.",
  ch1_q6: "Hard experiences have been trusting people who promised four-digit incomes while they themselves were struggling. I stayed for three years with $200/month income and quit my job for that. It makes me skeptical and silent.",
  ch1_q7: "Quitting that business and realizing that I can actually survive on my own when things get hard. Working freelance or doing delivery shifts taught me I can move fast when there is a clear deadline in front of me.",
  ch1_q8: "Recently earning almost $5,000 in a month from working hard, which helped me pay off my overdue loans. It proved to myself that I am capable of hard work when I set my mind to it.",
  ch1_q9: "I keep giving up on my projects. I started doing AI websites for business owners, but I had this laziness of wanting to call people. I tend to be a perfectionist where I work and tweak things without launching and making money.",

  ch2_q1: "I want to be a rich person and earn a lot of money. When I hit a struggle, I retreat to my comfortable delivery job. I lack patience in business because I have failed too many times.",
  ch2_q2: "Currently living alone in an apartment in Singapore. Working every day to pay bills, and recently started saving.",
  ch2_q3: "My friends are the ones who brought me into the business where I earned $200/month. They are not bad people, but I stepped back because I couldn't stand earning that little.",
  ch2_q4: "My family is there, but not there. I live alone. I was bullied by them as a kid, so I keep a distance personally. We have fun and laugh when we meet now, but I don't open up easily.",
  ch2_q5: "I have a girlfriend. I buy things for her and try to make her life comfortable. I want to build a life where she does not have to work.",
  ch2_q6: "Wake up, 15 minutes on Instagram, shower, work shift 9am to 2pm, break 2pm to 4pm, second shift 4pm to 8pm doing food delivery. Nights are spent tinkering with AI or watching YouTube.",
  ch2_q7: "Current delivery career is frustrating because it has no long-term future. I want to be an owner and leader that employees look up to for guidance and decisions.",
  ch2_q8: "Earning around $3,000/month when working every day. If I stop, it drops to zero. Currently paying off phone plans and loans, but recently cleared major debts.",
  ch2_q9: "Strengths: Fast learner, passionate about AI, goal-driven when the target is clear. Weaknesses: Laziness in execution, overthinking, procrastination, quitting when the end goal feels distant.",
  ch2_q10: "Self-doubt, laziness, wanting to take the easy route instead of embracing discomfort.",
  ch2_q11: "Worrying about money, becoming ordinary, and not reaching the big expectations I have for myself.",

  ch3_q1: "1. Alex Hormozi — genuine, teaches things that actually work, practical utility over hype.\n2. Andrew Tate — extreme confidence, certainty, and unapologetic self-belief.",
  ch3_q2: "Provide for my family within the next 5 years, achieve complete financial freedom, own my dream home and cars.",
  ch3_q3: "Being able to support and provide for my family fully, not worrying about bills, owning an Audi R8, Aston Martin Vanquish, or Pagani Huayra.",
  ch3_q4: "A modern, open, and calm home with large glass windows and a swimming pool, located in New Zealand surrounded by mountains or in Dubai.",
  ch3_q5: "Audi R8, Aston Martin Vanquish, and Pagani Huayra Roadster. Symbolizes confidence, control, and reward for hard work.",
  ch3_q6: "New Zealand and Switzerland — green landscapes, fresh mountain air, quiet open space.",
  ch3_q7: "Clean plain shirt and plain pants — neat, effortless, calm confidence without needing to show off.",
  ch3_q8: "Traveling freely and driving fast on a racetrack.",
  ch3_q9: "Lean, athletic, and energetic physique so I never feel weak or lazy, supporting an active life.",
  ch3_q10: "Wake up with coffee/tea, short focused high-impact work block, quality peaceful dinner with family, swim or gym session in the evening.",

  ch4_q1: "Money and security — it is the driving factor right now that allows me to move, breathe, and support those I care about.",
  ch4_q2: "A mix of relief (having active income) and frustration (knowing I am standing on the edge instead of fully stepping into my potential).",
  ch4_q3: "Calm about money, acts with purpose not panic, works without overthinking, reliable, finishes what he starts.",
  ch4_q4: "1. Self-discipline\n2. Strong leader\n3. Confidence\n4. Patience\n5. Growth mindset",
  ch4_q5: "Clinging to the safety of a comfortable routine, fear of the uncomfortable path, and the habit of giving up when things get slow or boring.",
  ch4_q6: "Current identity retreats to comfort and gives up easily, whereas the person I need to become stays in the work when nobody is clapping.",
  ch4_q7: "DISCIPLINE. The ability to keep going when progress is slow and motivation has faded.",
  ch4_q8: "Looking back 3-5 years from now with the exact same half-built plans, excuses, and the regret of almost becoming who I wanted to be."
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
  localStorage.setItem('alchemy_manifesto_answers', JSON.stringify(data));
}

function loadSavedAnswers() {
  try {
    const raw = localStorage.getItem('alchemy_manifesto_answers');
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

// Form Actions: Load Demo, Clear, Generate
function initFormActions() {
  const btnLoadDemo = document.getElementById('btn-load-demo');
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
    "Analyzing early childhood conditioning and survival reflexes...",
    "Decoding the root emotional drivers behind material goals...",
    "Reframing self-doubt into unintegrated potential...",
    "Harmonizing role models with the emerging archetype...",
    "Forging the Future Self identity manifesto...",
    "Drafting the formal Personal Transformation Agreement..."
  ];

  // Load Demo
  btnLoadDemo.addEventListener('click', () => {
    Object.keys(DEMO_RESPONSES).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = DEMO_RESPONSES[id];
    });
    saveAnswersToStorage();
    alert("✅ Loaded Dzikri's answers across all 38 questions in all 4 chapters!");
  });

  // Clear Form
  btnClear.addEventListener('click', () => {
    if (confirm("Are you sure you want to clear all responses?")) {
      document.querySelectorAll('.form-control').forEach(input => input.value = '');
      localStorage.removeItem('alchemy_manifesto_answers');
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

    // Verify there is at least some content
    const totalFilled = Object.values(document.querySelectorAll('.form-control'))
      .filter(input => input.value.trim().length > 0).length;

    if (totalFilled < 3) {
      alert("Please answer at least a few questions before generating your manifesto, or click '⚡ Load Demo Answers' to test!");
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

      // Render Markdown
      manifestoDisplay.innerHTML = marked.parse(currentRawMarkdown);

      loadingSection.classList.add('hidden');
      resultSection.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (err) {
      clearInterval(loadingInterval);
      loadingSection.classList.add('hidden');
      wizardSection.classList.remove('hidden');
      alert(`Generation failed: ${err.message}\n\nPlease check serverless function logs on Netlify.`);
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
    const name = nameInput ? nameInput.value.split(',')[0].trim().replace(/\s+/g, '_') : 'Client';
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
