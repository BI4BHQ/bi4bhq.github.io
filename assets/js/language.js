(() => {
  const translations = {
    zh: {
      home: "首页",
      about: "关于我",
      station: "电台设备",
      photos: "照片展示",
      biscione: "米兰蛇徽",
      qsl: "QSL 卡片",
      logbook: "通联日志",
      contact: "联系我"
    },

    en: {
      home: "HOME",
      about: "ABOUT",
      station: "STATION",
      photos: "PHOTO GALLERY",
      biscione: "IL BISCIONE",
      qsl: "QSL GALLERY",
      logbook: "LOGBOOK",
      contact: "CONTACT"
    },

    it: {
      home: "HOME",
      about: "CHI SONO",
      station: "STAZIONE",
      photos: "GALLERIA",
      biscione: "IL BISCIONE",
      qsl: "GALLERIA QSL",
      logbook: "REGISTRO",
      contact: "CONTATTI"
    }
  };

  const languageNames = {
    zh: "中文",
    en: "EN",
    it: "IT"
  };

  const savedLanguage = localStorage.getItem("bi4bhq-language") || "zh";
  let currentLanguage = translations[savedLanguage]
    ? savedLanguage
    : "zh";

  // 创建语言切换按钮
  const switcher = document.createElement("div");
  switcher.id = "bi4bhq-language-switcher";

  switcher.innerHTML = `
    <button data-lang="zh">中文</button>
    <button data-lang="en">EN</button>
    <button data-lang="it">IT</button>
  `;

  document.body.appendChild(switcher);

  // 添加样式
  const style = document.createElement("style");
  style.textContent = `
    #bi4bhq-language-switcher {
      position: fixed;
      top: 18px;
      right: 5%;
      z-index: 99999;
      display: flex;
      gap: 12px;
      padding: 8px 12px;
      background: rgba(0, 0, 0, 0.85);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 20px;
    }

    #bi4bhq-language-switcher button {
      border: none;
      background: transparent;
      color: #aaa;
      font-size: 12px;
      cursor: pointer;
      padding: 3px;
    }

    #bi4bhq-language-switcher button.active {
      color: #e32636;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      #bi4bhq-language-switcher {
        top: 12px;
        right: 12px;
      }
    }
  `;

  document.head.appendChild(style);

  function updateLanguageButtons() {
    switcher.querySelectorAll("button").forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.lang === currentLanguage
      );
    });
  }

  function setLanguage(language) {
    if (!translations[language]) return;

    currentLanguage = language;
    localStorage.setItem("bi4bhq-language", language);

    updateLanguageButtons();

    document.documentElement.lang =
      language === "zh" ? "zh-CN" : language;
  }

  switcher.addEventListener("click", event => {
    const button = event.target.closest("button[data-lang]");
    if (!button) return;

    setLanguage(button.dataset.lang);
  });

  setLanguage(currentLanguage);
})();
