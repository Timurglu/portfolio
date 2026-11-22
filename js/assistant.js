/**
 * 3D Character Assistant ("Виртуальный Тимур")
 * Interactive 3D mouse parallax + intelligent portfolio dialogue
 */

(() => {
  const KNOWLEDGE_BASE = [
    {
      keywords: ["привет", "здравствуй", "ку", "хай", "hello", "hi", "добрый", "ты кто", "кто ты"],
      reply: "Привет! Рад знакомству. Я цифровой 3D-ассистент Тимура Глухова — продуктового дизайнера с 3+ годами опыта в eCommerce и FinTech. Чем могу помочь? Могу разобрать кейсы, рассказать про опыт работы, стек или помочь связаться с Тимуром!",
      chips: ["🎯 Ключевые кейсы", "💼 Опыт работы", "🛠 Стек и скиллы", "📬 Контакты"]
    },
    {
      keywords: ["кейс", "кейсы", "проект", "проекты", "портфолио", "работы"],
      reply: "Вот ключевые проекты Тимура с измеримым продуктовым результатом:\n\n• **Антиплагиат**: AI-ассистент прямо в отчёте проверки, zero-prompt сценарии в 1 клик, снижение оттока пользователей.\n• **Sber CIB**: Редизайн сложнейшей финансовой таблицы на токенах, режимы Heatmap/Сравнение, фиксация прогнозного года.\n• **Silkway**: Масштабируемый UI-kit и редизайн мобильного приложения маркетплейса.\n• **Mind Clinic**: Сервис психотерапии (+27% к конверсии).\n• **Драйвлайн**: Мобильное приложение заказа такси.",
      chips: ["🛡 Кейс Антиплагиат", "📊 Кейс Sber CIB", "📱 Кейс Silkway", "💼 Опыт работы"],
      actions: [
        { label: "🔍 Антиплагиат", href: "../antiplagiat.html" },
        { label: "📊 Sber CIB", href: "../sber.html" },
        { label: "📱 Silkway", href: "../silkway.html" }
      ]
    },
    {
      keywords: ["опыт", "стаж", "где работал", "компании", "агентств", "работал", "бэкграунд", "резюме", "cv", "биография"],
      reply: "Тимур в продуктовом дизайне уже более 3 лет (с 2023 года). Основные этапы:\n\n• **МОИ (Digital-агентство)**: UX/UI для B2B и B2C сервисов. Маркетплейс Silkway, приложение такси Драйвлайн, сервис Mind Clinic (+27% к конверсии).\n• **MAX Group LTD (FinTech)**: B2B-финансы, виртуальные карты, финансовые дашборды, массовые операции.\n• **Проекты**: AI-ассистент в «Антиплагиате», финансовая таблица на токенах в Sber CIB.\n• **Образование**: Президентская академия (ИТ и программирование).",
      chips: ["🎯 Ключевые кейсы", "🛠 Стек и скиллы", "📄 Скачать резюме"],
      actions: [
        { label: "📄 Открыть резюме (PDF)", href: "../assets/timur-gluhov-cv.pdf", target: "_blank" }
      ]
    },
    {
      keywords: ["антиплагиат", "antiplagiat", "нейросет", "ai-ассистент", "ии", "zero-prompt"],
      reply: "В кейсе **«Антиплагиат»** Тимур спроектировал и встроил AI-ассистента прямо в отчёт проверки текста:\n\n• Решил проблему ступора пользователей перед пустой строкой промпта (zero-prompt сценарии в 1 клик).\n• Человеческий вердикт и прозрачное объяснение заимствований.\n• Навигация к проблемным абзацам за 1 клик. В результате снизился отток пользователей и сократилось время доработки текста.",
      chips: ["📊 Кейс Sber CIB", "📱 Кейс Silkway", "💼 Опыт работы"],
      actions: [
        { label: "🔍 Смотреть кейс «Антиплагиат»", href: "../antiplagiat.html" }
      ]
    },
    {
      keywords: ["сбер", "sber", "cib", "таблиц", "финанс", "токен", "инвестиц"],
      reply: "В кейсе **Sber CIB (B2B FinTech & Analytics)** Тимур пересобрал сложную финансовую аналитическую таблицу:\n\n• Перевёл компоненты на дизайн-токены и гибкие варианты Figma.\n• Спроектировал закрепление базового прогнозного года и независимый вертикальный скролл фильтров.\n• Внедрил режимы сравнения срезов («Сравнение», «Таблица», Heatmap) без потери контекста аналитиками.",
      chips: ["🛡 Кейс Антиплагиат", "📱 Кейс Silkway", "🛠 Стек и скиллы"],
      actions: [
        { label: "📊 Смотреть кейс Sber CIB", href: "../sber.html" }
      ]
    },
    {
      keywords: ["силквей", "silkway", "маркетплейс", "профиль", "ui-kit", "кит", "ui kit"],
      reply: "В кейсе **Silkway (B2C/B2B Mobile App)**:\n\n• Создал масштабируемый UI-kit на дизайн-токенах и компонентах Figma.\n• Переосмыслил структуру и логику профиля пользователя в мобильном приложении.\n• Спроектировал понятные сценарии для покупателей, поставщиков и логистов.",
      chips: ["🛡 Кейс Антиплагиат", "📊 Кейс Sber CIB", "📬 Контакты"],
      actions: [
        { label: "📱 Смотреть кейс Silkway", href: "../silkway.html" }
      ]
    },
    {
      keywords: ["стек", "скилл", "инструмент", "навык", "фигма", "figma", "программ", "умеешь"],
      reply: "Ключевые навыки и стек Тимура:\n\n• **Продуктовый дизайн**: CustDev, интервью, CJM, User Flow, информационная архитектура, гипотезы, A/B-тесты, юзабилити-тестирование.\n• **UI & Системы**: Figma (Auto Layout, Variables, Tokens, Variants), дизайн-системы, UI Kits, мобильный и веб-дизайн (iOS, Android, Web).\n• **Технологии**: HTML/CSS, понимание ограничений разработки, опыт работы с AI (Claude, ChatGPT, запуск собственного AI SaaS).",
      chips: ["💼 Опыт работы", "🎯 Ключевые кейсы", "📬 Контакты"]
    },
    {
      keywords: ["контакт", "связ", "телеграм", "telegram", "написать", "почт", "телефон", "тг", "tg"],
      reply: "Связаться с Тимуром можно напрямую:\n\n• **Telegram**: [@tidesigner](https://t.me/tidesigner) (отвечает быстрее всего)\n• **Телефон**: +7 (910) 108-86-30\n• **Город**: Москва\n• **Формат**: удалёнка или гибрид",
      chips: ["📄 Скачать резюме", "💼 Опыт работы"],
      actions: [
        { label: "✈️ Написать в Telegram", href: "https://t.me/tidesigner", target: "_blank" }
      ]
    },
    {
      keywords: ["зарплат", "ставк", "ожидани", "деньг", "стоимост", "услови", "формат", "график", "цена", "прайс", "заказать", "найм", "сотрудничеств"],
      reply: "Тимур рассматривает предложения на роль **Product Designer / Middle UX/UI Designer**, а также точечные проектные задачи:\n\n• **Формат**: Полная занятость (удалённо или гибрид в Москве), либо проектное сотрудничество.\n• **Ожидания**: обсуждаются индивидуально под проект и масштаб задач.\n• Напишите напрямую в Telegram [@tidesigner](https://t.me/tidesigner), чтобы обсудить детали и познакомиться!",
      chips: ["📬 Контакты", "📄 Скачать резюме"],
      actions: [
        { label: "💬 Написать Тимуру в Telegram", href: "https://t.me/tidesigner", target: "_blank" }
      ]
    },
    {
      keywords: ["образовани", "учеб", "вуз", "институт", "академи", "диплом", "университет"],
      reply: "Тимур получил образование в **Президентской академии** по направлению «Информационные технологии и программирование» (2020–2024 гг.). Инженерная база позволяет говорить с разработчиками на одном языке и учитывать технические ограничения интерфейсов.",
      chips: ["💼 Опыт работы", "🛠 Стек и скиллы", "📬 Контакты"]
    }
  ];

  const DEFAULT_REPLY = {
    reply: "Отличный вопрос! Я могу подробно рассказать о том, как Тимур решает продуктовые задачи, проектирует дизайн-системы или собирает сложные интерфейсы в FinTech и B2B. Также вы всегда можете написать Тимуру напрямую в Telegram [@tidesigner](https://t.me/tidesigner).",
    chips: ["💼 Опыт работы", "🎯 Ключевые кейсы", "🛠 Стек и скиллы", "📬 Контакты"],
    actions: [
      { label: "✈️ Написать Тимуру", href: "https://t.me/tidesigner", target: "_blank" }
    ]
  };

  function findAnswer(query) {
    const q = query.toLowerCase().trim();
    for (const item of KNOWLEDGE_BASE) {
      if (item.keywords.some(k => q.includes(k))) {
        return item;
      }
    }
    return DEFAULT_REPLY;
  }

  function initAssistant() {
    const widget = document.getElementById("timur-assistant");
    if (!widget) return;

    const avatarBtn = document.getElementById("assistant-avatar-btn");
    const avatarImg = widget.querySelector(".assistant-avatar-img");
    const teaser = document.getElementById("assistant-teaser");
    const teaserClose = document.getElementById("assistant-teaser-close");
    const chatPanel = document.getElementById("assistant-chat-panel");
    const closeBtn = document.getElementById("assistant-close-btn");
    const messagesContainer = document.getElementById("assistant-chat-messages");
    const suggestionsContainer = document.getElementById("assistant-suggestions");
    const chatForm = document.getElementById("assistant-chat-form");
    const chatInput = document.getElementById("assistant-chat-input");
    const sendBtn = document.getElementById("assistant-send-btn");

    let isOpen = false;

    // 3D Parallax: avatar head subtly follows cursor
    let mouseX = 0, mouseY = 0;
    let currentRotateX = 0, currentRotateY = 0;

    window.addEventListener("mousemove", e => {
      if (!avatarImg) return;
      const rect = avatarBtn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const diffX = e.clientX - centerX;
      const diffY = e.clientY - centerY;
      const dist = Math.hypot(diffX, diffY) || 1;
      const maxDist = 700;

      const factor = Math.min(dist / maxDist, 1);
      const targetRotateY = (diffX / dist) * 18 * factor;
      const targetRotateX = -(diffY / dist) * 14 * factor;

      mouseX = targetRotateY;
      mouseY = targetRotateX;
    }, { passive: true });

    function animateAvatar() {
      if (avatarImg) {
        currentRotateX += (mouseY - currentRotateX) * 0.1;
        currentRotateY += (mouseX - currentRotateY) * 0.1;
        avatarImg.style.transform = `perspective(300px) rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) scale(1.04)`;
      }
      requestAnimationFrame(animateAvatar);
    }
    requestAnimationFrame(animateAvatar);

    // Open/Close
    function openChat() {
      isOpen = true;
      widget.classList.add("is-chat-open");
      chatPanel.classList.add("is-open");
      if (teaser) teaser.style.display = "none";
      setTimeout(() => chatInput.focus(), 150);
      scrollBottom();
    }

    function closeChat() {
      isOpen = false;
      widget.classList.remove("is-chat-open");
      chatPanel.classList.remove("is-open");
    }

    avatarBtn.addEventListener("click", () => {
      if (isOpen) closeChat();
      else openChat();
    });

    if (teaser) {
      teaser.addEventListener("click", e => {
        if (e.target === teaserClose) {
          e.stopPropagation();
          teaser.style.display = "none";
          return;
        }
        openChat();
      });
    }

    if (closeBtn) closeBtn.addEventListener("click", closeChat);

    window.addEventListener("keydown", e => {
      if (e.key === "Escape" && isOpen) closeChat();
    });

    function scrollBottom() {
      setTimeout(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, 30);
    }

    function renderMarkdown(text) {
      // Basic safe formatting for bold, links, lists
      let html = text
        .replace(/\n\n/g, "<br><br>")
        .replace(/\n• /g, "<br>• ")
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener" style="text-decoration: underline; color: inherit; font-weight: 600;">$1</a>');
      return html;
    }

    function addMessage(sender, text, actions = null) {
      const msg = document.createElement("div");
      msg.className = `assistant-msg ${sender}`;

      const bubble = document.createElement("div");
      bubble.className = "assistant-msg-bubble";
      bubble.innerHTML = renderMarkdown(text);
      msg.appendChild(bubble);

      if (actions && actions.length) {
        const actWrap = document.createElement("div");
        actWrap.className = "assistant-msg-actions";
        actions.forEach(act => {
          const a = document.createElement("a");
          a.className = "assistant-action-link";
          a.href = act.href;
          if (act.target) a.target = act.target;
          a.innerHTML = act.label;
          actWrap.appendChild(a);
        });
        msg.appendChild(actWrap);
      }

      messagesContainer.appendChild(msg);
      scrollBottom();
    }

    function showTyping() {
      const t = document.createElement("div");
      t.className = "assistant-typing";
      t.id = "assistant-typing-indicator";
      t.innerHTML = "<span></span><span></span><span></span>";
      messagesContainer.appendChild(t);
      scrollBottom();
    }

    function hideTyping() {
      const t = document.getElementById("assistant-typing-indicator");
      if (t) t.remove();
    }

    function setChips(chips) {
      suggestionsContainer.innerHTML = "";
      if (!chips || !chips.length) return;
      chips.forEach(c => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "assistant-chip";
        btn.textContent = c;
        btn.addEventListener("click", () => {
          handleUserInput(c.replace(/^[\p{Emoji}\s]+/u, ""));
        });
        suggestionsContainer.appendChild(btn);
      });
    }

    function handleUserInput(text) {
      if (!text || !text.trim()) return;
      addMessage("user", text.trim());
      chatInput.value = "";
      sendBtn.disabled = true;

      showTyping();
      setTimeout(() => {
        hideTyping();
        const answer = findAnswer(text);
        addMessage("bot", answer.reply, answer.actions);
        setChips(answer.chips);
      }, 450);
    }

    chatForm.addEventListener("submit", e => {
      e.preventDefault();
      handleUserInput(chatInput.value);
    });

    chatInput.addEventListener("input", () => {
      sendBtn.disabled = !chatInput.value.trim();
    });

    // Initial suggestions
    setChips(["💼 Опыт работы", "🛡 Кейс Антиплагиат", "📊 Кейс Sber CIB", "📱 Кейс Silkway", "📬 Контакты"]);

    // URL parameter support (e.g. ?assistant=open or #assistant)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("assistant") === "open" || window.location.hash === "#assistant") {
      openChat();
      const initialQuery = urlParams.get("q");
      if (initialQuery) {
        handleUserInput(initialQuery);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAssistant);
  } else {
    initAssistant();
  }
})();
