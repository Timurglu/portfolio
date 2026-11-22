/**
 * Pull Cord Theme Switcher
 * Translated from DesignBookmark Motion Studies (https://designbookmark.com/motion#db-pull-cord)
 * Realistic Verlet rope physics + spring dynamics + circular light reveal
 */

(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Spring primitive
  const S = (x, k = 400, c = 30) => ({ x, v: 0, t: x, k, c: reduce ? 2 * Math.sqrt(k) : c });
  const tune = (s, k, c) => { s.k = k; s.c = reduce ? 2 * Math.sqrt(k) : c; };
  const step = (s, dt) => {
    const a = -s.k * (s.x - s.t) - s.c * s.v;
    s.v += a * dt;
    s.x += s.v * dt;
  };
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  let timeScale = 1;
  const timers = [];
  const after = (sec, fn) => {
    const t = { t: sec, fn };
    timers.push(t);
    return t;
  };

  const comps = [];
  let lastTime = performance.now();
  function loop(now) {
    const dt = Math.min((now - lastTime) / 1000, 1 / 30) * timeScale;
    lastTime = now;
    for (let i = timers.length - 1; i >= 0; i--) {
      if ((timers[i].t -= dt) <= 0) timers.splice(i, 1)[0].fn();
    }
    const sub = 4;
    for (let k = 0; k < sub; k++) comps.forEach(c => c.frame(dt / sub));
    comps.forEach(c => c.render());
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  function initPullCord() {
    const root = document.getElementById("pull-cord");
    if (!root) return;
    const scene = document.getElementById("pull-cord-scene");
    const grab = document.getElementById("pull-cord-grab");
    const lamp = root.querySelector(".pull-cord-lamp");
    const wire = root.querySelector(".pull-cord-wire path");
    const head = root.querySelector(".pull-cord-head");
    const bulb = root.querySelector(".pull-cord-bulb");
    const rope = root.querySelector(".pull-cord-rope path");
    const bead = root.querySelector(".pull-cord-bead");

    if (!scene || !grab || !lamp || !wire || !head || !bulb || !rope || !bead) return;

    const WIRE = 28, SHADE = 66, AX = 34, AY = SHADE - 3;
    const N = 12, SEG = 9, L = N * SEG;
    const CLICK = 22, MAXS = 54;

    const TH = S(0, 46, 3);
    const TUG = S(0, 300, 13);
    const R = S(0, 120, 21);
    const BP = S(1, 420, 13);
    tune(TH, 46, 3); tune(TUG, 300, 13); tune(R, 120, 21); tune(BP, 420, 13);

    const HX = S(0, 210, 22), HY = S(0, 210, 22);
    const K = S(1, 300, 17); tune(K, 300, 17);

    // Initial theme state
    const currentTheme = document.documentElement.dataset.theme || "light";
    let on = currentTheme === "light";
    let armed = true, held = null, ghost = false, stretch = 0, lean = 0;
    let clock = 0, userUntil = 0, side = 1, W = 140, H = 260;
    let lastKnownTheme = currentTheme;

    grab.setAttribute("aria-checked", String(on));
    root.setAttribute("data-lit", String(on));
    if (on) { R.x = R.t = 1; }

    const pts = [];
    const anchor = () => {
      const c = Math.cos(TH.x), s = Math.sin(TH.x), y = WIRE + TUG.x + AY;
      return [W / 2 + AX * c - y * s, AX * s + y * c];
    };
    const bulbAt = () => {
      const c = Math.cos(TH.x), s = Math.sin(TH.x), y = WIRE + TUG.x + 63;
      return [W / 2 - y * s, y * c];
    };

    function measure() {
      const rect = scene.getBoundingClientRect();
      W = rect.width || 140;
      H = rect.height || 310;
      if (!pts.length) {
        const [ax, ay] = anchor();
        for (let i = 0; i <= N; i++) pts.push({ x: ax, y: ay + i * SEG, vx: 0, vy: 0 });
      }
    }
    measure();

    function triggerThemeTransition(newTheme) {
      const bRect = bulb.getBoundingClientRect();
      const bx = bRect.left + bRect.width / 2;
      const by = bRect.top + bRect.height / 2;

      const applyThemeState = () => {
        document.documentElement.dataset.theme = newTheme;
        try {
          localStorage.setItem("timur-portfolio.prime.v1.theme", JSON.stringify(newTheme));
        } catch {}
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) metaTheme.content = newTheme === "dark" ? "#19191c" : "#f7f7f4";

        const themeToggle = document.getElementById("theme-toggle");
        if (themeToggle) {
          const dark = newTheme === "dark";
          themeToggle.setAttribute("aria-pressed", String(dark));
          themeToggle.title = dark ? "Включить светлую тему" : "Включить тёмную тему";
          const glyph = document.getElementById("theme-glyph");
          if (glyph) {
            glyph.setAttribute("data-morph-state", dark ? "sun" : "moon");
          }
        }
      };

      if (!document.startViewTransition || reduce) {
        applyThemeState();
        return;
      }

      const far = Math.hypot(
        Math.max(bx, window.innerWidth - bx),
        Math.max(by, window.innerHeight - by)
      );

      const transition = document.startViewTransition(() => {
        applyThemeState();
      });

      transition.ready.then(() => {
        const keyframes = newTheme === "light"
          ? [
              { clipPath: `circle(0px at ${bx.toFixed(1)}px ${by.toFixed(1)}px)` },
              { clipPath: `circle(${far.toFixed(1)}px at ${bx.toFixed(1)}px ${by.toFixed(1)}px)` }
            ]
          : [
              { clipPath: `circle(${far.toFixed(1)}px at ${bx.toFixed(1)}px ${by.toFixed(1)}px)` },
              { clipPath: `circle(0px at ${bx.toFixed(1)}px ${by.toFixed(1)}px)` }
            ];

        document.documentElement.animate(keyframes, {
          duration: 520,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          pseudoElement: newTheme === "light" ? "::view-transition-new(root)" : "::view-transition-old(root)"
        });
      }).catch(() => {});
    }

    function flip(to = !on) {
      if (to === on) return;
      on = to;
      grab.setAttribute("aria-checked", String(on));
      root.setAttribute("data-lit", String(on));
      BP.x = on ? 1.35 : 0.8;
      TUG.v += 150;

      const newTheme = on ? "light" : "dark";
      lastKnownTheme = newTheme;

      after(0.08, () => {
        triggerThemeTransition(newTheme);
        scene.dispatchEvent(new CustomEvent("motion:theme", {
          bubbles: true,
          composed: true,
          detail: { light: on, theme: newTheme }
        }));
      });
    }

    const pin = () => (held ? [held.x, held.y] : ghost ? [HX.x, HY.x] : null);

    function pull() {
      if (ghost || held) return;
      const b = pts[N];
      ghost = true;
      armed = true;
      side = -side;
      HX.x = b.x;
      HY.x = b.y;
      HX.v = b.vx;
      HY.v = b.vy;
      const [ax, ay] = anchor();
      HX.t = ax + side * 24;
      HY.t = ay + L + 62;
      after(1.05, () => { ghost = false; });
    }

    const local = e => {
      const r = scene.getBoundingClientRect();
      return [e.clientX - r.left, e.clientY - r.top];
    };

    grab.addEventListener("pointerdown", e => {
      const [x, y] = local(e);
      const b = pts[N];
      held = {
        id: e.pointerId,
        x: b.x,
        y: b.y,
        ox: b.x - x,
        oy: b.y - y,
        moved: 0,
        sx: x,
        sy: y,
        flipped: false
      };
      ghost = false;
      armed = true;
      userUntil = clock + 7;
      try { grab.setPointerCapture(e.pointerId); } catch {}
      grab.classList.add("is-held");
    });

    window.addEventListener("pointermove", e => {
      if (!held || e.pointerId !== held.id) return;
      const [x, y] = local(e);
      held.x = x + held.ox;
      held.y = y + held.oy;
      held.moved = Math.max(held.moved, Math.hypot(x - held.sx, y - held.sy));
      userUntil = clock + 7;
    });

    function drop(e) {
      if (!held || e.pointerId !== held.id) return;
      const tap = held.moved < 5 && !held.flipped && e.type === "pointerup";
      held = null;
      grab.classList.remove("is-held");
      if (tap) pull();
    }

    window.addEventListener("pointerup", drop);
    window.addEventListener("pointercancel", drop);

    grab.addEventListener("click", e => {
      if (!e.detail) {
        userUntil = clock + 7;
        pull();
      }
    });

    // Gentle idle sway: if untouched, a tiny playful breeze reminds the visitor it's interactive
    (function idleBreeze() {
      if (clock >= userUntil && !held && !ghost && pts.length > N) {
        pts[N].vx += (Math.random() < 0.5 ? 26 : -26);
      }
      after(7.5, idleBreeze);
    })();

    // Synchronize if theme is toggled externally (e.g. from header button or system theme)
    (function watchExternalTheme() {
      const docTheme = document.documentElement.dataset.theme || "light";
      if (docTheme !== lastKnownTheme) {
        lastKnownTheme = docTheme;
        flip(docTheme === "light");
      }
      after(0.35, watchExternalTheme);
    })();

    const component = {
      frame(dt) {
        clock += dt;
        [TH, TUG, R, BP, HX, HY, K].forEach(s => step(s, dt));
        if (dt <= 0) return;
        const [ax, ay] = anchor(), p = pin(), b = pts[N];

        let px = 0, py = 0;
        stretch = 0; lean = 0;
        if (p) {
          const dx = p[0] - ax, dy = p[1] - ay, d = Math.hypot(dx, dy) || 1;
          const over = Math.max(0, d - L), give = MAXS * (1 - Math.exp(-over / 70)), r = Math.min(d, L) + give;
          px = ax + dx / d * r;
          py = ay + dy / d * r;
          stretch = give;
          lean = over > 0 ? dx / d : 0;
          if (over > 0) { K.x = K.t = r / L; K.v = 0; }
          if (armed && give > CLICK) {
            armed = false;
            flip();
            if (held) held.flipped = true;
            else after(0.12, () => { ghost = false; });
          }
        }
        if (!p || !stretch) K.t = 1;
        const seg = SEG * Math.max(1, K.x);
        TUG.t = stretch * 0.22;
        TH.t = clamp(-lean * stretch / MAXS * 0.5, -0.3, 0.3);

        const prev = pts.map(q => [q.x, q.y]);
        for (let i = 1; i <= N; i++) {
          const q = pts[i], k = Math.exp(-(i === N ? 1.1 : 2.4) * dt);
          q.vy += 2600 * dt; q.vx *= k; q.vy *= k;
          const sp = Math.hypot(q.vx, q.vy);
          if (sp > 2600) { q.vx *= 2600 / sp; q.vy *= 2600 / sp; }
          q.x += q.vx * dt; q.y += q.vy * dt;
        }
        for (let it = 0; it < 8; it++) {
          pts[0].x = ax; pts[0].y = ay;
          if (p) { b.x = px; b.y = py; }
          for (let i = 0; i < N; i++) {
            const a = pts[i], c = pts[i + 1], dx = c.x - a.x, dy = c.y - a.y;
            const d = Math.hypot(dx, dy) || 1e-6, f = (d - seg) / d * 0.5;
            const wa = i === 0 ? 0 : 1, wc = i + 1 === N ? (p ? 0 : 0.3) : 1, sum = wa + wc || 1;
            a.x += dx * f * wa / sum * 2; a.y += dy * f * wa / sum * 2;
            c.x -= dx * f * wc / sum * 2; c.y -= dy * f * wc / sum * 2;
          }
        }
        pts[0].x = ax; pts[0].y = ay;
        if (p) { b.x = px; b.y = py; }
        for (let i = 1; i <= N; i++) {
          pts[i].vx = (pts[i].x - prev[i][0]) / dt;
          pts[i].vy = (pts[i].y - prev[i][1]) / dt;
        }
        R.t = on ? 1 : 0;
        if (on) tune(R, 120, 21); else tune(R, 170, 27);
      },
      render() {
        const rect = scene.getBoundingClientRect();
        if (rect.width !== W || rect.height !== H) measure();

        const th = TH.x, tug = TUG.x, b = pts[N], e = pts[N - 1];
        let d = `M${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
        for (let i = 1; i < N; i++) {
          d += `Q${pts[i].x.toFixed(1)} ${pts[i].y.toFixed(1)} ${((pts[i].x + pts[i + 1].x) / 2).toFixed(1)} ${((pts[i].y + pts[i + 1].y) / 2).toFixed(1)}`;
        }
        d += `L${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
        const ang = Math.atan2(e.x - b.x, b.y - e.y);
        const wl = WIRE + tug - 4;
        const wd = `M${(W / 2).toFixed(1)} -4L${(W / 2 - Math.sin(th) * wl).toFixed(2)} ${(Math.cos(th) * wl).toFixed(2)}`;

        lamp.style.transform = `rotate(${th.toFixed(4)}rad)`;
        wire.setAttribute("d", wd);
        head.style.transform = `translateY(${(WIRE + tug).toFixed(2)}px)`;
        bulb.style.transform = `scale(${BP.x.toFixed(4)})`;
        rope.setAttribute("d", d);
        bead.style.transform = `translate(${b.x.toFixed(2)}px,${b.y.toFixed(2)}px) rotate(${ang.toFixed(4)}rad)`;
        grab.style.transform = `translate(${b.x.toFixed(2)}px,${b.y.toFixed(2)}px)`;
      }
    };

    comps.push(component);
    // Render synchronously on init
    component.frame(0.016);
    component.render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPullCord);
  } else {
    initPullCord();
  }
})();
