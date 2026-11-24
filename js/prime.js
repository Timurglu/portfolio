"use strict";

import { replayIcon, setGlyph } from "./prime-motion.js";

const projects = [
  {
    id: "finta", name: "FINTA", route: "finta", type: "web", tint: "#f5e1d6",
    story: "Дашборд до и после", title: "Как упростить поиск карты и освободить место на дашборде",
    folder: "FINTA", logo: "finta-logo.svg", preview: "after-1.png",
    slides: [
      ["Баннеры мешали работе с дашбордом", "Рекламные врезки ломали сетку и занимали рабочую область. Пользователи жаловались на них в поддержку.", "before-1.png"],
      ["На первом экране осталась устаревшая карточка", "После отмены платы за отклонённые транзакции карточка Decline больше не приносила пользы. При этом пользователи открывали несколько карт подряд, чтобы найти нужную.", "before-2.png"],
      ["Встроил баннер в дизайн-систему", "Использовал место карточки Decline для промо-слота. Сообщения получили своё место в сетке дашборда.", "after-2.png"],
      ["Перенёс обложки на мини-карты", "Миниатюры повторяют оформление полноразмерных карт. Нужную карту можно узнать сразу по обложке.", "after-1.png"],
      ["Меньше лишних кликов и жалоб", "Пользователи стали попадать в нужную карту с первого клика. Жалобы на навязчивые баннеры прекратились.", "after-1.png"]
    ]
  },
  {
    id: "ai", name: "Антиплагиат", route: "antiplagiat", type: "web", tint: "#d9d5f1",
    story: "От отчёта к правкам", title: "Как встроить AI-ассистента в отчёт проверки",
    folder: "antiplagiat", logo: "logo-antiplagiat-shield.svg", preview: "web-05-response-analysis.png",
    slides: [
      ["После проверки неясно, что править", "Отчёт показывал процент оригинальности и маркеры ИИ. Чтобы понять, какие абзацы исправлять, пользователю приходилось разбирать отчёт самому.", "before-results-report.png"],
      ["У разных читателей разные вопросы", "Разобрал задачи студентов, преподавателей и редакторов. Студентам нужно найти фрагменты для правки, а преподавателям важно понять, откуда взялись совпадения.", "web-07-assistant-closed.png"],
      ["Добавил вердикт и готовые вопросы", "Ассистент объясняет, проходит ли работа порог оригинальности. Готовые вопросы помогают начать разговор, даже если пользователь пока не знает, о чём спросить.", "mobile-02-assistant-open.png", "web-02-assistant-open.png"],
      ["Связал ответ с текстом работы", "В ответе выделены конкретные разделы с маркерами ИИ. По кнопке можно перейти сразу к нужному фрагменту документа.", "mobile-06-cta-report.png", "web-06-cta-report.png"],
      ["От проверки к правке за один клик", "В прототипе можно запросить разбор результата, увидеть план правок и сразу перейти к нужному разделу.", "mobile-05-response.png", "web-05-response-analysis.png"]
    ]
  },
  {
    id: "sber", name: "Sber CIB", route: "sber", type: "web", tint: "#d4e9d5",
    story: "Один базовый год", title: "Как сравнивать финансовые показатели за несколько лет",
    folder: "sber", logo: "sber-logo.svg", preview: "sber-desktop.png",
    slides: [
      ["Таблица, в которой теряется базовый год", "Аналитики сопоставляли фактические и прогнозные показатели. При прокрутке таблицы базовый год уходил из поля зрения.", "sber-before.png"],
      ["Выделил две причины лишней прокрутки", "Шапка исчезала при движении по строкам. Пустые и ненужные срезы удлиняли таблицу, поэтому нужные цифры приходилось искать вручную.", "sber-before.png"],
      ["Собрал управление в боковой панели", "В панели можно закрепить базовый год, найти нужные показатели и открыть выбранные срезы. Фильтры прокручиваются независимо от таблицы.", "sber-filters-sidebar.png"],
      ["Удержал контекст при сравнении", "Шапка таблицы остаётся на экране. Для разных задач предусмотрел таблицу, сравнение, тепловую карту и графики.", "sber-table-main.png"],
      ["Получился дашборд для сравнения периодов", "Базовый год, фильтры и таблица работают рядом. Аналитик может менять срезы и продолжать сравнение в том же окне.", "sber-desktop.png"]
    ]
  },
  {
    id: "silk", name: "Silkway", route: "silkway", type: "mobile", tint: "#f4daca",
    story: "Профиль до и после", title: "Как превратить настройки в удобный профиль",
    folder: "silkway", logo: "silkway-logo.svg", preview: "profile-after.png",
    slides: [
      ["Профиль выглядел как список настроек", "Заказы, бонусы и статус аккаунта были разбросаны по меню. Нужно было упростить доступ к частым действиям и привести экраны к одним правилам.", "profile-before.png"],
      ["Аудит показал, где повторяется работа", "Кнопки, карточки и поля рисовали отдельно для разных экранов. При аудите с разработчиками выделил элементы, которые можно переиспользовать.", "task2/before-1.png"],
      ["Собрал библиотеку компонентов", "Описал размеры, отступы, типографику и состояния кнопок, полей и карточек. Из этих элементов команда может собирать новые экраны.", "task2/ui-kit-2.png"],
      ["Вынес частые действия под аватар", "Вверху профиля теперь видны статус и бонусы. Заказы, кошелёк и другие частые действия собраны в сетке.", "profile-after.png"],
      ["Библиотека пригодилась всему приложению", "Профиль стал точкой входа в заказы и сервисы, а те же кнопки, карточки и отступы можно использовать в других разделах.", "task2/after-1.png"]
    ]
  },
  {
    id: "taxi", name: "Taxi Troika", route: "taxi-troika", type: "mobile", tint: "#cdddEE",
    story: "Заказ глазами водителя", title: "Как упростить принятие заказа и сценарий поездки",
    folder: "TROIKA", logo: "troika-logo.svg", preview: "after–5.png",
    slides: [
      ["Водителю нужно быстро оценить заказ", "Карточка закрывала карту, а стоимость и адрес подачи находились в разных частях экрана. Кнопка принятия требовала точного нажатия.", "before-1.png"],
      ["Интервью объяснили, где водитель теряет время", "По аналитике сессий и интервью выяснил, что на оценку заявки уходило до 8–10 секунд. После принятия водитель мог путаться в статусах поездки.", "before-2.png"],
      ["Оставил маршрут на виду", "Адрес подачи, стоимость и время вынес в крупную карточку поверх карты. Кнопку «Принять заказ» поставил внизу, чтобы до неё было легко дотянуться.", "after–2.png"],
      ["Выстроил статусы поездки по порядку", "Действия меняются по мере поездки. Водитель видит, на каком он этапе и что нужно сделать дальше.", "after–6.png"],
      ["Заказ можно принять в одно касание", "Информация для решения и кнопка принятия теперь на одном экране с картой. Баланс, статистика и тарифы собраны в профиле водителя.", "after–4.png"]
    ]
  }
];

