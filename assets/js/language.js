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
      contact: "联系我",

hero: {
  eyebrow: ["中国业余无线电个人电台", "静安 · 上海 · 中国"],
  title: "跨越距离 · 连接世界",
  description: "来自中国上海。<br>通过无线电波，连接远方的人。每一道信号，都承载着一个故事。",
  buttons: ["我的电台", "访问我的 QRZ"]
}
    },

    en: {
      home: "HOME",
      about: "ABOUT",
      station: "STATION",
      photos: "PHOTO GALLERY",
      biscione: "IL BISCIONE",
      qsl: "QSL GALLERY",
      logbook: "LOGBOOK",
      contact: "CONTACT",

hero: {
  eyebrow: [
    "PERSONAL AMATEUR RADIO STATION OF CHINA",
    "JING'AN · SHANGHAI · CHINA"
  ],
  title: "BEYOND THE DISTANCE · CONNECT THE WORLD",
  description: "From Shanghai, China.<br>Through the airwaves, connecting people across distance. Every signal carries a story.",
  buttons: ["MY STATION", "VISIT MY QRZ"]
}
    },

    it: {
      home: "HOME",
      about: "CHI SONO",
      station: "STAZIONE",
      photos: "GALLERIA",
      biscione: "IL BISCIONE",
      qsl: "GALLERIA QSL",
      logbook: "REGISTRO",
      contact: "CONTATTI",

hero: {
  eyebrow: [
    "STAZIONE RADIOAMATORIALE PERSONALE DELLA CINA",
    "JING'AN · SHANGHAI · CINA"
  ],
  title: "OLTRE LA DISTANZA · CONNETTERE IL MONDO",
  description: "Da Shanghai, Cina.<br>Attraverso le onde radio, connettendo persone lontane. Ogni segnale porta con sé una storia.",
  buttons: ["LA MIA STAZIONE", "VISITA IL MIO QRZ"]
}
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

    // 将语言切换按钮放到 BI4BHQ 标志后面
  const logo = document.querySelector("header .logo");

  if (logo) {
    logo.insertAdjacentElement("afterend", switcher);
  } else {
    document.body.appendChild(switcher);
  }

  // 添加样式
  const style = document.createElement("style");
  style.textContent = `
    #bi4bhq-language-switcher {
  position: static;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 12px;
  padding: 2px 4px;
  background: transparent;
  border: none;
  border-radius: 0;
  flex-shrink: 0;
  white-space: nowrap;
}

  #bi4bhq-language-switcher button {
  border: none;
  background: transparent;
  color: #aaa;
  font-size: 11px;
  cursor: pointer;
  padding: 2px;
  line-height: 1.5;
}

    #bi4bhq-language-switcher button.active {
      color: #e32636;
      font-weight: bold;
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

    // 翻译顶部导航栏
    const navLinks = document.querySelectorAll("header nav a");

    const navItems = [
      "home",
      "about",
      "station",
      "photos",
      "biscione",
      "qsl",
      "logbook",
      "contact"
    ];

    navLinks.forEach((link, index) => {
      const key = navItems[index];

      if (key && translations[language][key]) {
        link.textContent = translations[language][key];
      }
    });
    // 翻译首页首屏
const hero = translations[language].hero;
const heroContent = document.querySelector(".hero-content");

if (heroContent && hero) {
  const eyebrow = heroContent.querySelectorAll(".eyebrow");

  if (eyebrow[0]) {
    eyebrow[0].textContent = hero.eyebrow[0];
  }

  const title = heroContent.querySelector("h2");

  if (title) {
    title.textContent = hero.title;
  }

  const description = heroContent.querySelector("p");

  if (description) {
    description.innerHTML = hero.description;
  }

  const buttons = heroContent.querySelectorAll(".buttons a");

  buttons.forEach((button, index) => {
    if (hero.buttons[index]) {
      button.textContent = hero.buttons[index];
    }
  });

  if (eyebrow[1]) {
    eyebrow[1].textContent = hero.eyebrow[1];
  }
}
}

  switcher.addEventListener("click", event => {
    const button = event.target.closest("button[data-lang]");
    if (!button) return;

    setLanguage(button.dataset.lang);
  });

  setLanguage(currentLanguage);
})();
