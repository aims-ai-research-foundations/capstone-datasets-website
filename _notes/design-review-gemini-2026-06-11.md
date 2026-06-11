### What Works
* **Strong Visual Identity:** The color palette (AIMS purple, gold, and lavender tint) is applied with clear intent. The dark-to-light transition between the hero and the main content creates a logical division of pages.
* **Excellent Font Pairing:** *Bricolage Grotesque* adds a modern, distinct academic character to the headings, while *Inter* keeps the long-form descriptions highly readable.
* **Effective Core Concept:** The "drifting language strip" is an excellent signature element that functions both as social proof of regional relevance and as immediate interactive shortcuts.

---

### Critical Visual & UX Improvements

#### 1. Language Strip: Low Contrast & Weak Interactive Affordance (Image 1 & 2)
* **What is wrong:** The light-lavender text of the drifting language names against the semi-transparent purple background block has a contrast ratio of roughly 2:1. This violates WCAG AA accessibility standards (minimum 4.5:1) and makes the links look like inactive, disabled text.
* **Why it matters:** Lecturers will miss this crucial interactive shortcut. If they don’t realize these are clickable links, the signature feature of the homepage becomes dead visual weight.
* **The precise fix:** 
  * Change the base text color of the language links in the strip to solid white (`#FFFFFF`) or high-contrast lavender (`#F3EEFB`).
  * Add a hover state: transform the text color to Gold (`#FDD633`), apply an underline, and scale the text up by 5% (`transform: scale(1.05); transition: all 0.2s ease-in-out;`).

---

#### 2. Layout Explosion of Filter Pills (Image 3)
* **What is wrong:** The filter tags under "Course" wrap haphazardly into two uneven, staggered rows. It feels like an unconfigured, default flex-wrap container from a generic UI template.
* **Why it matters:** Lecturers scanning this page face high cognitive load trying to read a jagged, non-aligned grid of 8 course pills. It degrades the professional, curated feel of the catalog.
* **The precise fix:** Reorganize the catalog layout into a classic **two-column layout on desktop**:
  * **Left Column (Width: 280px):** A vertical sticky sidebar containing collapsible accordions for Country, Difficulty, and Courses (using vertical checkboxes instead of horizontal pills).
  * **Right Column:** The dynamic dataset card grid. This scales naturally and leaves room for more filters (e.g., "Language", "Data Type") as the catalog grows.

---

#### 3. Missing Technical Metadata on Dataset Cards (Image 3)
* **What is wrong:** The dataset cards ("WURA", "mC4", etc.) only show a title and a generic text description. Crucial decision-making metadata is entirely hidden.
* **Why it matters:** University supervisors need to quickly verify if a dataset fits their student's technical constraints (e.g., *Is it NLP or Computer Vision? What specific languages are included? Is it small enough to run on a free Google Colab instance?*). Forcing lecturers to click into every single card to find basic technical constraints is highly inefficient.
* **The precise fix:** Add a standardized metadata badge footer to the bottom of every card using the lavender tint (`#F3EEFB`) for the tag background and AIMS purple (`#361A54`) for the text:
  * **Visual Badges to add:** `[Language: Yoruba]` `[Task: NLP / Text]` `[Size: ~1.2 GB]` `[Difficulty: Intermediate]`
  * Set these badges in `Inter`, 12px, semibold, with `4px 8px` padding and a `4px` border-radius.

---

#### 4. Stacked Search Block & Hero Padding on Mobile (Image 2)
* **What is wrong:** On mobile, stacking the search input box and the full-width gold "Search" button consumes too much vertical space. This pushes the key proof points ("34 datasets · 30+ African languages...") entirely below the fold.
* **Why it matters:** Mobile users lose immediate context of what the site offers without scrolling. The hero section feels unnecessarily bloated.
* **The precise fix:** 
  * Reduce the hero container's top/bottom padding on mobile from its current size to `32px` top, `40px` bottom.
  * Combine the mobile input and search button into a single inline element: Keep the white input text field at 100% width, but replace the bulky "Search" text button with an inline gold square icon-button (`#FDD633` background, 48px x 48px, containing a dark purple magnifying glass icon) positioned on the right side of the input field.

---

#### 5. Search Bar Layout & Pattern Inconsistency (Image 1 vs. Image 3)
* **What is wrong:** The search bar UI is completely inconsistent across pages. The homepage search box has no magnifying glass icon but has a physical "Search" button. The catalog page search bar has an internal magnifying glass icon but *no* physical button, forcing a reliance on the "Enter" key.
* **Why it matters:** Inconsistent search behaviors frustrate non-technical users. If they search on the catalog page and don't see a button to click, they may assume the search feature is broken.
* **The precise fix:** Standardize the search input component sitewide. Use this unified layout:
  * Place a leading search icon (magnifying glass, `#361A54` at 40% opacity) inside the left edge of the input box.
  * Keep the primary Gold (`#FDD633`) "Search" button on the right of the input box on both pages. 
  * Add a clear indicator `(×)` inside the input box when text is typed so users can clear their search query with a single click.

---

#### 6. Text Collisions & Line-Height in Display Typography (Image 1 & 2)
* **What is wrong:** The main `H1` ("Find the right dataset for your students' capstone.") has a line-height that is too tight (looks like `1.0` or `1.05`). The descenders of letters like "g" in "right" and "y" in "your" almost collide with the ascenders of the letters below them.
* **Why it matters:** Tight line heights ruin the playful, expressive qualities of *Bricolage Grotesque*, making the primary heading look cramped and visually tense.
* **The precise fix:**
  * Increase the `line-height` of the `H1` to `1.2` on desktop and `1.25` on mobile.
  * Increase the space-below margin of the gold eyebrow text ("AI RESEARCH FOUNDATIONS...") from its current value to `20px` to give the title breathing room.