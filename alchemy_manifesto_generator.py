#!/usr/bin/env python3
"""
Alchemy of Self — Automated Manifesto Generation Engine & PDF Compiler

This script automates the complete lifecycle of generating an "Alchemy of Self" Manifesto:
1. Ingests questionnaire responses (Markdown, JSON, or text).
2. Sends the structured input with calibrated psychological system prompts to an LLM
   (OpenAI, OpenRouter, Ollama, Anthropic, Gemini, or custom OpenAI-compatible endpoint).
3. Compiles the resulting elevated manifesto into both Markdown (.md) and a publication-grade PDF (.pdf).

Zero third-party LLM package dependencies required (pure standard-library HTTP + reportlab for PDF).
"""

import os
import sys
import json
import argparse
import urllib.request
import urllib.error
from typing import Dict, Any, Optional

try:
    from reportlab.lib.pagesizes import letter
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, HRFlowable
    from reportlab.lib import colors
    REPORTLAB_AVAILABLE = True
except ImportError:
    REPORTLAB_AVAILABLE = False


MASTER_SYSTEM_PROMPT = """
You are the master psychological biographer and manifesto architect for "Alchemy of Self".
Your task is to transform raw, unedited questionnaire responses into a profound, publication-grade personal transformation manifesto.

### CORE PSYCHOLOGICAL TRANSLATION PRINCIPLES:
1. DIGNITY & REVERENCE: Never judge or demean the client's past, mistakes, or raw conversational language. Treat their story with profound respect.
2. TRAUMA-INFORMED PSYCHOLOGY: Decode self-described "laziness", perfectionism, and procrastination not as moral failures or lack of ambition, but as adaptive survival reflexes. Connect childhood environments (abrupt financial shifts, bullying, neglect, chaotic households) directly to adult behavioral loops (urgency vs. avoidance, quitting early to avoid pain).
3. ELEVATED YET AUTHENTIC VOICE: Eliminate filler words, transcript typos (e.g. "Homose" -> "Hormozi", "Vintage" -> "Vanquish"), and conversational artifacts, while preserving the user's authentic desires, heroes, lifestyle vision, and emotional reality.
4. TWO DISTINCT PERSPECTIVES:
   - Part 1 ("Story Thus Far") MUST be written strictly in the THIRD PERSON ("Dzikri's story starts in a place..."), functioning as an objective, wise psychological portrait holding a mirror to subconscious patterns.
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

Output your response in clean, elegant Markdown with clear Part headings. Do not include meta-commentary.
"""


def call_llm(prompt: str, system_prompt: str, provider: str = "openai",
             api_key: Optional[str] = None, model: Optional[str] = None,
             base_url: Optional[str] = None) -> str:
    """Invokes LLM API using pure standard library urllib."""
    if not api_key:
        api_key = (
            os.environ.get("XAI_API_KEY")
            or os.environ.get("OPENAI_API_KEY")
            or os.environ.get("GEMINI_API_KEY")
            or os.environ.get("ANTHROPIC_API_KEY")
        )

    if provider in ("grok", "xai"):
        url = base_url or "https://api.x.ai/v1/chat/completions"
        chosen_model = model or "grok-2-latest"
        payload = {
            "model": chosen_model,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.7
        }
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}"
        }
        req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            return data["choices"][0]["message"]["content"]

    elif provider == "ollama":
        url = base_url or "http://localhost:11434/api/chat"
        payload = {
            "model": model or "llama3.1",
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt}
            ],
            "stream": False
        }
        req = urllib.request.Request(
            url,
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json"}
        )
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            return data["message"]["content"]

    elif provider == "anthropic":
        url = "https://api.anthropic.com/v1/messages"
        payload = {
            "model": model or "claude-3-5-sonnet-20241022",
            "max_tokens": 4096,
            "system": system_prompt,
            "messages": [{"role": "user", "content": prompt}]
        }
        headers = {
            "Content-Type": "application/json",
            "x-api-key": api_key,
            "anthropic-version": "2023-06-01"
        }
        req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            return data["content"][0]["text"]

    else:
        # Default OpenAI-compatible endpoint (OpenAI, Groq, OpenRouter, DeepSeek, etc.)
        url = base_url or "https://api.openai.com/v1/chat/completions"
        chosen_model = model or "gpt-4o"
        payload = {
            "model": chosen_model,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.7
        }
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}"
        }
        req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            return data["choices"][0]["message"]["content"]