const categories = [
  { id: "gta6", name: "на стриптиз в гта6", rate: 12 },
  { id: "figma", name: "на фигму", rate: 0.1 },
  { id: "prime-plus", name: "на покупку подписки ПРАЙМ+", rate: 100 },
  { id: "design", name: "на заказной дизайн у Тимура", rate: 10 },
  { id: "snow", name: "на снег", rate: 50 },
  { id: "balloons", name: "на надувные шарики", rate: 52 }
];

const byId = id => document.getElementById(id);
const caseHash = project => "#case-" + project.route;
const prefix = "timur-portfolio.prime.v1.";
const memory = new Map();
function readValue(key) {
  try {
    const stored = localStorage.getItem(prefix + key);
    if (stored !== null) return JSON.parse(stored);
  } catch { /* Storage can be unavailable in private browsing. */ }
  return memory.get(key);
}
function writeValue(key, value) {
  memory.set(key, value);
  try { localStorage.setItem(prefix + key, JSON.stringify(value)); } catch { /* Keep session state. */ }
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const themeToggle = byId("theme-toggle");
function updateTheme() {
  const urlTheme = new URLSearchParams(window.location.search).get("theme");
  const preference = urlTheme || readValue("theme");
  const theme = preference === "dark" || preference === "light"
    ? preference : (systemTheme.matches ? "dark" : "light");
  const dark = theme === "dark";
  document.documentElement.dataset.theme = theme;
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.content = dark ? "#19191c" : "#f7f7f4";
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(dark));
    setGlyph(byId("theme-glyph"), dark ? "sun" : "moon");
    themeToggle.title = dark ? "Включить светлую тему" : "Включить тёмную тему";
  }
}
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    writeValue("theme", document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    updateTheme();
  });
}
systemTheme.addEventListener("change", updateTheme);
updateTheme();

const moscowZone = "Europe/Moscow";
const monthFormat = new Intl.DateTimeFormat("ru", { month: "long", timeZone: "UTC" });
let targetMonth = "";
let draft = new Set();
function refreshCalendar() {
  const now = new Date();
  const localDay = now.toLocaleDateString("sv-SE", { timeZone: moscowZone });
  const [year, month] = localDay.split("-").map(Number);
  const next = new Date(Date.UTC(year, month, 1));
  if (targetMonth === next.toISOString().slice(0, 7)) return;
  targetMonth = next.toISOString().slice(0, 7);
  const monthLabel = monthFormat.format(next);
  byId("cash-month").textContent = "на " + monthLabel;
  byId("cash-dialog-title").textContent = "Кэшбэк на " + monthLabel;
  if (byId("cash-dialog").open) byId("cash-dialog").close();
  updateCash();
  updateProgress();
}

function selectedCategories() {
  const saved = readValue("cash." + targetMonth);
  const valid = categories.filter(item => Array.isArray(saved) && saved.includes(item.id));
  return valid.length === 2 ? valid : [];
}
function updateCash() {
  const saved = selectedCategories();
  byId("cash-summary").textContent = saved.length
    ? saved.map(item => item.rate + "% " + item.name).join(" · ")
    : "Выберите две категории на следующий месяц.";
  byId("cash-open-label").textContent = saved.length ? "Изменить категории" : "Выбрать категории";
}
function updateProgress() {
  const done = {
    story: projects.some(project => readValue("seen." + project.id) === true),
    case: readValue("case") === true,
    cashback: selectedCategories().length === 2
  };
  const count = Object.values(done).filter(Boolean).length;
  const progress = byId("progress");
  if (count > progress.value) replayIcon(byId("progress-icon"));
  if (count !== progress.value) {
    progress.value = count;
    const levels = byId("progress-levels").children;
    byId("current-level").textContent = `Уровень ${count + 1} из ${levels.length}`;
    byId("progress-text").textContent = count === progress.max
      ? "Все три задания выполнены!"
      : `Выполнено заданий ${count} из ${progress.max}`;
    Array.from(levels).forEach((step, index) => {
      step.classList.toggle("is-reached", index <= count);
      step.setAttribute("aria-current", index === count ? "step" : "false");
    });
  }
  document.querySelectorAll("#tasks li").forEach(item => {
    const completed = done[item.dataset.task];
    const newlyCompleted = completed && !item.classList.contains("done");
    item.classList.toggle("done", completed);
    if (newlyCompleted) window.siteIconMotion?.reveal(item.querySelector(".task-mark"));
    item.querySelector(".sr-only").textContent = completed ? "Выполнено. " : "Предстоит. ";
  });
}

