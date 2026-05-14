# musical-octo-chainsaw

Cyber-noir personal portfolio built with React + Tailwind CSS.

## Navigation Flow

Sticky navigation uses smooth-scroll anchors:

1. `Home` → Hero section focused on Robotics Freelancing + Cybersecurity Pentesting
2. `Robotics Projects` → Responsive project gallery with GitHub links and tech stacks
3. `Security Labs` → TryHackMe dashboard (`rank`, `totalPoints`, `roomsCleared`)
4. `Certifications` → Professional certificate grid

## Folder Structure

```text
src/
  components/
    CybersecurityDashboard.jsx
    ProjectCard.jsx
  assets/
    certifications/
  data/
    projects.js
    rooms.js
    certifications.js
  styles/
    glow.css
  App.jsx
  index.css
  main.jsx
tailwind.config.js
postcss.config.js
```

## Run

```bash
npm install
npm run dev
```

## Build & Lint

```bash
npm run lint
npm run build
```
