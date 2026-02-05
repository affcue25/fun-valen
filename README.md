# 💝 Valentine Quest

A playful, interactive React web app that guides the user through multiple fun and emotional screens before asking: **"Will you be my Valentine?"**

Built with React 18, React Router, Framer Motion, and Canvas Confetti.

---

## Tech Stack

- **React 18**
- **React Router DOM**
- **Framer Motion** (animations)
- **Canvas Confetti** (celebration)
- **CSS** (global + animations)

No backend required.

---

## App Flow (Routes)

| Path        | Page              |
|------------|-------------------|
| `/`        | Landing           |
| `/surprise`| Fun Question      |
| `/quiz`    | Cute Ego Boost    |
| `/feelings`| Emotional Build-up|
| `/valentine`| Tricky Button    |
| `/yes`     | Celebration       |

---

## Project Structure

```
src/
├── components/
│   ├── FloatingHearts.jsx
│   ├── MovingButton.jsx
│   ├── TypewriterText.jsx
│   └── PageWrapper.jsx
├── pages/
│   ├── Landing.jsx
│   ├── Surprise.jsx
│   ├── Quiz.jsx
│   ├── Feelings.jsx
│   ├── Valentine.jsx
│   └── Yes.jsx
├── styles/
│   ├── global.css
│   └── animations.css
├── App.jsx
├── main.jsx
└── router.jsx
```

---

## Run the App

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. `http://localhost:5173`).

---

## Features

- **Landing:** Floating hearts, bounce CTA → Start
- **Surprise:** "Do you like surprises?" — No shows "Nice try 😜" and swaps buttons; Yes → Quiz
- **Quiz:** "Who is the cutest person in the world?" — All options (You / Still you / Obviously you) → Feelings
- **Feelings:** Typewriter lines + Continue → Valentine
- **Valentine:** "Will you be my Valentine?" — Yes (glow, hover) → Celebration; No (escaping button on hover/click, then "Not happening 😏")
- **Yes:** Confetti, hearts, celebration message + screenshot suggestion

---

## Build

```bash
npm run build
npm run preview
```

---

❤️ Cute, fun, and memorable.