function caseImage(project, filename) {
  return "../assets/cases/" + project.folder + "/" + filename;
}
function renderStories() {
  const strip = byId("stories");
  if (!strip.children.length) {
    strip.innerHTML = projects.map(project => `<button class="story-card" type="button" data-story="${project.id}" data-icon-motion aria-haspopup="dialog" style="--tint:${project.tint}">
      <span class="story-ring"><span class="story-cover"><img data-motion-icon src="../assets/images/${project.logo}" alt=""></span></span>
      <span class="story-name">${project.name}</span></button>`).join("");
  }
  projects.forEach((project, index) => {
    const seen = readValue("seen." + project.id) === true;
    const button = strip.children[index];
    button.classList.toggle("is-seen", seen);
    button.setAttribute("aria-label", `${project.name}. ${project.story}. ${seen ? "Просмотрено" : "Смотреть сторис"}`);
  });
}
function renderFeed(filter) {
  byId("feed").innerHTML = projects.filter(project => filter === "all" || project.type === filter).map(project =>
    `<a class="feed-card ${project.type}" href="${caseHash(project)}" aria-haspopup="dialog" style="--tint:${project.tint}">
      <span class="feed-image"><img src="${caseImage(project, project.preview)}" alt="" loading="lazy"></span>
      <span class="feed-kind">${project.name} / ${project.type === "web" ? "Веб" : "Приложение"}</span><h3>${project.title}</h3></a>`
  ).join("");
}
byId("filters").addEventListener("click", event => {
  const chosen = event.target.closest("button");
  if (!chosen) return;
  byId("filters").querySelectorAll("button").forEach(button => {
    button.setAttribute("aria-pressed", String(button === chosen));
  });
  renderFeed(chosen.dataset.filter);
});
function recordCase(event) {
  if (!event.target.closest("a") || event.button > 1) return;
  writeValue("case", true);
  updateProgress();
}
byId("feed").addEventListener("click", recordCase);
byId("feed").addEventListener("auxclick", recordCase);

const storyDialog = byId("story-dialog");
const storyStage = byId("story-stage");
const storyImage = byId("slide-image");
const storyCaseLink = byId("slide-case");
const storyAvatar = byId("slide-avatar");
const wideStoryImage = window.matchMedia("(min-width: 671px)");
const storySteps = ["Задача", "Разбор", "Первое решение", "Ключевой сценарий", "Результат"];
let slideDuration = 10000;
let projectIndex = 0;
let slideIndex = 0;
let keyboardStoryOpener = null;
let gesture = null;
let manuallyPaused = false;
let mediaReady = false;
let progressFill;
let elapsed = 0;
let startedAt = null;
let frameId = 0;

function stopStoryClock() {
  if (startedAt !== null) elapsed += performance.now() - startedAt;
  startedAt = null;
  cancelAnimationFrame(frameId);
}
function tickStoryClock(now) {
  if (startedAt === null || !storyDialog.open) return;
  const fraction = Math.min(1, (elapsed + Math.max(0, now - startedAt)) / slideDuration);
  progressFill.style.transform = "scaleX(" + fraction + ")";
  if (fraction >= 1) stepFrame(1);
  else frameId = requestAnimationFrame(tickStoryClock);
}
function syncStoryClock() {
  if (!storyDialog.open || document.hidden || gesture || manuallyPaused || !mediaReady || document.activeElement === storyCaseLink) {
    stopStoryClock();
  } else if (startedAt === null) {
    startedAt = performance.now();
    frameId = requestAnimationFrame(tickStoryClock);
  }
}
function setManualPause(paused) {
  manuallyPaused = paused;
  const button = byId("story-pause");
  setGlyph(byId("playback-glyph"), paused ? "play" : "pause");
  button.setAttribute("aria-label", paused ? "Продолжить просмотр" : "Приостановить сторис");
  syncStoryClock();
}

// The old three-frame series used different slide positions. Keep completed series and start the rewritten ones from the beginning.
function resumeFrame(project) {
  if (readValue("seen." + project.id) === true) return 0;
  const saved = readValue("resume.case-chapters." + project.id);
  return Number.isInteger(saved) && saved >= 0 && saved < project.slides.length ? saved : 0;
}
function showFrame(projectNumber, index) {
  stopStoryClock();
  elapsed = 0;
  const newSeries = !storyDialog.open || projectIndex !== projectNumber;
  projectIndex = projectNumber;
  slideIndex = index;
  const project = projects[projectIndex];
  const [title, description, filename, desktopFilename] = project.slides[index];
  const lastFrame = index === project.slides.length - 1;
  slideDuration = lastFrame ? 13000 : 10000;
  storyDialog.style.setProperty("--tint", project.tint);
  byId("slide-brand").textContent = project.name;
  storyAvatar.src = "../assets/images/" + project.logo;
  if (newSeries && storyDialog.open) window.siteIconMotion?.pulse(storyAvatar);
  byId("slide-step").textContent = storySteps[index];
  storyCaseLink.href = caseHash(project);
  storyCaseLink.hidden = !lastFrame;
  byId("slide-count").textContent = (index + 1) + " / " + project.slides.length;
  byId("slide-title").textContent = title;
  byId("slide-description").textContent = description;
  byId("slide-progress").innerHTML = project.slides.map((_, i) =>
    '<i class="' + (i < index ? "finished" : "") + '"><b></b></i>'
  ).join("");
  progressFill = byId("slide-progress").children[index].firstElementChild;
  storyImage.alt = project.name + " — " + title;
  storyImage.src = caseImage(project, wideStoryImage.matches && desktopFilename ? desktopFilename : filename);
  mediaReady = storyImage.complete;
  syncStoryClock();
}
// A missing screenshot still leaves the caption and navigation available.
function onStoryImageSettled() {
  mediaReady = storyImage.complete;
  syncStoryClock();
}
storyImage.addEventListener("load", onStoryImageSettled);
storyImage.addEventListener("error", onStoryImageSettled);

