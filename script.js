/* =============================================
   PACEDALL ARCADE v2 — script.js
   ============================================= */

// ---- GAME DATA ----
const GAMES = [
  {
    id: 'invaders',
    name: 'SPACE INVADERS',
    desc: 'Classic 1978-style alien shooter. Defend Earth row by row. How long can you survive?',
    icon: '👾',
    color: '#1B2A6B',
    bg: 'linear-gradient(160deg,#0D1B4B 0%,#1B2A6B 100%)',
    category: 'shooter',
    badges: ['free', 'offline', 'hot'],
    platforms: 'BROWSER · iOS · ANDROID'
  },
  {
    id: 'snake',
    name: 'SNAKE CLASSIC',
    desc: 'The iconic snake game reimagined. Grow your snake, collect dots, and don\'t crash.',
    icon: '🐍',
    color: '#2d8a3e',
    bg: 'linear-gradient(160deg,#064e3b 0%,#065f46 100%)',
    category: 'action',
    badges: ['free', 'offline'],
    platforms: 'BROWSER · iOS · ANDROID'
  },
  {
    id: 'breakout',
    name: 'BRICK BREAKER',
    desc: 'Smash bricks with your paddle and ball. Multiple levels, power-ups, and infinite replay.',
    icon: '🧱',
    color: '#F5A623',
    bg: 'linear-gradient(160deg,#7c2d12 0%,#c2410c 100%)',
    category: 'action',
    badges: ['free', 'new', 'offline'],
    platforms: 'BROWSER · iOS · ANDROID'
  },
  {
    id: 'asteroids',
    name: 'ASTEROID BELT',
    desc: 'Navigate through asteroid fields and blast your way to the high score.',
    icon: '☄️',
    color: '#4A90D9',
    bg: 'linear-gradient(160deg,#1e1b4b 0%,#312e81 100%)',
    category: 'shooter',
    badges: ['free', 'new'],
    platforms: 'BROWSER · iOS · ANDROID'
  },
  {
    id: 'frogger',
    name: 'ROAD HOPPER',
    desc: 'Classic 1981 frog-crossing action. Dodge cars, logs and reach the safe zone.',
    icon: '🐸',
    color: '#059669',
    bg: 'linear-gradient(160deg,#14532d 0%,#166534 100%)',
    category: 'action',
    badges: ['free', 'offline'],
    platforms: 'BROWSER · iOS · ANDROID'
  },
  {
    id: 'tetris',
    name: 'BLOCK FALL',
    desc: 'Falling block puzzler with classic Tetris DNA. Clear rows, build combos.',
    icon: '🟦',
    color: '#7C3AED',
    bg: 'linear-gradient(160deg,#4c1d95 0%,#5b21b6 100%)',
    category: 'puzzle',
    badges: ['free', 'offline', 'hot'],
    platforms: 'BROWSER · iOS · ANDROID'
  },
  {
    id: 'pacman',
    name: 'DOT PATROL',
    desc: 'Eat all the dots, avoid the ghosts. A loving tribute to the 1980 icon.',
    icon: '🟡',
    color: '#F5A623',
    bg: 'linear-gradient(160deg,#78350f 0%,#92400e 100%)',
    category: 'action',
    badges: ['free', 'offline'],
    platforms: 'BROWSER · iOS · ANDROID'
  },
  {
    id: 'galaga',
    name: 'GALAGA ECHO',
    desc: 'Wave-based alien shooter inspired by 1981\'s Galaga. Formation attacks included.',
    icon: '🚀',
    color: '#EC4899',
    bg: 'linear-gradient(160deg,#701a75 0%,#7e22ce 100%)',
    category: 'shooter',
    badges: ['free', 'new'],
    platforms: 'BROWSER · iOS · ANDROID'
  },
  {
    id: 'defender',
    name: 'SIDE DEFENDER',
    desc: 'Side-scrolling shoot-em-up. Protect your base from endless waves of invaders.',
    icon: '✈️',
    color: '#0EA5E9',
    bg: 'linear-gradient(160deg,#0c4a6e 0%,#075985 100%)',
    category: 'runner',
    badges: ['free'],
    platforms: 'BROWSER · iOS · ANDROID'
  },
  {
    id: 'pong',
    name: 'PONG DUEL',
    desc: 'The game that started it all. 1972 Pong reimagined with 1v1 and AI opponent modes.',
    icon: '🏓',
    color: '#FFFFFF',
    bg: 'linear-gradient(160deg,#111827 0%,#1f2937 100%)',
    category: 'action',
    badges: ['free', 'offline'],
    platforms: 'BROWSER · iOS · ANDROID'
  },
  {
    id: 'donkey',
    name: 'BARREL RUN',
    desc: 'Jump over rolling barrels, climb ladders and rescue the prize. Platform nostalgia.',
    icon: '🦍',
    color: '#D97706',
    bg: 'linear-gradient(160deg,#431407 0%,#7c2d12 100%)',
    category: 'runner',
    badges: ['free', 'offline'],
    platforms: 'BROWSER · iOS · ANDROID'
  },
  {
    id: 'centipede',
    name: 'CENTIPEDE',
    desc: 'The 1980 Atari classic. Blast the centipede before it reaches the bottom.',
    icon: '🐛',
    color: '#10B981',
    bg: 'linear-gradient(160deg,#064e3b 0%,#065f46 100%)',
    category: 'shooter',
    badges: ['free'],
    platforms: 'BROWSER · iOS · ANDROID'
  }
];

