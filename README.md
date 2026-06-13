# Etch-A-Sketch

A browser-based sketchpad/Etch-A-Sketch built with vanilla HTML, CSS (Flexbox), and JavaScript — Project 4 of [The Odin Project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch) Foundations course.

## Live Demo / Repo

- **Live demo:** [Etch-a-Sketch](https://unstoppable-aj-limitsnotfound.github.io/etch-a-sketch/)
- **Repo:** [GitHub Repository](https://github.com/Unstoppable-AJ-LimitsNotFound/etch-a-sketch)

## Features

- Grid generated entirely via JavaScript (no hardcoded divs), default 16×16
- Resize the grid on demand (up to 100×100) via a prompt — the new grid fills the same total space as before
- Three drawing modes, switchable at any time:
  - **Single Color** — hovering paints cells red
  - **Random Color** — hovering paints cells with a random RGB value
  - **Progressive Darkening** *(extra credit)* — each hover darkens a cell by 10%, reaching full opacity after ~10 hovers on that specific cell
- **Sketch Again** button clears the grid and starts a fresh sketch while keeping the currently selected mode active
- Active mode and resize button are visually highlighted

## Built With

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript — DOM manipulation, event delegation

## What I Learned

### Layout & CSS
- `box-sizing: border-box` and how it simplifies sizing math when building a grid of fixed-size cells
- Centering elements with `margin: auto`
- `vh` / `vw` units
- **CSS specificity in practice:** inline styles (set via JS, e.g. `el.style.backgroundColor`) override class-based styles. This directly explained why switching between drawing modes produced unexpected results — one mode setting an inline color would silently "win" over another mode's CSS class

### DOM & JavaScript
- Creating, selecting, and modifying elements/attributes via JS feels natural now
- Writing modular, reusable functions instead of repeating logic
- `classList.add` / `classList.remove`
- Numeric values assigned to CSS properties via JS must be strings (e.g. `value + "px"`)
- Two distinct ways to change an element's appearance — toggling a CSS class vs. setting inline styles directly — and how their specificity differs
- Removing elements from the DOM and rebuilding containers
- `Math.random()` for generating RGB values — implemented more cleanly here than in my Rock Paper Scissors project
- `mouseover` vs. `mouseenter`, and **event bubbling** — saw it actually matter in a real project for the first time
- **Event delegation:** one listener on a stable parent element, dispatching behavior based on `event.target` and a `currentMode` variable, instead of attaching (and accidentally re-stacking) a new listener every time a mode or grid size changes
- `prompt()` and `Number()` for reading and converting user input
- `element.style.opacity` (and `.style` properties generally) always returns a **string**, and reflects the *specified inline value* — not the computed/rendered value. An untouched `opacity` reads as `""`, even though it renders as fully opaque (1) by default
- **Type coercion gotchas:** `+` concatenates if either operand is a string, while `<` / `>` coerce to numbers — mixing these produced a genuinely confusing "exponentially shrinking opacity" bug until values were explicitly converted with `Number()`
- The difference between an **implicit global** (assigning to an undeclared variable inside a function, which silently creates a property on `window`) and a properly declared global (`let`/`const` at the top level) — both are accessible everywhere, but only the former risks silent collisions with other code

### Debugging
- Practiced forming a hypothesis, testing it with `console.log`, and narrowing down root causes step by step instead of guessing
- A listener attached to `#container` stopped working entirely after a resize — because the "clear and rebuild grid" function replaced `#container` with a brand-new element, leaving the listener on the old, detached one. Moving the listener to `body` (which is never recreated) fixed it permanently
- Multiple per-cell listeners (one added per mode, never removed) silently stacked — switching modes without resizing triggered several effects on a single hover. Rewriting around one delegated listener + a `currentMode` variable fixed this at the root, rather than patching symptoms

### Git & Workflow
- Writing commit messages with bodies that explain *why*, not just *what* — especially valuable for a multi-bug refactor where the diff alone doesn't convey the reasoning
- Created (and later deleted) a couple of "false start" bugfix branches while debugging — learned that starting fresh on a new branch is sometimes more productive than continuing to fight the same broken approach, and that force-deleting an unmerged dead-end branch is a normal part of the workflow
- Practiced `git add -p` and refining commit messages

## Odin Project Requirements

- [x] 16×16 grid of divs, created via JavaScript
- [x] Flexbox layout
- [x] Hover effect that "draws" on the grid
- [x] Resize button — prompts for new grid size (max 100), regenerates grid in the same space
- [x] Extra credit: random RGB color mode
- [x] Extra credit: progressive darkening mode

## Known Limitations

- Desktop/mouse-only — not optimized for touch or mobile screens (responsive design is covered in a later Odin lesson)

## Running Locally

Clone the repo and open `index.html` in your browser. No build step or dependencies required.