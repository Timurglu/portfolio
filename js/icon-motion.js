/*
 * Motion timing and spring curves adapted from Richbox.
 *
 * MIT License
 *
 * Copyright (c) 2026 mishanaer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(() => {
  "use strict";

  const pressDuration = 70;
  const drawDuration = 330;
  const compressedScale = 0.975;
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const running = new Map();
  const frames = new WeakMap();

  const mix = (from, to, progress) => from + (to - from) * progress;
  const smoothStep = value => value * value * (3 - 2 * value);

  function spring(progress, rate) {
    return (1 - (1 + rate * progress) * Math.exp(-rate * progress))
      / (1 - (1 + rate) * Math.exp(-rate));
  }

  function readFrame(icon) {
    if (!frames.has(icon)) frames.set(icon, { scale: 1, trim: 0 });
    return frames.get(icon);
  }

  function animateIcon(icon, update) {
    if (!icon) return;
    running.get(icon)?.cancel();
    const frame = readFrame(icon);
    const startScale = frame.scale;

    function finish() {
      running.get(icon)?.cancel();
      frame.scale = 1;
      icon.style.removeProperty("scale");
      update(1);
    }

    if (preference.matches) {
      finish();
      return;
    }

    const start = performance.now();
    let request;
    function cancel() {
      cancelAnimationFrame(request);
      running.delete(icon);
    }

    function tick(time) {
      const elapsed = Math.max(0, time - start);
      if (elapsed >= pressDuration + drawDuration) {
        finish();
        return;
      }
      if (elapsed < pressDuration) {
        frame.scale = mix(startScale, compressedScale, smoothStep(elapsed / pressDuration));
      } else {
        const stretch = (elapsed - pressDuration) / drawDuration;
        const progress = smoothStep(stretch);
        frame.scale = mix(compressedScale, 1, spring(progress, 3));
        update(progress);
      }
      icon.style.scale = String(frame.scale);
      request = requestAnimationFrame(tick);
    }

    running.set(icon, { cancel, finish });
    request = requestAnimationFrame(tick);
  }

  function expandIcon(icon) {
    for (const reference of icon.querySelectorAll("use")) {
      const id = reference.getAttribute("href");
      const symbol = id?.startsWith("#") && document.getElementById(id.slice(1));
      if (!symbol) continue;
      const svg = reference.ownerSVGElement;
      if (svg && !svg.hasAttribute("viewBox") && symbol.hasAttribute("viewBox")) {
        svg.setAttribute("viewBox", symbol.getAttribute("viewBox"));
      }
      reference.replaceWith(...Array.from(symbol.children, child => child.cloneNode(true)));
    }
  }

  // Normalize strokes so the same amount of trimming applies to short and long SVG paths.
  function getStrokes(icon) {
    if (!icon.matches("svg.ico, .placeholder-icon-wrap svg")) return [];
    expandIcon(icon);
    return Array.from(icon.querySelectorAll("path, circle")).filter(path => {
      if (path.hasAttribute("stroke-dasharray")) return false;
      path.setAttribute("pathLength", "1");
      return true;
    });
  }

  function paintTrim(strokes, trim) {
    for (const stroke of strokes) {
      if (trim === 0) {
        stroke.style.removeProperty("stroke-dasharray");
        stroke.style.removeProperty("stroke-dashoffset");
      } else {
        stroke.style.strokeDasharray = "1 1";
        stroke.style.strokeDashoffset = String(trim);
      }
    }
  }

  function pulse(icon) {
    if (!icon || icon.matches("[data-morph], [data-icon-effect]")) return;
    const frame = readFrame(icon);
    const strokes = getStrokes(icon);
    const startTrim = frame.trim;
    animateIcon(icon, progress => {
      frame.trim = startTrim * (1 - progress) + 0.14 * Math.sin(Math.PI * progress) ** 2;
      if (progress === 1) frame.trim = 0;
      paintTrim(strokes, frame.trim);
    });
  }

  function reveal(icon) {
    if (!icon || preference.matches) return;
    const strokes = getStrokes(icon);
    const frame = readFrame(icon);
    frame.trim = 1;
    paintTrim(strokes, frame.trim);
    animateIcon(icon, progress => {
      frame.trim = 1 - progress;
      paintTrim(strokes, frame.trim);
    });
  }

  function pulseControl(control) {
    if (control.matches("[data-motion-icon]")) pulse(control);
    else control.querySelectorAll("[data-motion-icon], .logo-scene, .case-nav-logo-wrap, .placeholder-icon-wrap svg").forEach(pulse);
  }

  const controls = "[data-icon-motion], .project-card, .case-nav-link";
  document.addEventListener("click", event => {
    const control = event.target.closest(controls);
    if (control && !control.matches(":disabled")) pulseControl(control);
  });

  preference.addEventListener("change", () => {
    if (!preference.matches) return;
    for (const animation of running.values()) animation.finish();
  });

  window.siteIconMotion = { pulse, reveal, expandIcon };
})();