const FAQ_DATA = [
  {
    q: 'DO I NEED TO CREATE AN ACCOUNT?',
    a: 'No. Pacedall Arcade requires no account, no email address, and no password. Open any game and play instantly. This is intentional — we built Pacedall Arcade to be as frictionless as possible.'
  },
  {
    q: 'HOW DOES OFFLINE MODE WORK?',
    a: 'When you install the Pacedall Arcade app on iOS or Android, all game assets are stored on your device during installation. After that, no internet connection is required to play any game. Your scores are stored locally on your device.'
  },
  {
    q: 'ARE THE GAMES REALLY BUILT BY AI?',
    a: 'Yes. Every game in Pacedall Arcade — the code, mechanics, level design, and balancing — is designed and written by artificial intelligence under the Pacedall Labs umbrella. Human oversight is applied for quality and safety review.'
  },
  {
    q: 'WHAT DATA DO YOU COLLECT?',
    a: 'Nothing. Pacedall Arcade operates a strict zero data retention policy. We do not collect personal information, usage analytics, device fingerprints, or any other data. Scores are stored only on your local device and are never transmitted to any server.'
  },
  {
    q: 'WHICH DEVICES AND BROWSERS ARE SUPPORTED?',
    a: 'Browser: Chrome, Safari, Firefox, Edge, and Opera (latest two versions). Mobile: iOS 16+ (iPhone & iPad) and Android 9.0+. All games support both touch and keyboard/mouse input.'
  },
  {
    q: 'ARE THE GAMES FREE FOREVER?',
    a: 'Yes. All games on Pacedall Arcade are free to play — in the browser and in the mobile apps. There are no in-app purchases, subscriptions, or premium tiers planned. No ads either.'
  },
  {
    q: 'HOW OFTEN ARE NEW GAMES ADDED?',
    a: 'Because the games are AI-built, we can release new titles much faster than traditional development. Our target is one new game per month, though this may vary. Follow us on social media for announcements.'
  }
];

const PRODUCTS = [
  'Pacedall Signal', 'Pacedall Mirror', 'Pacedall Flow', 'Pacedall Voice',
  'Pacedall Clarity', 'Pacedall Breath', 'Pacedall Pulse', 'Pacedall Tempo',
  'Pacedall Noise', 'Pacedall Cast', 'Pacedall Focus', 'Pacedall Recall'
];

// ---- Render Games ----
function renderGames(cat = 'all') {
  const grid = document.getElementById('games-grid');
  if (!grid) return;
  const list = cat === 'all' ? GAMES : GAMES.filter(g => g.category === cat);

  grid.innerHTML = list.map((g, i) => {
    const badgeHTML = g.badges.map(b => {
      const labels = { free:'FREE', offline:'OFFLINE', new:'NEW', hot:'HOT' };
      return `<span class="game-badge badge-${b}">${labels[b]}</span>`;
    }).join('');
    return `
    <article class="game-card" style="animation: fadeUp 0.35s ${i * 0.05}s ease both">
      <div class="game-screen" style="background: ${g.bg}">
        <div class="game-pixel-art" style="color: ${g.color}">${g.icon}</div>
        <div class="game-screen-overlay"></div>
      </div>
      <div class="game-info">
        <div class="game-badges">${badgeHTML}</div>
        <h3 class="game-name">${g.name}</h3>
        <p class="game-desc">${g.desc}</p>
        <div class="game-footer">
          <span class="game-platform">${g.platforms}</span>
          <a href="game.html?id=${g.id}" class="btn btn-crt btn-sm">PLAY →</a>
        </div>
      </div>
    </article>`;
  }).join('');
}

// ---- Filter Pills ----
function initFilters() {
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGames(btn.dataset.cat);
    });
  });
}

// ---- FAQ Accordion ----
function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = FAQ_DATA.map((item, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question" aria-expanded="false" aria-controls="faq-ans-${i}">
        <span>${item.q}</span>
        <span class="faq-toggle">+</span>
      </button>
      <div class="faq-answer" id="faq-ans-${i}" role="region">
        <div class="faq-answer-inner">${item.a}</div>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      list.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ---- Products Row ----
function renderProducts() {
  const row = document.getElementById('products-row');
  if (!row) return;
  row.innerHTML = PRODUCTS.map((p, i) => `
    <button class="product-chip${i === PRODUCTS.length ? ' active-product' : ''}">${p}</button>
  `).join('');
}

// ---- Arcade Canvas (Space Invaders Demo) ----
const PIXEL = 12;
let entities = {
  player: { x: 110, y: 175, w: 20, h: 10 },
  bullets: [],
  invaders: [],
  invaderDir: 1,
  invaderSpeed: 0.6,
  frame: 0,
  score: 0
};

function spawnInvaders() {
  entities.invaders = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 7; c++) {
      entities.invaders.push({
        x: 12 + c * 30, y: 20 + r * 24,
        alive: true,
        type: r
      });
    }
  }
}

