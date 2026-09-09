#!/usr/bin/env python3
"""
Computer Use Automation Demo:
Automates a real browser session filling out the Alchemy of Self web application
for a fictional person ("Marcus Vance, 34"), triggers DeepSeek generation,
and captures the resulting manifesto and screenshots.
"""

import os
import sys
import time
import subprocess
from playwright.sync_api import sync_playwright

FICTIONAL_RESPONSES = {
  # Chapter 1
  "ch1_q1": "Marcus Vance, 34",
  "ch1_q2": "I grew up in a strict household in suburban Ohio. My father was a career military officer and my mother was a school principal. The message was always clear: love and approval were conditional on performance. If I got a 95%, I was asked where the other 5% went. I learned to survive by becoming hyper-competent and hiding any vulnerability.",
  "ch1_q3": "I went to university for economics, then went into corporate tech sales and operations. I was the golden boy until 29 when I burned out. I partnered with a close friend to launch a logistics software company. We worked 80-hour weeks, but he controlled equity and financials. When the company hit revenue, he diluted my share and pushed me out. That betrayal made me deeply skeptical of partnerships and led me to retreat back into solo consulting.",
  "ch1_q4": "My childhood home was neat, sterile, and cold. Everything had to be in place. It taught me discipline, but it also made me feel like home wasn't a place of relaxation, but an inspection zone. Now I crave natural light, wood, warmth, and open space where people don't have to walk on eggshells.",
  "ch1_q5": "Money in my family was a tool of leverage and control. We were never broke, but every dollar spent was scrutinized and held over our heads. Today, I alternate between feeling intense urgency to hoard capital and feeling like having money doesn't make me any safer.",
  "ch1_q6": "The defining moment was walking away from my former partner's company with zero equity after 2 years of sweat. It broke my naive trust in people, but it also proved that I could rebuild from zero without collapsing.",
  "ch1_q7": "Two years ago, I quit my VP role at a tech consultancy to go fully independent. It was terrifying to lose the steady six-figure salary, but it forced me to confront who I am when nobody gives me a title.",
  "ch1_q8": "Last year, closing my first $40,000 solo strategy retainer directly with a client without any corporate backing or agency umbrella. It proved my brain alone has market value.",
  "ch1_q9": "I notice a pattern of building things to 80% completion and then finding reasons why it's flawed, retreating into analysis paralysis, or severing relationships before the other person can disappoint me.",

  # Chapter 2
  "ch2_q1": "I am a high-capacity strategist living in chronic hypervigilance. I produce results under pressure, but I rarely allow myself to rest. My mind is constantly running risk models on my life and career.",
  "ch2_q2": "I currently live in a loft apartment in Chicago overlooking the river. I love the architecture and the energy, but the winters feel isolating and claustrophobic.",
  "ch2_q3": "My social circle is mostly other founders, investors, and operators. We have great intellectual debates about tech and economics, but we rarely talk about what's actually weighing on us emotionally.",
  "ch2_q4": "My parents live in Ohio. Our calls are polite and surface-level. They ask about my income and career, and I keep my struggles to myself. We are cordial, but distant.",
  "ch2_q5": "I am in a committed relationship with Elena (31, a pediatrician). She is grounded, patient, and warm. My challenge is letting my guard down and not treating our relationship like an optimization project.",
  "ch2_q6": "Wake at 6:00 AM, double espresso, 45 minutes of heavy resistance training or running, review markets, client deep-work from 9 AM to 2 PM, sales and client calls 2 PM to 5 PM. Evenings: cook dinner, read history or philosophy, struggle to disconnect from screen before 11 PM.",
  "ch2_q7": "I respect the consulting work I do, but trading hours for dollars is killing my spirit. I want to build equity in proprietary assets, software, and media rather than solving other corporations' fires.",
  "ch2_q8": "Income is around $180k/year independent. Debt-free except for a low-interest student loan residue ($12k). Savings of $95k. I feel financially secure practically, but emotionally anxious that the spigot could turn off at any moment.",
  "ch2_q9": "Strengths: Systems thinking, high endurance, clarity of written expression, loyalty, rapid synthesis of complex data. Weaknesses: Hyper-critical self-talk, difficulty delegating, emotional guardedness, impatience with slow progress, perfectionism.",
  "ch2_q10": "Internal perfectionism: the belief that if it isn't exceptional on launch, it's a humiliating failure. External: over-committing to client busywork to avoid the risk of launching my own product.",
  "ch2_q11": "I worry about waking up at 45 having made comfortable money but having never built a legacy or lived fully authentically.",

  # Chapter 3
  "ch3_q1": "1. Yvon Chouinard — uncompromising integrity, built an empire while rejecting corporate greed, prioritizing craft and nature.\n2. Naval Ravikant — supreme mental clarity, effortless leverage, living without artificial urgency.\n3. Marcus Aurelius — stoic duty, holding enormous responsibility while maintaining an unshakeable inner citadel.",
  "ch3_q2": "1. Launch my own boutique AI workflow studio generating $50k/month recurring revenue within 18 months.\n2. Acquire a 10-acre timber and glass retreat property in Montana within 3 years.\n3. Build a work lifestyle requiring no more than 20 hours/week of operational input within 4 years.",
  "ch3_q3": "Financial freedom means never having to take a meeting with someone I don't respect, having assets generating income while I sleep, and having complete geographic autonomy.",
  "ch3_q4": "A modern timber and slate home in the mountains of Big Sky, Montana, with floor-to-ceiling glass looking out at pine trees and snow peaks. High ceilings, stone fireplace, library, and dedicated writing study.",
  "ch3_q5": "A Singer Reimagined Porsche 911 in slate grey with saddle tan leather interior. It represents obsessive engineering, understated elegance, and appreciation for pure mechanical craft over ostentation.",
  "ch3_q6": "The Pacific Northwest, Norwegian Fjords, Patagonia, and the Swiss Alps. Crisp air, monumental nature, and total silence.",
  "ch3_q7": "Timeless, minimalist: heavyweight organic cotton tees, Japanese selvedge denim, merino wool knitwear, Goodyear-welted leather boots. Quiet luxury, zero logos.",
  "ch3_q8": "Trail running, wilderness backpacking, woodworking, reading classical philosophy, and learning aviation/flying.",
  "ch3_q9": "Lean, functional, and durable: resting heart rate in the low 50s, capable of running 15 miles on mountain trails without fatigue, calm nervous system.",
  "ch3_q10": "Wake naturally with sunlight, brew pourover coffee, 3 hours of uninterrupted creative building, midday trail run in the woods, nutritious lunch with Elena, 1 hour of team check-ins, afternoon reading/woodworking, evening dinner with wine and great conversation.",

  # Chapter 4
  "ch4_q1": "Sovereignty: breaking free from trading time for money and transitioning from a brilliant operator into an authentic builder.",
  "ch4_q2": "Restless and impatient. Relieved that my consulting bills are covered, but frustratingly aware that I'm playing at 30% of my true capability.",
  "ch4_q3": "Future Marcus is unhurried, grounded in calm authority, speaks sparingly but decisively, delegates without anxiety, and trusts his intuition over endless analysis.",
  "ch4_q4": "1. Unshakable Presence\n2. Radical Integrity\n3. Ruthless Focus\n4. Emotional Generosity\n5. Strategic Courage",
  "ch4_q5": "Limiting belief: 'If I drop my guard or relax my vigilance, everything will collapse.' The addiction to feeling exhausted as a substitute for feeling worthy.",
  "ch4_q6": "Current identity is tied to being the suffering hero who works harder than everyone else. The future self operates through leverage, trust, and calm leverage.",
  "ch4_q7": "TRUST AND RELEASE. Releasing the compulsive need to control every outcome and trusting my past evidence of resilience.",
  "ch4_q8": "Dying with a fat bank account, high status, and an empty soul — having lived a safe, optimized life that made other people wealthy while leaving my own vision unbuilt."
}