function completeStory(project) {
  if (readValue("seen." + project.id) === true) return;
  writeValue("seen." + project.id, true);
  updateProgress();
}
storyCaseLink.addEventListener("click", () => completeStory(projects[projectIndex]));
storyCaseLink.addEventListener("focus", syncStoryClock);
storyCaseLink.addEventListener("blur", syncStoryClock);

function stepFrame(direction) {
  if (!storyDialog.open) return;
  const project = projects[projectIndex];
  const index = slideIndex + direction;
  if (direction > 0) {
    if (index === project.slides.length) {
      completeStory(project);
    } else if (index > resumeFrame(project) && readValue("seen." + project.id) !== true) {
      writeValue("resume.case-chapters." + project.id, index);
    }
  }
  if (index >= 0 && index < project.slides.length) {
    showFrame(projectIndex, index);
  } else if (direction < 0 && projectIndex > 0) {
    showFrame(projectIndex - 1, projects[projectIndex - 1].slides.length - 1);
  } else if (direction < 0) {
    showFrame(0, 0);
  } else {
    switchSeries(1);
  }
}
function switchSeries(direction) {
  const next = projectIndex + direction;
  if (next >= projects.length) storyDialog.close();
  else if (next >= 0) showFrame(next, resumeFrame(projects[next]));
}

byId("stories").addEventListener("click", event => {
  const button = event.target.closest("[data-story]");
  if (!button) return;
  keyboardStoryOpener = event.detail === 0 ? button : null;
  const index = projects.findIndex(project => project.id === button.dataset.story);
  showFrame(index, resumeFrame(projects[index]));
  storyDialog.showModal();
  window.siteIconMotion?.pulse(storyAvatar);
  setManualPause(reducedMotion.matches);
});
byId("story-pause").addEventListener("click", () => setManualPause(!manuallyPaused));
byId("slide-prev").addEventListener("click", () => stepFrame(-1));
byId("slide-next").addEventListener("click", () => stepFrame(1));
storyDialog.addEventListener("keydown", event => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.repeat) return;
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    event.preventDefault();
    stepFrame(event.key === "ArrowRight" ? 1 : -1);
  } else if (event.code === "Space") {
    event.preventDefault();
    setManualPause(!manuallyPaused);
  }
});

storyStage.addEventListener("pointerdown", event => {
  if (!event.isPrimary || event.button !== 0 || gesture) return;
  if (event.target === storyCaseLink || (event.pointerType === "mouse" && wideStoryImage.matches)) return;
  gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, at: performance.now() };
  storyStage.setPointerCapture(event.pointerId);
  syncStoryClock();
});
function releaseGesture(event) {
  if (gesture?.id !== event.pointerId) return;
  const start = gesture;
  gesture = null;
  if (event.type === "pointerup") {
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (dy > 65 && dy > Math.abs(dx) * 1.2) {
      storyDialog.close();
    } else if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      switchSeries(dx < 0 ? 1 : -1);
    } else if (performance.now() - start.at < 300 && Math.hypot(dx, dy) < 14) {
      const bounds = storyStage.getBoundingClientRect();
      stepFrame(start.x < bounds.left + bounds.width / 2 ? -1 : 1);
    }
  }
  syncStoryClock();
}
for (const event of ["pointerup", "pointercancel", "lostpointercapture"]) {
  storyStage.addEventListener(event, releaseGesture);
}
storyStage.addEventListener("contextmenu", event => {
  if (gesture) event.preventDefault();
});
document.addEventListener("visibilitychange", syncStoryClock);
storyDialog.addEventListener("close", () => {
  stopStoryClock();
  gesture = null;
  renderStories();
  if (!caseDialog.open && keyboardStoryOpener && document.activeElement !== keyboardStoryOpener) {
    keyboardStoryOpener.focus({ preventScroll: true });
  }
  keyboardStoryOpener = null;
});

const caseDialog = byId("case-dialog");
const caseFrame = byId("case-frame");
const caseViews = new Map(projects.map(project => [
  caseHash(project), { title: project.name, url: new URL("../" + project.route + "/?view=prime", location.href) }
]));
caseViews.set("#prototype-antiplagiat", {
  title: "Прототип Антиплагиата",
  url: new URL("../assets/cases/antiplagiat/prototype/", location.href)
});
let shownCase = "";
let caseReturnHash = "";

function syncCaseView(event) {
  const hash = location.hash;
  const view = caseViews.get(hash);
  if (!view) {
    if (caseDialog.open) caseDialog.close();
    return;
  }
  if (shownCase === hash && caseDialog.open) return;
  shownCase = hash;
  byId("case-view-title").textContent = view.title;
  caseFrame.title = view.title;
  if (!caseDialog.open) {
    const previous = event ? new URL(event.oldURL).hash : "#work";
    caseReturnHash = caseViews.has(previous) ? "#work" : previous;
    if (storyDialog.open) storyDialog.close();
    caseDialog.showModal();
  }
  caseFrame.contentWindow.location.replace(view.url.href);
}

