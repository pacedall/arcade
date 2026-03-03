/* ===========================
   PACEDALL ARCADE — script.js
   =========================== */

// ---- Games Data ----
const GAMES = [
  { id: 1, name: 'Wave Rider', icon: '🌊', category: 'endless', type: 'free', rating: 4.9, players: '12k', gradient: 'linear-gradient(135deg,#FF6B35,#FFB700)', tag: 'hot' },
  { id: 2, name: 'Gravity Jump', icon: '⚡', category: 'action', type: 'free', rating: 4.6, players: '8.4k', gradient: 'linear-gradient(135deg,#1B3A8C,#3B82F6)', tag: 'new' },
  { id: 3, name: 'Neon Blaster', icon: '🚀', category: 'action', type: 'premium', rating: 5.0, players: '22k', gradient: 'linear-gradient(135deg,#7C3AED,#EC4899)', tag: 'pro' },
  { id: 4, name: 'Snake Rush', icon: '🐍', category: 'retro', type: 'free', rating: 4.7, players: '9.2k', gradient: 'linear-gradient(135deg,#059669,#34D399)', tag: 'new' },
  { id: 5, name: 'Pixel Dodge', icon: '🟦', category: 'action', type: 'free', rating: 4.5, players: '6.1k', gradient: 'linear-gradient(135deg,#0F172A,#334155)', tag: '' },
  { id: 6, name: 'Tower Blitz', icon: '🏰', category: 'puzzle', type: 'free', rating: 4.3, players: '4.8k', gradient: 'linear-gradient(135deg,#92400E,#F59E0B)', tag: '' },
  { id: 7, name: 'Retro Racer', icon: '🏎️', category: 'racing', type: 'premium', rating: 4.8, players: '15k', gradient: 'linear-gradient(135deg,#DC2626,#FCA5A5)', tag: 'pro' },
  { id: 8, name: 'Bubble Pop', icon: '🫧', category: 'chill', type: 'free', rating: 4.4, players: '7.3k', gradient: 'linear-gradient(135deg,#0EA5E9,#67E8F9)', tag: '' },
  { id: 9, name: 'Moon Runner', icon: '🌙', category: 'endless', type: 'free', rating: 4.6, players: '5.9k', gradient: 'linear-gradient(135deg,#1E1B4B,#6366F1)', tag: 'new' },
  { id: 10, name: 'Block Stacker', icon: '📦', category: 'puzzle', type: 'premium', rating: 4.7, players: '11k', gradient: 'linear-gradient(135deg,#166534,#4ADE80)', tag: 'pro' },
  { id: 11, name: 'Drift King', icon: '💨', category: 'racing', type: 'free', rating: 4.2, players: '3.2k', gradient: 'linear-gradient(135deg,#7C2D12,#FB923C)', tag: '' },
  { id: 12, name: 'Zen Garden', icon: '🪨', category: 'chill', type: 'free', rating: 4.9, players: '8.7k', gradient: 'linear-gradient(135deg,#4D7C0F,#A3E635)', tag: '' },
];

const LEADERBOARD = [
  { rank: 1, user: 'PacePlayer99', color: '#FF6B35', game: 'Wave Rider', score: '248,500' },
  { rank: 2, user: 'ArcadeKing', color: '#1B5FBF', game: 'Tower Blitz', score: '231,100' },
  { rank: 3, user: 'PixelPro7', color: '#7C3AED', game: 'Neon Blaster', score: '198,750' },
  { rank: 4, user: 'NeonRider', color: '#059669', game: 'Snake Rush', score: '187,300' },
  { rank: 5, user: 'RetroAce', color: '#DC2626', game: 'Gravity Jump', score: '175,920' },
  { rank: 6, user: 'WaveChaser', color: '#0EA5E9', game: 'Wave Rider', score: '162,440' },
  { rank: 7, user: 'GamerX42', color: '#D97706', game: 'Pixel Dodge', score: '154,880' },
  { rank: 8, user: 'SpeedDemon', color: '#EC4899', game: 'Retro Racer', score: '148,220' },
];

