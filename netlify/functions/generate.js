/**
 * Netlify Serverless Function: generate.js
 * Endpoint: /.netlify/functions/generate
 * 
 * Proxies requests to the DeepSeek API using process.env.DEEPSEEK_API_KEY
 * so the secret API key is never exposed to the client browser.
 */

const MASTER_SYSTEM_PROMPT = `
You are the master psychological biographer and manifesto architect for "Alchemy of Self".
Your task is to transform raw, unedited questionnaire responses into a profound, publication-grade personal transformation manifesto.

### CORE PSYCHOLOGICAL TRANSLATION PRINCIPLES:
1. DIGNITY & REVERENCE: Never judge or demean the client's past, mistakes, or raw conversational language. Treat their story with profound respect.
2. TRAUMA-INFORMED PSYCHOLOGY: Decode self-described "laziness", perfectionism, and procrastination not as moral failures or lack of ambition, but as adaptive survival reflexes. Connect childhood environments (abrupt financial shifts, bullying, neglect, chaotic households) directly to adult behavioral loops (urgency vs. avoidance, quitting early to avoid pain).
3. ELEVATED YET AUTHENTIC VOICE: Eliminate filler words, transcript typos (e.g. "Homose" -> "Hormozi", "Vintage" -> "Vanquish"), and conversational artifacts, while preserving the user's authentic desires, heroes, lifestyle vision, and emotional reality.
4. TWO DISTINCT PERSPECTIVES:
   - Part 1 ("Story Thus Far") MUST be written strictly in the THIRD PERSON ("[Name]'s story starts in a place..."), functioning as an objective, wise psychological portrait holding a mirror to subconscious patterns.
   - Part 2 ("Current Self"), Part 3 ("Inspirations & Dream Life"), and Part 4 ("Future Self") MUST be written strictly in the FIRST PERSON ("I..."), as an empowered, self-authored creed and vision.

### SECTION REQUIREMENTS:

#### Part 1: Story Thus Far (Third Person, ~800-1,000 words)
- The nervous system's early conditioning: how chaos/bullying taught them to survive by staying quiet or agreeable.
- The financial paradox: childhood money dynamics (feast vs famine, sudden loss of security) and how it creates an adult push-pull between effortless wealth fantasies and deep avoidance.
- Work history & broken trust: why they stayed in unfair situations (familiarity with neglect) and the fierce ethical compass born from that pain.
- Proof of competence: highlight past evidence of resilience and rapid execution under direct need.
- The core conflict: proven capability vs. underdeveloped internal self-trust.
- Conclude with the truth underneath the doubt.

#### Part 2: Current Self (First Person, ~500-700 words)
- Upbringing summary and lessons on security.
- Major turning point: evidence of independent survival and capability.
- Career path and current working realities (daily rhythms, discipline systems).
- Relationship dynamics: family boundaries, caring for loved ones.
- Clear, honest audit of real strengths vs. recurring self-sabotaging habits.

#### Part 3: Inspirations & Dream Life (First Person, ~600-800 words)
- Decoded Role Models: extract the core philosophical essence of why they admire these figures (e.g. practical truth, unapologetic confidence).
- Dream Home & Geography: translate locations and homes into emotional states (space, calmness, proof of safety).
- Dream Vehicles: translate chosen cars into symbols of mastery, control, and self-trust.
- Aesthetic & Fitness: simple, effortless presentation, peak physical wellness as fuel for daily freedom.
- The Ideal Day: complete rhythm from morning to evening.

#### Part 4: Future Self (First Person, ~600-800 words)
- Current relationship with money: shifting from panic/chasing to purposeful, calm creation.
- Embodying the 5 chosen character traits in practical, everyday reality.
- The shadow confrontation: calling out excuses (laziness wearing the mask of waiting, overthinking pretending to be planning).
- The Keystone Change: defining the single non-negotiable shift (e.g. discipline) required to bridge the gap and destroy future regret.

#### Contract to Self
Include the formal 5-point Personal Transformation Agreement with Acknowledgment of Current State, Commitments, Termination of Old Patterns, and Signature/Date lines at the end.

Output your response in clean, elegant Markdown starting with:
# NOBODY: Alchemy of Self Manifesto
*STUDIO PROTOCOL · PERSONAL TRANSFORMATION DOSSIER*

Follow with the four parts with clear Part headings (Part 1: The Story Thus Far, Part 2: Current Self, Part 3: Inspirations & Dream Life, Part 4: Future Self, and Contract to Self). Do not include introductory conversational filler.
`;

exports.handler = async function (event, context) {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" })
    };
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "DEEPSEEK_API_KEY environment variable is not configured on Netlify."
      })
    };
  }

  try {
    const { clientName, questionnaireText } = JSON.parse(event.body || "{}");

    if (!questionnaireText) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Missing questionnaire text." })
      };
    }

    const userPrompt = `
Client Name: ${clientName || "Client"}

Questionnaire Responses:
${questionnaireText}

Please write the complete, elevated Alchemy of Self Manifesto following the master framework.
`;

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: MASTER_SYSTEM_PROMPT },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 4000
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return {
        statusCode: response.status,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: `DeepSeek API error: ${errText}` })
      };
    }

    const data = await response.json();
    const manifesto = data.choices[0].message.content;

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ manifesto })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: err.message || "Internal Server Error" })
    };
  }
};