caseDialog.addEventListener("close", () => {
  if (caseDialog.open) return;
  shownCase = "";
  caseFrame.contentWindow.location.replace("about:blank");
  if (caseViews.has(location.hash)) history.replaceState(history.state, "", caseReturnHash || location.pathname + location.search);
});
window.addEventListener("hashchange", syncCaseView);

function updateDraft() {
  const count = draft.size;
  for (const button of byId("cash-options").children) {
    const selected = draft.has(button.dataset.id);
    const newlySelected = selected && button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(selected));
    if (newlySelected) window.siteIconMotion?.reveal(button.querySelector(".option-check"));
    button.disabled = count === 2 && !selected;
  }
  byId("cash-count").textContent = "Выбрано " + count + " из 2";
  byId("cash-save").disabled = count !== 2;
}
byId("cash-open").addEventListener("click", () => {
  refreshCalendar();
  draft = new Set(selectedCategories().map(item => item.id));
  updateDraft();
  byId("cash-dialog").showModal();
});
byId("cash-options").innerHTML = categories.map(item =>
  `<button class="option" type="button" data-id="${item.id}"><strong>${item.rate}%</strong><span>${item.name}</span><svg class="ico option-check" viewBox="0 0 24 24" data-motion-icon aria-hidden="true"><path d="m5 12 4.5 4.5L19 7"/></svg></button>`
).join("");
byId("cash-options").addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button || button.disabled) return;
  const id = button.dataset.id;
  if (draft.has(id)) draft.delete(id);
  else draft.add(id);
  updateDraft();
});
byId("cash-save").addEventListener("click", () => {
  refreshCalendar();
  if (!byId("cash-dialog").open || draft.size !== 2) return;
  writeValue("cash." + targetMonth, [...draft]);
  updateCash();
  updateProgress();
  byId("cash-dialog").close();
});
document.querySelectorAll("dialog").forEach(dialog => {
  dialog.querySelector("[data-close]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
});

const planDialog = byId("plan-dialog");
const planCancelButton = byId("plan-cancel-now");
const planCancelFlow = byId("plan-cancel-flow");
const planUndoOutline = byId("plan-undo-outline");
const planUndoSeconds = byId("plan-undo-seconds");
const planUndoDuration = 5000;
const planButtonEase = "cubic-bezier(.23, 1, .32, 1)";
const planDate = new Intl.DateTimeFormat("ru", {
  day: "numeric", month: "long", year: "numeric", timeZone: moscowZone
});
const cancelScreens = [
  ["Лента без рекламы", "ПРАЙМ+ скрывает большой баннер над сторис и рекламную карточку рядом с рекомендациями."],
  ["Сторис ближе к началу", "Без верхнего баннера проекты появляются выше в ленте. До сторис и новых кейсов нужно меньше прокручивать."],
  ["Используйте оставшиеся дни", through => `ПРАЙМ+ уже включён до ${through}. Оставьте доступ к ленте без баннеров на этот срок.`],
  ["Оставьте ПРАЙМ+ без оплаты", "В этой версии сайта деньги за подписку не списываются. Можно продолжить пользоваться лентой без рекламы."],
  ["Оставить ПРАЙМ+?", "После отмены реклама вернётся сразу. Сторис, кейсы, прогресс и выбранный кэшбэк останутся доступны."]
];
let cancelStep = -1;
let planUndo = null;

function planIsActive() {
  const end = readValue("plan.demoUntil");
  return Number.isFinite(end) && end > Date.now();
}
function planThrough() {
  return planDate.format(readValue("plan.demoUntil")).replace(/\sг\.$/u, "");
}
function showPlanOverview(notice = "") {
  cancelStep = -1;
  byId("plan-overview").hidden = false;
  planCancelFlow.hidden = true;
  byId("plan-status").textContent = notice;
}
function showCancelStep(index) {
  if (!planIsActive()) {
    updatePlan();
    return;
  }
  cancelStep = index;
  const [title, copy] = cancelScreens[index];
  byId("plan-overview").hidden = true;
  planCancelFlow.hidden = false;
  byId("plan-cancel-title").textContent = title;
  byId("plan-cancel-copy").textContent = typeof copy === "function" ? copy(planThrough()) : copy;
  byId("plan-cancel-count").textContent = `${index + 1} из ${cancelScreens.length}`;
  byId("plan-cancel-progress").value = index + 1;
  byId("plan-cancel-next").hidden = index === cancelScreens.length - 1;
  byId("plan-cancel-title").focus({ preventScroll: true });
}
function updatePlan() {
  const active = planIsActive();
  const through = active ? planThrough() : "";
  document.querySelectorAll("[data-prime-ad]").forEach(ad => { ad.hidden = active; });
  byId("plan-summary").textContent = active
    ? "Баннеры скрыты до " + through + "."
    : "скрывает друзей рекламу от Тимурки";
  byId("plan-open-label").textContent = active ? "Управлять подпиской" : "Оформить подписку";
  byId("plan-terms").textContent = active
    ? "Лента без рекламы доступна до " + through + "."
    : "Лента без рекламы на один месяц. Отключить подписку можно в любой момент.";
  byId("plan-confirm").textContent = active ? "Отменить подписку" : "Подключить ПРАЙМ+";
  if (!active && cancelStep >= 0) {
    showPlanOverview("Подписка уже отключена.");
    if (planDialog.open) byId("plan-status").focus();
  }
}
for (const id of ["plan-nav", "plan-open"]) {
  byId(id).addEventListener("click", () => {
    showPlanOverview();
    updatePlan();
    planDialog.showModal();
  });
}
byId("plan-confirm").addEventListener("click", () => {
  if (planIsActive()) {
    showCancelStep(0);
    return;
  }
  const end = new Date();
  const day = end.getUTCDate();
  end.setUTCDate(1);
  end.setUTCMonth(end.getUTCMonth() + 1);
  const lastDay = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth() + 1, 0)).getUTCDate();
  end.setUTCDate(Math.min(day, lastDay));
  writeValue("plan.demoUntil", end.getTime());
  updatePlan();
  planDialog.close();
});
byId("plan-cancel-back").addEventListener("click", () => {
  if (cancelStep > 0) {
    showCancelStep(cancelStep - 1);
  } else {
    showPlanOverview();
    byId("plan-confirm").focus();
  }
});
byId("plan-cancel-next").addEventListener("click", () => showCancelStep(cancelStep + 1));
byId("plan-keep").addEventListener("click", () => planDialog.close());