function drawCanvas() {
  const canvas = document.getElementById('arcade-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  entities.frame++;

  // BG
  ctx.fillStyle = '#050A1E';
  ctx.fillRect(0, 0, W, H);

  // Stars
  if (entities.frame % 60 === 0) {
    for (let i = 0; i < 3; i++) {
      const sx = Math.random() * W;
      const sy = Math.random() * H * 0.6;
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.fillRect(sx, sy, 1, 1);
    }
  }
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  for (let i = 0; i < 20; i++) {
    const x = (i * 71) % W;
    const y = (i * 37 + entities.frame * 0.1) % (H * 0.7);
    ctx.fillRect(x, y, 1, 1);
  }

  // Score
  ctx.fillStyle = '#F5A623';
  ctx.font = '8px "Press Start 2P", monospace';
  ctx.fillText(`${entities.score}`, W / 2 - 12, 14);

  // Move invaders
  let edge = false;
  entities.invaders.forEach(inv => {
    if (!inv.alive) return;
    inv.x += entities.invaderDir * entities.invaderSpeed;
    if (inv.x > W - 24 || inv.x < 4) edge = true;
  });
  if (edge) {
    entities.invaderDir *= -1;
    entities.invaders.forEach(inv => { if (inv.alive) inv.y += 8; });
  }

  // Invaders respawn
  if (entities.invaders.every(i => !i.alive)) {
    entities.score += 100;
    entities.invaderSpeed += 0.2;
    spawnInvaders();
  }

  // Draw invaders
  entities.invaders.forEach(inv => {
    if (!inv.alive) return;
    const colors = ['#FF6B6B', '#F5A623', '#39FF14'];
    const emojis = ['▼', '◆', '●'];
    ctx.fillStyle = colors[inv.type];
    ctx.font = `${PIXEL}px monospace`;
    ctx.fillText(emojis[inv.type], inv.x, inv.y);
  });

  // Auto-shoot
  if (entities.frame % 70 === 0) {
    entities.bullets.push({ x: entities.player.x + 10, y: entities.player.y - 5, vy: -5 });
  }

  // Auto-move player
  const targetInv = entities.invaders.find(i => i.alive);
  if (targetInv) {
    const dx = targetInv.x - entities.player.x;
    entities.player.x += Math.sign(dx) * 1.2;
    entities.player.x = Math.max(4, Math.min(W - 24, entities.player.x));
  }

  // Move & draw bullets
  entities.bullets = entities.bullets.filter(b => b.y > -5);
  entities.bullets.forEach(b => {
    b.y += b.vy;
    ctx.fillStyle = '#F5A623';
    ctx.fillRect(b.x, b.y, 3, 10);
    // Hit test
    entities.invaders.forEach(inv => {
      if (!inv.alive) return;
      if (b.x > inv.x && b.x < inv.x + 14 && b.y > inv.y - 14 && b.y < inv.y) {
        inv.alive = false;
        entities.score += 10;
        b.y = -100;
      }
    });
  });

  // Draw player ship
  ctx.fillStyle = '#4A90D9';
  ctx.fillText('▲', entities.player.x, entities.player.y);

  // Ground line
  ctx.strokeStyle = 'rgba(74,144,217,0.4)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, H - 14);
  ctx.lineTo(W, H - 14);
  ctx.stroke();

  ctx.fillStyle = 'rgba(245,166,35,0.8)';
  ctx.font = '6px "Share Tech Mono", monospace';
  ctx.fillText('PACEDALL ARCADE', 4, H - 4);
}

function startCanvas() {
  spawnInvaders();
  setInterval(drawCanvas, 50);
}

// ---- Header scroll state ----
function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ---- Hamburger ----
function initMobileNav() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mobile-nav');
  const close = document.getElementById('mobile-close');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => nav.classList.add('open'));
  close?.addEventListener('click', () => nav.classList.remove('open'));
  nav.querySelectorAll('.mobile-nav-link, .btn-crt').forEach(el => {
    el.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// ---- Back to Top ----
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ---- Counter Animation ----
function animateCounter(el, target) {
  let current = 0;
  const step = Math.ceil(target / 30);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(timer);
  }, 40);
}
function initCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = parseInt(e.target.dataset.target);
        if (!isNaN(target)) animateCounter(e.target, target);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(el => observer.observe(el));
}

// ---- Scroll Reveal ----
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animation = 'fadeUp 0.5s ease both';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.platform-card, .principle, .stat-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  renderGames();
  renderFAQ();
  renderProducts();
  initFilters();
  initHeader();
  initMobileNav();
  initBackToTop();
  initCounters();
  startCanvas();
  setTimeout(initScrollReveal, 200);
});
