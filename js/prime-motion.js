import { createMorph } from "../assets/vendor/morphicons/dom.js";

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
const icons = {
  theme: {
    moon: "M10 3 C8 6 8.4 10 11.2 12.8 C14 15.6 18 16 21 14 C19.7 18.2 16.1 21 12 21 C1 21 1.2 5.6 10 3 Z",
    sun: "M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
  },
  playback: {
    pause: [["path", { d: "M8 5h3v14H8zM14 5h3v14h-3z", fill: "currentColor" }]],
    play: [["path", { d: "m7 4 13 8-13 8Z", fill: "currentColor" }]]
  }
};
const glyphs = new Map();

export function setGlyph(icon, name) {
  if (icon.dataset.morphState === name) return;
  const shape = icons[icon.dataset.morph][name];
  const morph = glyphs.get(icon);
  if (morph) morph.morphTo(shape, "smooth");
  else glyphs.set(icon, createMorph(icon.querySelector("[data-glyph]"), shape, {
    reducedMotion: "user",
    strokeWidth: 1.65
  }));
  icon.dataset.morphState = name;
}

const easing = "cubic-bezier(.25, .6, .3, 1)";
const rest = { transform: "none" };
const pose = (offset, transform) => ({ offset, transform, easing });
const gesture = (...poses) => poses.at(-1).offset === 1
  ? [{ ...rest, easing }, ...poses]
  : [{ ...rest, easing }, ...poses, rest];

// Each track moves a named SVG part or the whole icon when the part is null.
const effects = {
  spark: [
    [null, gesture(pose(.37, "rotate(49deg) scale(.86)"), pose(.7, "rotate(42deg) scale(1.06)"), pose(1, "rotate(45deg)"))]
  ],
  plane: [
    ["plane", gesture(pose(.2, "translate(-1.5px, 1.5px) rotate(-7deg)"), pose(.58, "translate(3px, -3px) rotate(7deg)"))],
    ["trail", [{ opacity: 0 }, { opacity: .75, offset: .45 }, { opacity: 0, offset: .72 }, { opacity: 0 }]]
  ],
  envelope: [
    ["flap", gesture(pose(.42, "scaleY(-.8)"), pose(.63, "scaleY(-.8)"))],
    ["letter", [
      { opacity: 0, transform: "translateY(5px)" },
      { opacity: 0, transform: "translateY(5px)", offset: .24, easing },
      { opacity: 1, transform: "translateY(-3px)", offset: .48 },
      { opacity: 1, transform: "translateY(-3px)", offset: .65, easing },
      { opacity: 0, transform: "translateY(5px)", offset: .88 },
      { opacity: 0, transform: "translateY(5px)" }
    ]]
  ],
  document: [
    ["fold", gesture(pose(.35, "scale(.75) rotate(12deg)"), pose(.67, "scale(1.05)"))],
    ["rule", [
      { strokeDashoffset: 0, easing },
      { strokeDashoffset: 1, offset: .3, easing },
      { strokeDashoffset: 0, offset: .84 }, { strokeDashoffset: 0 }
    ], 60]
  ],
  pin: [
    [null, gesture(pose(.26, "translateY(-3px) scale(1.04, 1.14)"), pose(.61, "translateY(1px) scale(1.12, .86)"), pose(.81, "translateY(-.7px)"))],
    ["dot", gesture(pose(.42, "scale(.62)"), pose(.76, "scale(1.2)"))]
  ],
  layers: [
    ["layer", gesture(pose(.37, "translateY(-2px)"), pose(.68, "translateY(.6px)")), 70]
  ],
  grid: [
    ["tile", gesture(pose(.28, "scale(.45)"), pose(.66, "scale(1.18)")), 65]
  ],
  medal: [
    ["seal", gesture(pose(.35, "translateY(-1.7px) rotate(-13deg)"), pose(.65, "rotate(8deg)"))],
    ["ribbon", gesture(pose(.47, "rotate(13deg)"), pose(.73, "rotate(-5deg)"))]
  ],
  close: [
    [null, gesture(pose(.38, "rotate(37deg) scale(.83)"), pose(.71, "rotate(-6deg) scale(1.08)"))],
    ["stroke", gesture(pose(.35, "scale(.68)"), pose(.72, "scale(1.12)")), 36]
  ],
  next: [
    [null, gesture(pose(.23, "translateX(-1px)"), pose(.56, "translateX(3px)"))]
  ],
  prev: [
    [null, gesture(pose(.23, "translateX(1px)"), pose(.56, "translateX(-3px)"))]
  ],
  refresh: [
    [null, gesture(pose(.12, "rotate(-8deg)"), pose(1, "rotate(360deg)"))]
  ]
};

const playing = new Map();

export function replayIcon(icon) {
  if (reduceMotion.matches || playing.has(icon)) return;
  const tracks = effects[icon.dataset.iconEffect];
  if (!tracks) return;
  window.siteIconMotion?.expandIcon(icon);
  const animations = tracks.flatMap(([part, frames, stagger = 0]) => {
    const elements = part ? [...icon.querySelectorAll(`[data-motion-part="${part}"]`)] : [icon];
    return elements.map((element, index) => element.animate(frames, {
      duration: icon.dataset.iconEffect === "refresh" ? 680 : 560,
      delay: index * stagger
    }));
  });
  playing.set(icon, animations);
  Promise.allSettled(animations.map(animation => animation.finished)).then(() => playing.delete(icon));
}

function playControl(event) {
  const control = event.target.closest("[data-icon-motion]");
  if (!control || control.matches(":disabled") || control.contains(event.relatedTarget)) return;
  if (control.hasAttribute("data-icon-effect")) replayIcon(control);
  else control.querySelectorAll("[data-icon-effect]").forEach(replayIcon);
}

document.addEventListener("pointerover", event => {
  if (event.pointerType === "mouse" || event.pointerType === "pen") playControl(event);
});
document.addEventListener("focusin", event => {
  if (event.target.matches(":focus-visible")) playControl(event);
});
// Start before a click handler can disable its button while it works.
document.addEventListener("click", playControl, { capture: true });
reduceMotion.addEventListener("change", () => {
  if (!reduceMotion.matches) return;
  for (const animations of playing.values()) animations.forEach(animation => animation.cancel());
  for (const [icon, morph] of glyphs) morph.set(icons[icon.dataset.morph][icon.dataset.morphState]);
});