// ---- Render Games Grid ----
function renderGames(filter = 'all') {
  const grid = document.getElementById('games-grid');
  if (!grid) return;
  const filtered = filter === 'all' ? GAMES :
    filter === 'free' ? GAMES.filter(g => g.type === 'free') :
    filter === 'premium' ? GAMES.filter(g => g.type === 'premium') :
    GAMES.filter(g => g.tag === 'new');

  grid.innerHTML = filtered.map(game => `
    <div class="game-card" data-type="${game.type}" data-category="${game.category}" style="animation: fadeSlideUp 0.4s ease both">
      <div class="game-thumb" style="background: ${game.gradient};">
        <div class="game-icon">${game.icon}</div>
      </div>
      <div class="game-info">
        <div class="game-meta">
          ${game.tag === 'hot' ? '<span class="tag tag-hot">🔥 Hot</span>' : ''}
          ${game.tag === 'new' ? '<span class="tag tag-new">✨ New</span>' : ''}
          ${game.tag === 'pro' ? '<span class="tag tag-pro">👑 Pro</span>' : ''}
          ${game.type === 'free' ? '<span class="tag tag-free">Free</span>' : '<span class="tag tag-sub">Premium</span>'}
        </div>
        <h3 class="game-name">${game.name}</h3>
        <div class="game-footer">
          <div class="game-rating">★ <span>${game.rating} • ${game.players}</span></div>
          ${game.type === 'free'
            ? '<a href="#" class="btn btn-primary btn-sm">Play</a>'
            : '<a href="signup.html" class="btn btn-outline btn-sm">Unlock</a>'}
        </div>
      </div>
    </div>
  `).join('');
}

// ---- Render Leaderboard ----
function renderLeaderboard() {
  const container = document.getElementById('lb-rows');
  if (!container) return;
  container.innerHTML = LEADERBOARD.map(row => {
    const rankClass = row.rank <= 3 ? `lb-rank-${row.rank}` : '';
    const medal = row.rank === 1 ? '🥇' : row.rank === 2 ? '🥈' : row.rank === 3 ? '🥉' : row.rank;
    return `
      <div class="lb-row">
        <span class="lb-rank ${rankClass}">${medal}</span>
        <div class="lb-player">
          <div class="lb-avatar" style="background: ${row.color}">${row.user[0]}</div>
          <span class="lb-username">${row.user}</span>
        </div>
        <span class="lb-game">${row.game}</span>
        <span class="lb-score">${row.score}</span>
      </div>
    `;
  }).join('');
}

// ---- Filter Buttons ----
function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGames(btn.dataset.filter);
    });
  });
}

// ---- Load More ----
function initLoadMore() {
  const btn = document.getElementById('load-more');
  if (!btn) return;
  btn.addEventListener('click', () => {
    btn.textContent = '✓ All Games Loaded';
    btn.disabled = true;
    btn.style.opacity = '0.5';
  });
}

// ---- Leaderboard Tabs ----
function initLeaderboardTabs() {
  const tabs = document.querySelectorAll('.lb-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderLeaderboard(); // would filter in real app
    });
  });
}

// ---- Mini Pixel Game on Canvas ----
const PIXEL_SIZE = 12;
let snakeBody = [{ x: 10, y: 8 }, { x: 9, y: 8 }, { x: 8, y: 8 }];
let dir = { x: 1, y: 0 };
let food = { x: 16, y: 5 };
let score = 0;
let gameLoop;