function paintPlanUndo() {
  if (!planUndo) return;
  const left = planUndoDuration - planUndo.elapsed;
  const length = planUndoOutline.getTotalLength();
  planUndoOutline.style.strokeDasharray = `${length * left / planUndoDuration} ${length}`;
  const seconds = String(Math.ceil(left / 1000));
  if (planUndoSeconds.textContent === seconds) return;
  animatePlanSwap(planUndoSeconds, 10, 200, 0);
  planUndoSeconds.textContent = seconds;
}
function animatePlanSwap(outgoing, distance, duration, blur, incoming = outgoing) {
  if (reducedMotion.matches) return;
  const ghost = document.createElement("span");
  ghost.textContent = outgoing.textContent.trim();
  ghost.className = "plan-undo-outgoing";
  ghost.setAttribute("aria-hidden", "true");
  outgoing.parentElement.append(ghost);
  const transition = { duration, easing: planButtonEase };
  const exit = ghost.animate([{ opacity: 1 }, { transform: `translateY(-${distance}px)`, opacity: 0, filter: `blur(${blur}px)` }], transition);
  const removeGhost = () => ghost.remove();
  exit.finished.then(removeGhost, removeGhost);
  incoming.animate([{ transform: `translateY(${distance}px)`, opacity: 0, filter: `blur(${blur}px)` }, { opacity: 1 }], transition);
}
function resizePlanUndoOutline() {
  if (!planUndo) return;
  const inset = .75;
  const width = planCancelButton.offsetWidth;
  const height = planCancelButton.offsetHeight;
  const radius = Number.parseFloat(getComputedStyle(planCancelButton).borderTopLeftRadius) - inset;
  const right = width - inset;
  const bottom = height - inset;
  planUndoOutline.setAttribute("d", `M${width / 2} ${inset} H${right - radius}
    a${radius} ${radius} 0 0 1 ${radius} ${radius} V${bottom - radius}
    a${radius} ${radius} 0 0 1 ${-radius} ${radius} H${inset + radius}
    a${radius} ${radius} 0 0 1 ${-radius} ${-radius} V${inset + radius}
    a${radius} ${radius} 0 0 1 ${radius} ${-radius} Z`);
  paintPlanUndo();
}
new ResizeObserver(resizePlanUndoOutline).observe(planCancelButton);

function finishPlanUndo(notice) {
  cancelAnimationFrame(planUndo.frame);
  clearTimeout(planUndo.doneTimer);
  planUndo = null;
  planCancelFlow.classList.remove("is-undo");
  byId("plan-cancel-label").hidden = false;
  byId("plan-undo-label").hidden = true;
  byId("plan-undo-done").hidden = true;
  byId("plan-cancel-title").setAttribute("aria-describedby", "plan-cancel-count plan-cancel-copy");
  planCancelButton.removeAttribute("aria-keyshortcuts");
  planCancelButton.removeAttribute("aria-disabled");
  showPlanOverview(notice);
  updatePlan();
  if (planDialog.open) byId("plan-status").focus();
}
function tickPlanUndo(now) {
  if (!planUndo) return;
  if (!document.hidden && !planUndo.hovered) {
    planUndo.elapsed = Math.min(planUndoDuration, planUndo.elapsed + now - planUndo.last);
  }
  planUndo.last = now;
  if (planUndo.elapsed === planUndoDuration) {
    const done = byId("plan-undo-done");
    const undo = byId("plan-undo-label");
    done.hidden = false;
    animatePlanSwap(undo, 8, 220, 2, done);
    undo.hidden = true;
    byId("plan-cancel-copy").textContent = "Рекламные блоки снова видны.";
    planCancelButton.setAttribute("aria-disabled", "true");
    planCancelButton.removeAttribute("aria-keyshortcuts");
    planUndo.doneTimer = setTimeout(() => finishPlanUndo("Подписка отменена."), 2400);
    return;
  }
  paintPlanUndo();
  planUndo.frame = requestAnimationFrame(tickPlanUndo);
}
function restorePlan() {
  if (!planUndo || planUndo.doneTimer) return;
  const current = readValue("plan.demoUntil");
  if (current === null && planUndo.until > Date.now()) writeValue("plan.demoUntil", planUndo.until);
  finishPlanUndo(planIsActive() ? "ПРАЙМ+ восстановлен." : "Подписка отменена.");
}
planCancelButton.addEventListener("click", event => {
  if (planUndo) {
    restorePlan();
    return;
  }
  if (!planIsActive()) {
    updatePlan();
    return;
  }
  const startWidth = planCancelButton.offsetWidth;
  planUndo = { until: readValue("plan.demoUntil"), frame: 0, elapsed: 0, last: performance.now(), hovered: false, doneTimer: 0 };
  writeValue("plan.demoUntil", null);
  cancelStep = -1;
  planCancelFlow.classList.add("is-undo");
  byId("plan-cancel-title").textContent = "Подписка отменена";
  byId("plan-cancel-title").setAttribute("aria-describedby", "plan-cancel-copy");
  byId("plan-cancel-copy").textContent = "Верните ПРАЙМ+, чтобы сохранить доступ до прежней даты.";
  const cancelLabel = byId("plan-cancel-label");
  const label = byId("plan-undo-label");
  label.hidden = false;
  animatePlanSwap(cancelLabel, 8, 220, 2, label);
  cancelLabel.hidden = true;
  planUndoSeconds.textContent = "5";
  planCancelButton.setAttribute("aria-keyshortcuts", "Control+Z Meta+Z");
  planUndo.hovered = event.pointerType === "mouse" && planCancelButton.matches(":hover");
  if (!reducedMotion.matches) {
    const endWidth = planCancelButton.offsetWidth;
    planCancelButton.animate([{ width: `${startWidth}px` }, { width: `${endWidth}px` }],
      { duration: 220, easing: planButtonEase });
  }
  updatePlan();
  resizePlanUndoOutline();
  planCancelButton.focus({ preventScroll: true });
  planUndo.frame = requestAnimationFrame(tickPlanUndo);
});
planCancelButton.addEventListener("pointerenter", event => {
  if (planUndo && event.pointerType === "mouse") planUndo.hovered = true;
});
planCancelButton.addEventListener("pointerleave", () => {
  if (planUndo) planUndo.hovered = false;
});
document.addEventListener("visibilitychange", () => {
  if (planUndo) planUndo.last = performance.now();
});
planDialog.addEventListener("keydown", event => {
  if (!planUndo || planUndo.doneTimer || !(event.ctrlKey || event.metaKey) || event.shiftKey || event.key.toLowerCase() !== "z") return;
  event.preventDefault();
  restorePlan();
});
planDialog.addEventListener("close", () => {
  if (planUndo) finishPlanUndo("Подписка отменена.");
});

