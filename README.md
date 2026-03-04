# Pacedall Arcade v2 🕹️

**Retro arcade games built by AI** — free to play in browser, with offline support on iOS & Android.

A Pacedall Labs product. arcade.pacedall.com

---

## What's This?

Pacedall Arcade is a collection of retro 70s/80s-inspired arcade games — Space Invaders, Snake, Breakout, Pac-Man, Galaga, Tetris, Frogger, Asteroids, Pong, and more — every one of them built entirely by AI under the Pacedall Labs umbrella.

- **Browser**: Play any game instantly, no account, no download
- **iOS**: Download from the App Store for full offline gameplay
- **Android**: Download from Google Play for full offline gameplay
- **Zero data collection**: We collect nothing. No analytics, no tracking, no personal data.
- **No account ever required**: Open. Play. That's it.

---

## File Structure

```
pacedall-arcade-v2/
├── index.html     — Main homepage
├── game.html      — Game player template (URL param: ?id=gameid)
├── styles.css     — All CSS (CSS variables, retro aesthetic, responsive)
├── script.js      — Game data, UI logic, canvas demo, FAQ, filters
├── images/
│   └── logo.png   — Pacedall Arcade logo
└── README.md
```

---

## Design System

### Colors
| Token | Hex | Use |
|-------|-----|-----|
| `--navy` | `#1B2A6B` | Primary text, borders, nav |
| `--navy-dark` | `#0D1B4B` | Hero bg, footer bg |
| `--gold` | `#F5A623` | Accents, CTA buttons, highlights |
| `--sky` | `#4A90D9` | Secondary accent, badges |
| `--white` | `#FFFFFF` | Page background |

### Typography
- **Headings / UI**: Press Start 2P (pixel font)
- **Mono / terminal**: Share Tech Mono
- **Body**: Exo 2

### Component Patterns
- Pixel-style "press" buttons with offset box-shadows
- CRT scanline overlays on game screens
- Retro terminal for the about section
- Sticky header with gold/blue gradient accent bar

---

## Brand & Technical Compliance

This build follows both the **Pacedall Global Design Guidelines** and **Pacedall Technical Standards v1.0**:

- ✅ White (#FFFFFF) page backgrounds
- ✅ Navy/Gold/Sky brand colours throughout
- ✅ WCAG AA contrast on all text
- ✅ Sticky header on all pages
- ✅ Back-to-top button on long pages
- ✅ Large, prominent logo in every header
- ✅ Footer includes terms.pacedall.com and privacy.pacedall.com (mandatory, visible, large)
- ✅ Fully responsive: mobile, tablet, desktop
- ✅ No account, email, or password required (Technical Standards §1.1)
- ✅ No persistent cookies, no session data stored server-side (§1.2)
- ✅ Zero personal data collection or retention (§2.1)
- ✅ HTTPS required on deployment (§2.4)
- ✅ All legal links present in HTML source, not JS-injected (§12.1)

---

## Deployment (GitHub Pages)

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **main branch, root folder**
4. Your site will be live at `https://yourusername.github.io/repo-name`

For a custom domain (arcade.pacedall.com):
- Add a `CNAME` file with the domain
- Configure DNS: CNAME record pointing to `yourusername.github.io`

---

## Game Pages

Each game is linked via `game.html?id=GAMEID`. Current game IDs:

`invaders` · `snake` · `breakout` · `asteroids` · `frogger` · `tetris` · `pacman` · `galaga` · `defender` · `pong` · `donkey` · `centipede`

The game player page (`game.html`) is a template — drop in the actual game canvas/JS per game.

---

© 2026 Pacedall Labs. All rights reserved.  
terms.pacedall.com | privacy.pacedall.com