def compile_pdf(markdown_text: str, output_pdf_path: str, client_name: str = "Alchemy of Self"):
    """Compiles markdown text into a styled PDF with cover page and contract."""
    if not REPORTLAB_AVAILABLE:
        print("Warning: reportlab not installed. PDF generation skipped.")
        return

    doc = SimpleDocTemplate(
        output_pdf_path,
        pagesize=letter,
        rightMargin=54,
        leftMargin=54,
        topMargin=54,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=colors.HexColor("#1A202C"),
        alignment=1, # Center
        spaceAfter=15
    )

    subtitle_style = ParagraphStyle(
        'SubTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=16,
        textColor=colors.HexColor("#718096"),
        alignment=1,
        spaceAfter=30
    )

    h1_style = ParagraphStyle(
        'Heading1Style',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=16,
        leading=20,
        textColor=colors.HexColor("#1A365D"),
        spaceBefore=14,
        spaceAfter=10,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14.5,
        textColor=colors.HexColor("#2D3748"),
        spaceAfter=9
    )

    story = []

    # Title Banner
    story.append(Paragraph("ALCHEMY OF SELF", title_style))
    story.append(Paragraph(f"Personal Transformation Manifesto • {client_name}", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor("#CBD5E0"), spaceAfter=18))

    # Parse markdown into paragraphs
    lines = markdown_text.split('\n')
    current_para = []

    def flush_para():
        if current_para:
            text = " ".join(current_para).strip()
            if text:
                story.append(Paragraph(text, body_style))
            current_para.clear()

    for line in lines:
        stripped = line.strip()
        if not stripped:
            flush_para()
            continue

        if stripped.startswith("## ") or stripped.startswith("### "):
            flush_para()
            clean_title = stripped.lstrip("#").strip()
            story.append(Spacer(1, 10))
            story.append(Paragraph(clean_title, h1_style))
            story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#E2E8F0"), spaceAfter=8))
        elif stripped.startswith("---"):
            flush_para()
            story.append(PageBreak())
        elif stripped.startswith("*[Photo") or stripped.startswith("[Photo"):
            flush_para()
            caption_style = ParagraphStyle(
                'PhotoCaption',
                parent=styles['Italic'],
                fontName='Helvetica-Oblique',
                fontSize=8.5,
                textColor=colors.HexColor("#718096"),
                spaceBefore=4,
                spaceAfter=8
            )
            story.append(Paragraph(f"<b>{stripped}</b>", caption_style))
        else:
            current_para.append(stripped)

    flush_para()
    doc.build(story)
    print(f"Successfully compiled PDF: {output_pdf_path}")


def main():
    parser = argparse.ArgumentParser(description="Generate Alchemy of Self Manifesto from questionnaire answers.")
    parser.add_argument("--input", "-i", type=str, default="alchemy_of_self_responses.md", help="Path to questionnaire input file (MD or JSON)")
    parser.add_argument("--output", "-o", type=str, default="generated_manifesto.md", help="Path to output markdown file")
    parser.add_argument("--pdf", "-p", type=str, default="generated_manifesto.pdf", help="Path to output PDF file")
    parser.add_argument("--provider", type=str, default="grok", choices=["grok", "xai", "openai", "anthropic", "ollama", "custom"], help="LLM Provider (default: grok)")
    parser.add_argument("--model", "-m", type=str, help="LLM model name (e.g. gpt-4o, claude-3-5-sonnet, llama3.1)")
    parser.add_argument("--api-key", type=str, help="API Key for the chosen provider")
    parser.add_argument("--base-url", type=str, help="Base URL for custom OpenAI-compatible endpoint")
    parser.add_argument("--client-name", type=str, default="Dzikri Feeroz", help="Client name")
    parser.add_argument("--compile-only", action="store_true", help="Skip LLM generation and just compile an existing MD into PDF")

    args = parser.parse_args()

    if args.compile_only:
        with open(args.input, "r", encoding="utf-8") as f:
            content = f.read()
        compile_pdf(content, args.pdf, args.client_name)
        return

    if not os.path.exists(args.input):
        print(f"Error: Input file '{args.input}' not found.")
        sys.exit(1)

    with open(args.input, "r", encoding="utf-8") as f:
        raw_input_text = f.read()

    print(f"Loaded input from '{args.input}'. Initiating manifesto generation...")
    
    # Prompt construction
    user_prompt = f"""
Here are the complete questionnaire responses for {args.client_name}:

{raw_input_text}

Please generate the complete, publication-grade Alchemy of Self Manifesto following the exact 4-part structure and psychological translation principles.
"""

    manifesto_markdown = call_llm(
        prompt=user_prompt,
        system_prompt=MASTER_SYSTEM_PROMPT,
        provider=args.provider,
        api_key=args.api_key,
        model=args.model,
        base_url=args.base_url
    )

    # Save Markdown
    with open(args.output, "w", encoding="utf-8") as f:
        f.write(manifesto_markdown)
    print(f"Saved manifesto to: {args.output}")

    # Compile PDF
    compile_pdf(manifesto_markdown, args.pdf, args.client_name)


if __name__ == "__main__":
    main()