const weatherCodes = [
  [[0], "Ясно", "clear"], [[1, 2], "Переменная облачность", "partly"], [[3], "Пасмурно", "cloud"],
  [[45, 48], "Туман", "fog"], [[51, 53, 55], "Морось", "rain"], [[56, 57], "Ледяная морось", "rain"],
  [[61, 63, 65], "Дождь", "rain"], [[66, 67], "Ледяной дождь", "rain"],
  [[71, 73, 75, 77], "Снег", "snow"], [[80, 81, 82], "Ливень", "rain"],
  [[85, 86], "Снегопад", "snow"], [[95, 96, 99], "Гроза", "storm"]
];
const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6173"
  + "&current=temperature_2m,weather_code,is_day&hourly=temperature_2m,weather_code,is_day"
  + "&forecast_days=2&timezone=Europe%2FMoscow&timeformat=unixtime";
const weatherTime = new Intl.DateTimeFormat("ru", { hour: "2-digit", minute: "2-digit", timeZone: moscowZone });
const weatherDate = new Intl.DateTimeFormat("ru", { day: "numeric", month: "short", timeZone: moscowZone });
const refreshWeatherAfter = 60 * 1000;
const cacheWeatherFor = 24 * 60 * 60 * 1000;
const weatherDialog = byId("weather-dialog");
const weatherWidget = byId("weather-open");
const weatherHero = byId("weather-hero");
const weatherHours = byId("weather-hours");
const weatherNow = byId("weather-now");
let currentWeather = null;
let currentWeatherStamp = "";
let visibleHours = [];
let hoursMarkup = "";
let previewHour = null;
let weatherLoading = false;
let weatherRequestedAt = -Infinity;

