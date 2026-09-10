# Mentalysis — Simplified Web Application

Mentalysis helps finance students review selected DCF assumptions and identify questions to address in their company-valuation projects. This version is a small HTML, CSS, and JavaScript prototype for Assignment 1.

## Open the website

1. Extract the entire ZIP file.
2. Open the `Mentalysis-Simplified` folder.
3. Double-click `index.html` and use the navigation links.

Keep all files together. No installation, internet connection, server, or database is needed.

## Included files

- `index.html`: Service description, relevant workflow image, free starter offering, and links to analysis and reviews.
- `analyze.html`: Company name and three numerical assumptions with interactive educational feedback.
- `reviews.html`: Two clearly labeled fictional reviews and a feedback form.
- `styles.css`: Shared styling, mobile layout, and keyboard focus styles.
- `script.js`: Form events, assumption checks, and review display.
- `assets/valuation-workflow.svg`: Adapted supplied workflow image, with the old numerical score removed.

## Simplifications and corrections

- Removed the decorative dashboard, repeated benefit sections, and duplicate action buttons.
- Replaced the arbitrary numerical quality score with a status and three explanatory notes.
- Removed sector and Buy/Hold/Sell fields because they did not change the checks.
- Replaced custom clickable stars with a required 1–5 rating dropdown.
- Removed review averages, decorative avatars, initials generation, animations, external fonts, and sticky panels.
- Labeled the two sample reviews as fictional and aligned their wording with the implemented features.
- Prioritized terminal growth at or above WACC as an input problem that must be addressed.
- Clarified that reviews disappear when the page is reloaded or left.

## JavaScript and DOM features

The three named functions all accept arguments:

- `evaluateAssumptions(growth, discount, terminal)` uses variables, comparisons, arithmetic-related numeric inputs, Boolean logic, arrays, and conditional statements to return feedback.
- `displayAnalysis(company, result)` creates a heading and list and updates the results section.
- `addReview(name, rating, feedback)` creates a simple review card and inserts it at the beginning of the review list.

Submit listeners retrieve input values with `getElementById()` and `.value`. `preventDefault()` keeps the user on the page. `textContent`, `createElement()`, `appendChild()`, `append()`, and `prepend()` update page content. A loop renders the analysis notes. Native HTML `required`, `min`, `max`, and `step` attributes validate inputs; JavaScript also rejects names and feedback containing only spaces.

## Meaning of the analysis

This prototype uses fixed, illustrative teaching thresholds inherited from the original project:

- Revenue growth below 0% or above 20% prompts an explanation of decline or rapid growth.
- WACC below 7% or above 16% prompts an explanation of its calculation.
- Terminal growth below 0% or above 3.5% prompts an explanation of the long-term assumptions.
- Terminal growth at or above WACC overrides the normal status with “Revise terminal growth before proceeding.” This is the condition for the constant-growth terminal-value model used by this exercise, where terminal value = next-period cash flow / (WACC − growth).

The numeric teaching ranges are not sourced industry standards and are not calibrated to a currency, valuation date, sector, or company. Their purpose is to demonstrate meaningful conditional feedback. Passing them does not prove that the assumptions are correct; falling outside them does not by itself prove that an assumption is incorrect. A future version would need sourced, dated, context-specific benchmarks.

The app does not calculate company value, check an entire DCF model, perform sensitivity calculations, analyze uploaded documents, fetch market data, store projects, or recommend investments. The free starter service provides the initial customer action; subscriptions remain part of the longer-term concept.

## Quick manual check

- Follow each navigation link and check that the workflow image appears.
- Enter a company with growth 10, WACC 9, and terminal growth 2.5: expect “No starter flags” and three notes.
- Change terminal growth to 9: expect “Revise terminal growth before proceeding.”
- Try growth 25, WACC 6, and terminal growth 4: expect “Review needed.”
- Press Clear: inputs and feedback return to their initial state.
- Submit a review with a name, rating, and comment: it appears at the top of the list.
- Leave a required field blank: the browser should prevent submission. Reload the page: only the sample reviews remain.

## Assignment 1 alignment and submission

The service page and reviews page meet the two-page minimum; the analysis page supplies additional project-specific interaction. The website includes multiple functions with arguments, DOM updates, customer feedback, clear navigation, a relevant image, and a free offering for finance students.

Assignment 1 also requires a separate Word document with screenshots of every page and important JavaScript interactions, design/functionality explanations, target-user and value-proposition alignment, function/DOM explanations, and an AI Use Statement. This website ZIP is the website submission item, not that separate Word document.

## AI assistance

ChatGPT/Codex assisted with reviewing and simplifying the supplied HTML, CSS, JavaScript, workflow image, and documentation. Accepted recommendations included replacing the numerical quality score with explanatory feedback and changing custom star buttons to a rating dropdown. The three-page structure was retained to demonstrate a meaningful analysis activity. Review and adapt this account to reflect all tools and assistance actually used, and explain the code in your own words in the required AI Use Statement. Do not present AI-generated code as independently student-authored work.

## Assignment-provided learning references

These introductory references were listed in Assignment 1; they are programming resources, not sources for the valuation thresholds:

- HTML forms: https://www.w3schools.com/html/html_forms.asp
- JavaScript functions: https://www.w3schools.com/js/js_function_intro.asp
- DOM methods: https://www.w3schools.com/js/js_htmldom_methods.asp
- JavaScript popups: https://www.w3schools.com/js/js_popup.asp
- JavaScript output: https://www.w3schools.com/js/js_output.asp
