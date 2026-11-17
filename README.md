# Jashan.exe – Portfolio OS 🎀🌌

A cute, production-quality, responsive pastel desktop operating system portfolio built for **Jashanpreet Kaur**, B.Tech CSE (AIML) student at CEC.

Faithfully recreated from visual specifications and designs, featuring a dreamy cosmic aesthetic, interactive window management, live clock, audio player, carousel, terminal activity logs, and responsive layout.

---

## 🌟 Highlights & Features

- **Exact Visual Replica**: Recreated with pure HTML, CSS, React, and crisp vector SVG/WebP assets (no pixel fonts, no blurry slices, no pixel art).
- **Proportional Desktop Stage**: Engineered on a 16:9 stage using container queries (`--u: calc(100cqw / 1600)`) ensuring **zero overlapping** and **no scrolling** at standard desktop resolutions (1920×1080, 1536×864, 1440×900, 1366×768, 1280×720).
- **Interactive Windows**: Reusable `<Window>` component supporting minimize, maximize, and close, with mint, pink, and terminal-dark variants.
- **Top Menu Bar**: With OS branding, dropdown menus (File, Edit, View, Go, Help), WiFi status, audio toggle, and a real-time live clock (`Tue, Nov 14 11:59 PM`).
- **Left Navigation Dock**: 10 colorful rounded icons with white pill labels (Home, About Me, Experience, Projects, Achievements, Skills, Education, Certifications, Resume, Contact) with hover lift and active pink outline.
- **Interactive Taskbar & Start Menu**: Functional pastel Start Menu listing all OS applications, active window tabs with pressed styles, and battery indicator (99%).
- **Interactive Desktop Apps**:
  - `Welcome.exe`: Hero heading in Playfair Display italic, bio, dual CTA buttons, and illustration.
  - `Stats.sys`: Three metrics columns (`4+ Projects`, `5+ Achievements`, `2+ Major Events`).
  - `Now_Playing.mp3`: Interactive lo-fi player with play/pause, time counter, draggable progress bar, animated pink equalizer, shuffle, repeat, and like toggles.
  - `About_Me.exe`: Space cat astronaut avatar with 5 gold diamond bullet points.
  - `Featured_Projects.exe`: Project carousel with arrows, dots, and 6-second auto-play with pause on hover.
  - `Currently_Exploring.exe`: Interactive checklist with custom pink checkboxes and telescope artwork.
  - `Activity.log`: Monospace terminal window with animated segmented mint green progress bars.
  - `Achievements.exe`: 4 cream cards with hover lift.
  - `To_Do.exe`: Clickable task list + curled-up sleeping cat on a cloud with floating "z z".
- **Inner Pages**: Full OS window views for all 9 sections without overlapping the desktop chrome.
- **Responsive Stacking**: Seamlessly collapses into a scrollable single-column layout on screens under 900px width with horizontal dock scrollbar.
- **Accessibility & Motion**: Respects `prefers-reduced-motion`, includes keyboard shortcuts (`Esc` for Home, `⌘/Ctrl + K` for Contact, `?` for shortcuts).

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Installation

```bash
# Clone the repository
git clone https://github.com/jashan-26/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production

```bash
npm run build
```

The production assets will be output in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## ✏️ How to Edit Content

All text, links, stats, projects, and checklist items live in a single centralized file:

📂 `src/data/content.ts`

### 1. Updating Profile & Bio
Edit the `profile` object:
```ts
export const profile: Profile = {
  name: 'Jashanpreet Kaur',
  nickname: 'Jashan',
  title: "Hey, I'm Jashan! ♡",
  subtitle: 'AI & Machine Learning Engineer | Developer | Creative Problem Solver',
  shortBio: '...',
  fullBio: '...',
  email: 'jashanpreet.kaur.inn@gmail.com',
  resumeUrl: '/resume.pdf',
  githubUrl: 'https://github.com/jashan-26',
  linkedinUrl: 'https://linkedin.com/in/your-username', // TODO: update
  institution: 'Chandigarh Engineering College (CEC)',
  cgpa: '8.8',
};
```

### 2. Adding / Editing Projects
Edit the `projects` array:
```ts
export const projects: ProjectItem[] = [
  {
    id: 'cyclone-classifier',
    title: 'Cyclone Intensity Classifier',
    description: 'AI/ML system to classify and predict tropical cyclone intensity using satellite data.',
    tags: ['PyTorch', 'ML', 'Satellite Data'],
    image: '/assets/cyclone.webp',
    github: 'https://github.com/your-username/cyclone-classifier',
    demo: 'https://cyclone-demo.app',
    isPlaceholder: false,
  },
  // Add more projects or replace TODO items...
];
```

### 3. Updating Skills, Education & Certifications
Simply adjust `skillCategories`, `educationData`, and `certifications` arrays inside `src/data/content.ts`.

---

## 🎨 How to Swap Illustrations & Assets

All visual assets reside in `public/assets/`. To replace them, place your own `.webp`, `.png`, or `.svg` files with the same names:

| File | Purpose |
| :--- | :--- |
| `public/assets/hero-girl.webp` | Hero girl sitting at desk with cat and window view |
| `public/assets/cat-astronaut.webp` | Space cat in astronaut helmet on pink cloud |
| `public/assets/cyclone.webp` | Tropical cyclone satellite imagery |
| `public/assets/album-art.webp` | Dreamy planet album cover for music player |
| `public/assets/sleeping-cat.svg` | Sleeping white cat with "z z" |
| `public/assets/telescope.svg` | Stargazing telescope on tripod |
| `public/assets/rocket.svg` | Cartoon rocket with flame trail |
| `public/assets/planet-large.svg` | Large pink planet |
| `public/assets/planet-ringed.svg` | Ringed pink planet |
| `public/assets/skyline.svg` | Lavender city skyline silhouette |
| `public/assets/clouds.svg` | Soft pink clouds |
| `public/assets/sparkles.svg` | Star sparkles and cosmic dust |
| `public/resume.pdf` | Resume PDF document |
| `public/audio/track.mp3` | Optional audio file played when clicking Play in Now_Playing.mp3 |

---

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework preset: **Vite**.
5. Click **Deploy**.

### Deploy to GitHub Pages

1. In `vite.config.ts`, set the base path to your repo name:
   ```ts
   export default defineConfig({
     base: '/<your-repo-name>/',
     plugins: [react()],
   });
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the `dist` folder to your `gh-pages` branch. (Using `HashRouter`, routing works seamlessly on GitHub Pages without server-side rewrite rules).

---

## 💡 Assumptions & Design Decisions

1. **Routing**: Implemented using `HashRouter` as requested, ensuring flawless direct-link navigation on static hosting environments (Vercel, Netlify, GitHub Pages) without requiring 404 rewrite rewrites.
2. **Audio Playback**: The music player has a fully functional interactive UI with simulated progress playback and timing, plus a direct hook for `/audio/track.mp3`.
3. **No Draggable Windows**: As instructed in the specification, windows are kept non-draggable on the landing page to guarantee clean alignment and zero overlapping across all aspect ratios.
4. **Privacy**: As mandated, no home address or personal telephone number is displayed anywhere on the website; contact is handled cleanly via direct email, copy button, mailto form, and social links.