function initMiniGame() {
  const canvas = document.getElementById('mini-game');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cols = Math.floor(canvas.width / PIXEL_SIZE);
  const rows = Math.floor(canvas.height / PIXEL_SIZE);

  function spawnFood() {
    food = {
      x: Math.floor(Math.random() * cols),
      y: Math.floor(Math.random() * rows)
    };
  }

  function draw() {
    // Background
    ctx.fillStyle = '#050E1F';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid
    ctx.strokeStyle = 'rgba(59,130,246,0.08)';
    ctx.lineWidth = 0.5;
    for (let x = 0; x < cols; x++) {
      ctx.beginPath();
      ctx.moveTo(x * PIXEL_SIZE, 0);
      ctx.lineTo(x * PIXEL_SIZE, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < rows; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * PIXEL_SIZE);
      ctx.lineTo(canvas.width, y * PIXEL_SIZE);
      ctx.stroke();
    }

    // Food
    ctx.fillStyle = '#FF6B35';
    ctx.shadowColor = '#FF6B35';
    ctx.shadowBlur = 8;
    ctx.fillRect(food.x * PIXEL_SIZE + 2, food.y * PIXEL_SIZE + 2, PIXEL_SIZE - 4, PIXEL_SIZE - 4);
    ctx.shadowBlur = 0;

    // Snake
    snakeBody.forEach((seg, i) => {
      const alpha = 1 - (i / snakeBody.length) * 0.5;
      ctx.fillStyle = i === 0 ? '#FFB700' : `rgba(59,130,246,${alpha})`;
      if (i === 0) {
        ctx.shadowColor = '#FFB700';
        ctx.shadowBlur = 10;
      }
      ctx.fillRect(seg.x * PIXEL_SIZE + 1, seg.y * PIXEL_SIZE + 1, PIXEL_SIZE - 2, PIXEL_SIZE - 2);
      ctx.shadowBlur = 0;
    });
  }

  function update() {
    const head = {
      x: (snakeBody[0].x + dir.x + cols) % cols,
      y: (snakeBody[0].y + dir.y + rows) % rows
    };

    if (head.x === food.x && head.y === food.y) {
      score += 10;
      const el = document.getElementById('score-display');
      if (el) el.textContent = String(score).padStart(5, '0');
      spawnFood();
      snakeBody.unshift(head);
    } else {
      snakeBody.unshift(head);
      snakeBody.pop();
    }

    // Collision with self
    for (let i = 1; i < snakeBody.length; i++) {
      if (snakeBody[i].x === head.x && snakeBody[i].y === head.y) {
        snakeBody = [{ x: 10, y: 8 }, { x: 9, y: 8 }, { x: 8, y: 8 }];
        dir = { x: 1, y: 0 };
        score = 0;
        const el = document.getElementById('score-display');
        if (el) el.textContent = '00000';
        spawnFood();
        break;
      }
    }

    draw();
  }

  // Random direction change for auto-play demo
  setInterval(() => {
    const options = [
      { x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }
    ].filter(d => !(d.x === -dir.x && d.y === -dir.y));

    // Try to steer toward food
    const head = snakeBody[0];
    const dx = food.x - head.x;
    const dy = food.y - head.y;
    const prefer = [];
    if (dx > 0 && dir.x !== -1) prefer.push({ x: 1, y: 0 });
    if (dx < 0 && dir.x !== 1) prefer.push({ x: -1, y: 0 });
    if (dy > 0 && dir.y !== -1) prefer.push({ x: 0, y: 1 });
    if (dy < 0 && dir.y !== 1) prefer.push({ x: 0, y: -1 });

    if (prefer.length > 0 && Math.random() > 0.3) {
      dir = prefer[Math.floor(Math.random() * prefer.length)];
    } else if (Math.random() > 0.7) {
      dir = options[Math.floor(Math.random() * options.length)];
    }
  }, 400);

  gameLoop = setInterval(update, 120);
  draw();
}

// ---- Hamburger Menu ----
function initHamburger() {
  const btn = document.getElementById('hamburger');
  if (!btn) return;
  btn.addEventListener('click', () => {
    // Simple toggle — in production would show mobile menu
    btn.classList.toggle('open');
  });
}

// ---- Intersection Observer for Card Animations ----
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeSlideUp 0.5s ease both';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.game-card, .category-card, .price-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  renderGames();
  renderLeaderboard();
  initFilters();
  initLoadMore();
  initLeaderboardTabs();
  initMiniGame();
  initHamburger();
  setTimeout(initScrollAnimations, 100);
});