def main():
    print("=== Step 1: Starting local web server ===")
    server_proc = subprocess.Popen(
        ["node", "local_test_server.js"],
        cwd="/Users/user/Zach/Zunicity",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    time.sleep(2)  # Wait for server to bind

    try:
        print("=== Step 2: Launching Playwright Browser Session ===")
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page(viewport={"width": 1280, "height": 900})
            
            print("Navigating to http://127.0.0.1:3000...")
            page.goto("http://127.0.0.1:3000")
            page.wait_for_selector("#chapter-1", state="visible")
            print("Website loaded successfully!")

            # Fill Chapter 1
            print("=== Step 3: Computer Use — Filling Chapter 1: Personal History ===")
            for q_id, text in FICTIONAL_RESPONSES.items():
                if q_id.startswith("ch1_"):
                    page.fill(f"#{q_id}", text)
            
            page.screenshot(path="screenshot_step1_filled.png")
            print("Captured screenshot_step1_filled.png")

            # Go to Chapter 2
            print("Clicking 'Next: Chapter 2 →'...")
            page.click("#btn-next")
            page.wait_for_selector("#chapter-2.active", state="visible")

            print("=== Step 4: Computer Use — Filling Chapter 2: Current Reality ===")
            for q_id, text in FICTIONAL_RESPONSES.items():
                if q_id.startswith("ch2_"):
                    page.fill(f"#{q_id}", text)

            # Go to Chapter 3
            print("Clicking 'Next: Chapter 3 →'...")
            page.click("#btn-next")
            page.wait_for_selector("#chapter-3.active", state="visible")

            print("=== Step 5: Computer Use — Filling Chapter 3: Inspirations & Dreams ===")
            for q_id, text in FICTIONAL_RESPONSES.items():
                if q_id.startswith("ch3_"):
                    page.fill(f"#{q_id}", text)

            # Go to Chapter 4
            print("Clicking 'Next: Chapter 4 →'...")
            page.click("#btn-next")
            page.wait_for_selector("#chapter-4.active", state="visible")

            print("=== Step 6: Computer Use — Filling Chapter 4: Future Self ===")
            for q_id, text in FICTIONAL_RESPONSES.items():
                if q_id.startswith("ch4_"):
                    page.fill(f"#{q_id}", text)

            page.screenshot(path="screenshot_step4_filled.png")
            print("Captured screenshot_step4_filled.png")

            # Click Generate My Manifesto
            print("=== Step 7: Computer Use — Clicking '✨ Generate My Manifesto' ===")
            page.click("#btn-generate")

            print("Waiting for DeepSeek API to generate the manifesto (this takes ~15-25 seconds)...")
            page.wait_for_selector("#result-section:not(.hidden)", timeout=90000)
            print("Generation complete! Result section is now visible.")

            # Scroll and take screenshot of results
            page.wait_for_timeout(1000)
            page.screenshot(path="screenshot_manifesto_result.png", full_page=False)
            print("Captured screenshot_manifesto_result.png")

            # Extract the raw markdown from window / app
            generated_markdown = page.evaluate("() => window.currentRawMarkdown || document.querySelector('#manifesto-display').innerText")
            
            output_md_path = "/Users/user/Zach/Zunicity/marcus_vance_example_manifesto.md"
            with open(output_md_path, "w", encoding="utf-8") as f:
                f.write(generated_markdown)
            print(f"Saved generated manifesto markdown to: {output_md_path}")

            browser.close()

        # Step 8: Compile PDF using our generator script
        print("=== Step 9: Compiling Example PDF ===")
        pdf_path = "/Users/user/Zach/Zunicity/marcus_vance_example_manifesto.pdf"
        subprocess.run([
            "python3",
            "alchemy_manifesto_generator.py",
            "--compile-only",
            "--input", output_md_path,
            "--pdf", pdf_path,
            "--client-name", "Marcus Vance"
        ], check=True)
        print(f"Generated PDF: {pdf_path}")

    finally:
        print("Stopping local test server...")
        server_proc.terminate()
        server_proc.wait()

if __name__ == "__main__":
    main()