function weatherCondition(code) {
  return weatherCodes.find(([codes]) => codes.includes(code)) ?? [[], "Температура воздуха", "neutral"];
}
function temperatureLabel(temperature) {
  const degrees = Math.round(temperature);
  return (degrees > 0 ? "+" : "") + degrees + "°C";
}
function validWeather(current) {
  return Number.isFinite(current?.temperature_2m) && Number.isInteger(current.weather_code)
    && (current.is_day === 0 || current.is_day === 1)
    && Number.isFinite(current.time) && current.time > 0 && current.time < 8640000000000;
}
function forecastHours(hourly) {
  if (!Array.isArray(hourly?.time) || !Array.isArray(hourly.temperature_2m) || !Array.isArray(hourly.weather_code)) return [];
  const now = Date.now() / 1000;
  return hourly.time.flatMap((time, index) => {
    const temperature = hourly.temperature_2m[index];
    if (!Number.isFinite(time) || time <= now || time > now + 12 * 3600 || !Number.isFinite(temperature)) return [];
    return [{ time, temperature_2m: temperature, weather_code: hourly.weather_code[index], is_day: hourly.is_day?.[index] }];
  }).slice(0, 6);
}
function paintWeatherScene(surface, weather) {
  if (!weather) {
    delete surface.dataset.sky;
    delete surface.dataset.phase;
    return;
  }
  surface.dataset.sky = weatherCondition(weather.weather_code)[2];
  if (weather.is_day === 0 || weather.is_day === 1) {
    surface.dataset.phase = weather.is_day ? "day" : "night";
  } else {
    delete surface.dataset.phase;
  }
}
function showWeatherPreview() {
  const forecast = visibleHours.find(hour => hour.time === previewHour);
  const weather = forecast ?? currentWeather;
  if (!forecast) previewHour = null;
  paintWeatherScene(weatherHero, weather);
  if (weather) {
    byId("weather-degrees").textContent = temperatureLabel(weather.temperature_2m);
    byId("weather-description").textContent = weatherCondition(weather.weather_code)[1];
  }
  byId("weather-stamp").textContent = forecast
    ? "Прогноз на " + weatherTime.format(forecast.time * 1000) + " МСК"
    : currentWeatherStamp;
  weatherNow.setAttribute("aria-pressed", String(!forecast));
  weatherHours.querySelectorAll("[data-hour]").forEach(button => {
    button.setAttribute("aria-pressed", String(Number(button.dataset.hour) === previewHour));
  });
}
function renderWeatherHours() {
  const markup = visibleHours.map(hour => {
    const timestamp = hour.time * 1000;
    return '<li><button type="button" class="weather-hour" data-hour="' + hour.time + '"><time datetime="' +
      new Date(timestamp).toISOString() + '">' + weatherTime.format(timestamp) + '</time><strong>' +
      temperatureLabel(hour.temperature_2m) + '</strong><small>' + weatherCondition(hour.weather_code)[1] + '</small></button></li>';
  }).join("");
  weatherNow.hidden = !visibleHours.length;
  if (markup === hoursMarkup) return;
  const focusedHour = document.activeElement?.dataset.hour;
  hoursMarkup = markup;
  weatherHours.innerHTML = markup;
  if (focusedHour) {
    const button = [...weatherHours.querySelectorAll("[data-hour]")].find(item => item.dataset.hour === focusedHour);
    (button ?? (weatherNow.hidden ? byId("weather-retry") : weatherNow)).focus({ preventScroll: true });
  }
}
function displayWeather(report, cached = false) {
  currentWeather = report.current;
  const observed = currentWeather.time * 1000;
  currentWeatherStamp = (cached ? weatherDate.format(observed) + " · " : "Данные на ")
    + weatherTime.format(observed) + " МСК";
  byId("temperature").textContent = temperatureLabel(currentWeather.temperature_2m);
  byId("conditions").textContent = weatherCondition(currentWeather.weather_code)[1];
  byId("observed-at").textContent = currentWeatherStamp;
  weatherWidget.dataset.status = cached ? "cached" : "live";
  paintWeatherScene(weatherWidget, currentWeather);

  visibleHours = forecastHours(report.hourly);
  renderWeatherHours();
  showWeatherPreview();
  byId("weather-message").textContent = visibleHours.length ? "" : "Почасовой прогноз временно недоступен.";
}
function clearWeather(message) {
  currentWeather = null;
  currentWeatherStamp = "";
  visibleHours = [];
  byId("temperature").textContent = "";
  byId("observed-at").textContent = "";
  byId("conditions").textContent = message;
  byId("weather-degrees").textContent = "—";
  byId("weather-description").textContent = message;
  delete weatherWidget.dataset.status;
  paintWeatherScene(weatherWidget, null);
  renderWeatherHours();
  showWeatherPreview();
  byId("weather-message").textContent = message;
}
async function loadWeather(force = false) {
  const now = Date.now();
  if (weatherLoading || (!force && now - weatherRequestedAt < refreshWeatherAfter)) return;
  const saved = readValue("weather.report.moscow");
  const cachedAge = now - (saved?.current?.time ?? 0) * 1000;
  const hasCache = validWeather(saved?.current) && cachedAge >= 0 && cachedAge < cacheWeatherFor;
  weatherRequestedAt = now;
  weatherLoading = true;
  byId("weather-retry").disabled = true;
  if (!currentWeather) {
    if (hasCache) displayWeather(saved, true);
    else clearWeather("Загружаем погоду…");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(weatherUrl, { signal: controller.signal, cache: "no-store" });
    if (!response.ok) throw new Error("Weather unavailable");
    const report = await response.json();
    if (!validWeather(report.current)) throw new Error("Incomplete weather data");
    writeValue("weather.report.moscow", report);
    displayWeather(report, Date.now() - report.current.time * 1000 >= 30 * 60 * 1000);
  } catch {
    if (hasCache) {
      displayWeather(saved, true);
      byId("weather-message").textContent = "Показана последняя доступная сводка.";
    } else {
      clearWeather("Погода временно недоступна.");
    }
  } finally {
    clearTimeout(timeout);
    weatherLoading = false;
    byId("weather-retry").disabled = false;
  }
}

weatherWidget.addEventListener("click", () => {
  previewHour = null;
  showWeatherPreview();
  weatherDialog.showModal();
  loadWeather();
});
weatherHours.addEventListener("click", event => {
  const button = event.target.closest("[data-hour]");
  if (!button) return;
  previewHour = Number(button.dataset.hour);
  showWeatherPreview();
});
weatherNow.addEventListener("click", () => {
  previewHour = null;
  showWeatherPreview();
});
byId("weather-retry").addEventListener("click", () => loadWeather(true));
window.addEventListener("online", () => loadWeather(true));
window.addEventListener("offline", () => {
  if (weatherWidget.dataset.status) weatherWidget.dataset.status = "cached";
  byId("weather-message").textContent = "Нет подключения к интернету.";
});
function refreshPage() {
  refreshCalendar();
  updateProgress();
  updateCash();
  updatePlan();
  renderStories();
  loadWeather();
}
window.addEventListener("pageshow", refreshPage);
window.addEventListener("storage", event => {
  if (event.key === null || event.key === prefix + "theme") updateTheme();
  if (event.key === null || event.key.startsWith(prefix)) {
    if (!byId("story-dialog").open) renderStories();
    updateProgress();
    updateCash();
    updatePlan();
  }
});
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    refreshCalendar();
    updatePlan();
    loadWeather();
  }
});
setInterval(() => {
  if (!document.hidden) {
    refreshCalendar();
    updatePlan();
  }
}, 60 * 1000);
setInterval(() => {
  if (!document.hidden) loadWeather();
}, 15 * 1000);
renderFeed("all");
refreshPage();
syncCaseView();
