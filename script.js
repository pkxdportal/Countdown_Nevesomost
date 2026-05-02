const targetDate = new Date("2026-06-11T13:00:00Z");
const eventStartDate = new Date("2025-06-26T00:00:00Z");

let currentLang = "en";
let lastSeconds = null;
let isPlaying = false;
let countdownInterval = null;

const translations = {
  en: {
    eventDate: "JUNE 11, 2026 • 09:00 NEW YORK",
    titleTop: "Until",
    titleMain: "Zero Gravity",
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds",
    credit: "Website created by <b>PK XD PORTAL</b>",
    telegramBtn: "Telegram",
    youtubeBtn: "YouTube",
    feedbackChannel: "PK XD PORTAL YouTube",
    musicOn: "🔊 Music",
    musicOff: "🔇 Turn music off",
    started: "🚀 Zero Gravity has begun",
    fanCountdown: "Fan countdown for PK XD",
    disclaimer: "This is a fan-made countdown. PK XD is a game by Afterverse. This site is not official and is not affiliated with Afterverse.",
    feedbackText: "For website improvements or adding more languages, write here:",
    downloadTitle: "Download / Update PK XD",
    googlePlayBtn: "Google Play",
    appStoreBtn: "App Store",
    languageLabel: "Language",
    downloadLabel: "Download",
    shareLabel: "Share",
    countdownMode: "Countdown",
    progressMode: "Progress",
    progressPassed: "Passed",
    progressLeft: "Left",
    progressText: "Event progress",
    shareCopied: "Link copied!",

    teams: {
      volts: {
        icon: "⚡",
        title: "TEAM VOLTS",
        text: "PURE LIGHTNING ENERGY! I am full of joy and energy!"
      },
      flame: {
        icon: "🔥",
        title: "TEAM FLAME",
        text: "THE INTENSITY OF FLAME! I am warm and fierce!"
      },
      leaf: {
        icon: "🍃",
        title: "TEAM LEAF",
        text: "THE POWER INSIDE EVERY LEAF! I am righteous and strong, like nature!"
      }
    }
  },

  ru: {
    eventDate: "11 ИЮНЯ 2026 • 16:00 МОСКВА",
    titleTop: "До начала",
    titleMain: "Невесомости",
    days: "дней",
    hours: "часов",
    minutes: "минут",
    seconds: "секунд",
    credit: "Сайт создан командой <b>PK XD PORTAL</b>",
    telegramBtn: "Telegram",
    youtubeBtn: "YouTube",
    feedbackChannel: "YouTube PK XD PORTAL",
    musicOn: "🔊 Музыка",
    musicOff: "🔇 Выключить музыку",
    started: "🚀 Невесомость началась",
    fanCountdown: "Фанатский отсчёт для PK XD",
    disclaimer: "Это фанатский отсчёт. PK XD — игра от Afterverse. Этот сайт не является официальным и не связан с Afterverse.",
    feedbackText: "По вопросам улучшения сайта или добавления других языков пишите сюда:",
    downloadTitle: "Скачать / обновить PK XD",
    googlePlayBtn: "Google Play",
    appStoreBtn: "App Store",
    languageLabel: "Язык",
    downloadLabel: "Скачать",
    shareLabel: "Поделиться",
    countdownMode: "Отсчёт",
    progressMode: "Прогресс",
    progressPassed: "Прошло",
    progressLeft: "Осталось",
    progressText: "Прогресс до события",
    shareCopied: "Ссылка скопирована!",

    teams: {
      volts: {
        icon: "⚡",
        title: "TEAM VOLTS",
        text: "ЧИСТАЯ ЭНЕРГИЯ МОЛНИИ! Я полон радости и энергии!"
      },
      flame: {
        icon: "🔥",
        title: "TEAM FLAME",
        text: "ИНТЕНСИВНОСТЬ ПЛАМЕНИ! Я тёплый и яростный!"
      },
      leaf: {
        icon: "🍃",
        title: "TEAM LEAF",
        text: "СИЛА ВНУТРИ КАЖДОГО ЛИСТА! Я праведный и сильный, как природа!"
      }
    }
  },

  de: {
    eventDate: "11. JUNI 2026 • 15:00 BERLIN",
    titleTop: "Bis",
    titleMain: "Zero Gravity",
    days: "Tage",
    hours: "Stunden",
    minutes: "Minuten",
    seconds: "Sekunden",
    credit: "Website erstellt von <b>PK XD PORTAL</b>",
    telegramBtn: "Telegram",
    youtubeBtn: "YouTube",
    feedbackChannel: "PK XD PORTAL YouTube",
    musicOn: "🔊 Musik",
    musicOff: "🔇 Musik ausschalten",
    started: "🚀 Zero Gravity hat begonnen",
    fanCountdown: "Fan-Countdown für PK XD",
    disclaimer: "Dies ist ein von Fans erstellter Countdown. PK XD ist ein Spiel von Afterverse. Diese Website ist nicht offiziell und steht nicht in Verbindung mit Afterverse.",
    feedbackText: "Für Website-Verbesserungen oder weitere Sprachen schreibe hier:",
    downloadTitle: "PK XD herunterladen / aktualisieren",
    googlePlayBtn: "Google Play",
    appStoreBtn: "App Store",
    languageLabel: "Sprache",
    downloadLabel: "Download",
    shareLabel: "Teilen",
    countdownMode: "Countdown",
    progressMode: "Fortschritt",
    progressPassed: "Vergangen",
    progressLeft: "Übrig",
    progressText: "Fortschritt bis zum Event",
    shareCopied: "Link kopiert!",

    teams: {
      volts: {
        icon: "⚡",
        title: "TEAM VOLTS",
        text: "REINE BLITZENERGIE! Ich bin voller Freude und Energie!"
      },
      flame: {
        icon: "🔥",
        title: "TEAM FLAME",
        text: "DIE INTENSITÄT DER FLAMME! Ich bin warm und wild!"
      },
      leaf: {
        icon: "🍃",
        title: "TEAM LEAF",
        text: "DIE KRAFT IN JEDEM BLATT! Ich bin gerecht und stark wie die Natur!"
      }
    }
  },

  fr: {
    eventDate: "11 JUIN 2026 • 15:00 PARIS",
    titleTop: "Jusqu’à",
    titleMain: "Zéro Gravité",
    days: "jours",
    hours: "heures",
    minutes: "minutes",
    seconds: "secondes",
    credit: "Site créé par <b>PK XD PORTAL</b>",
    telegramBtn: "Telegram",
    youtubeBtn: "YouTube",
    feedbackChannel: "YouTube PK XD PORTAL",
    musicOn: "🔊 Musique",
    musicOff: "🔇 Couper la musique",
    started: "🚀 Zéro Gravité a commencé",
    fanCountdown: "Compte à rebours de fan pour PK XD",
    disclaimer: "Ceci est un compte à rebours créé par des fans. PK XD est un jeu d’Afterverse. Ce site n’est pas officiel et n’est pas affilié à Afterverse.",
    feedbackText: "Pour améliorer le site ou ajouter d’autres langues, écris ici :",
    downloadTitle: "Télécharger / Mettre à jour PK XD",
    googlePlayBtn: "Google Play",
    appStoreBtn: "App Store",
    languageLabel: "Langue",
    downloadLabel: "Télécharger",
    shareLabel: "Partager",
    countdownMode: "Compte à rebours",
    progressMode: "Progression",
    progressPassed: "Passé",
    progressLeft: "Restant",
    progressText: "Progression jusqu’à l’événement",
    shareCopied: "Lien copié !",

    teams: {
      volts: {
        icon: "⚡",
        title: "TEAM VOLTS",
        text: "ÉNERGIE PURE DE LA FOUDRE ! Je suis plein de joie et d’énergie !"
      },
      flame: {
        icon: "🔥",
        title: "TEAM FLAME",
        text: "L’INTENSITÉ DE LA FLAMME ! Je suis chaleureux et féroce !"
      },
      leaf: {
        icon: "🍃",
        title: "TEAM LEAF",
        text: "LA FORCE DANS CHAQUE FEUILLE ! Je suis juste et fort comme la nature !"
      }
    }
  },

  pl: {
    eventDate: "11 CZERWCA 2026 • 15:00 WARSZAWA",
    titleTop: "Do",
    titleMain: "Nieważkości",
    days: "dni",
    hours: "godziny",
    minutes: "minuty",
    seconds: "sekundy",
    credit: "Strona stworzona przez <b>PK XD PORTAL</b>",
    telegramBtn: "Telegram",
    youtubeBtn: "YouTube",
    feedbackChannel: "YouTube PK XD PORTAL",
    musicOn: "🔊 Muzyka",
    musicOff: "🔇 Wyłącz muzykę",
    started: "🚀 Nieważkość się rozpoczęła",
    fanCountdown: "Fanowski licznik dla PK XD",
    disclaimer: "To fanowski licznik. PK XD to gra od Afterverse. Ta strona nie jest oficjalna i nie jest powiązana z Afterverse.",
    feedbackText: "W sprawie ulepszeń strony lub dodania nowych języków napisz tutaj:",
    downloadTitle: "Pobierz / Zaktualizuj PK XD",
    googlePlayBtn: "Google Play",
    appStoreBtn: "App Store",
    languageLabel: "Język",
    downloadLabel: "Pobierz",
    shareLabel: "Udostępnij",
    countdownMode: "Odliczanie",
    progressMode: "Postęp",
    progressPassed: "Minęło",
    progressLeft: "Zostało",
    progressText: "Postęp do wydarzenia",
    shareCopied: "Link skopiowany!",

    teams: {
      volts: {
        icon: "⚡",
        title: "TEAM VOLTS",
        text: "CZYSTA ENERGIA BŁYSKAWICY! Jestem pełen radości i energii!"
      },
      flame: {
        icon: "🔥",
        title: "TEAM FLAME",
        text: "INTENSYWNOŚĆ PŁOMIENIA! Jestem ciepły i zaciekły!"
      },
      leaf: {
        icon: "🍃",
        title: "TEAM LEAF",
        text: "SIŁA W KAŻDYM LIŚCIU! Jestem prawy i silny jak natura!"
      }
    }
  },

  pt: {
    eventDate: "11 JUNHO 2026 • 10:00 BRASÍLIA",
    titleTop: "Até",
    titleMain: "Zero Gravity",
    days: "dias",
    hours: "horas",
    minutes: "minutos",
    seconds: "segundos",
    credit: "Site criado pela <b>PK XD PORTAL</b>",
    telegramBtn: "Telegram",
    youtubeBtn: "YouTube",
    feedbackChannel: "YouTube PK XD PORTAL",
    musicOn: "🔊 Música",
    musicOff: "🔇 Desligar música",
    started: "🚀 Zero Gravity começou",
    fanCountdown: "Contagem regressiva feita por fãs para PK XD",
    disclaimer: "Esta é uma contagem regressiva feita por fãs. PK XD é um jogo da Afterverse. Este site não é oficial e não possui afiliação com a Afterverse.",
    feedbackText: "Para melhorias no site ou adição de novos idiomas, escreva aqui:",
    downloadTitle: "Baixar / Atualizar PK XD",
    googlePlayBtn: "Google Play",
    appStoreBtn: "App Store",
    languageLabel: "Idioma",
    downloadLabel: "Baixar",
    shareLabel: "Compartilhar",
    countdownMode: "Contagem",
    progressMode: "Progresso",
    progressPassed: "Passou",
    progressLeft: "Falta",
    progressText: "Progresso até o evento",
    shareCopied: "Link copiado!",

    teams: {
      volts: {
        icon: "⚡",
        title: "TEAM VOLTS",
        text: "ENERGIA PURA DE RAIO!"
      },
      flame: {
        icon: "🔥",
        title: "TEAM FLAME",
        text: "INTENSIDADE DO FOGO!"
      },
      leaf: {
        icon: "🍃",
        title: "TEAM LEAF",
        text: "FORÇA DA NATUREZA!"
      }
    }
  },

  tr: {
    eventDate: "11 HAZİRAN 2026 • 16:00 ISTANBUL",
    titleTop: "Kalan Süre",
    titleMain: "Zero Gravity",
    days: "gün",
    hours: "saat",
    minutes: "dakika",
    seconds: "saniye",
    credit: "<b>PK XD PORTAL</b> tarafından oluşturuldu",
    telegramBtn: "Telegram",
    youtubeBtn: "YouTube",
    feedbackChannel: "PK XD PORTAL YouTube",
    musicOn: "🔊 Müzik",
    musicOff: "🔇 Müziği Kapat",
    started: "🚀 Zero Gravity başladı",
    fanCountdown: "PK XD için hayran geri sayımı",
    disclaimer: "Bu hayran yapımı bir geri sayımdır. PK XD, Afterverse tarafından geliştirilen bir oyundur. Bu site resmi değildir ve Afterverse ile bağlantılı değildir.",
    feedbackText: "Site geliştirmeleri veya yeni diller eklemek için buraya yazın:",
    downloadTitle: "PK XD İndir / Güncelle",
    googlePlayBtn: "Google Play",
    appStoreBtn: "App Store",
    languageLabel: "Dil",
    downloadLabel: "İndir",
    shareLabel: "Paylaş",
    countdownMode: "Geri Sayım",
    progressMode: "İlerleme",
    progressPassed: "Geçti",
    progressLeft: "Kaldı",
    progressText: "Etkinliğe kalan ilerleme",
    shareCopied: "Bağlantı kopyalandı!",

    teams: {
      volts: {
        icon: "⚡",
        title: "TEAM VOLTS",
        text: "SAF YILDIRIM ENERJİSİ!"
      },
      flame: {
        icon: "🔥",
        title: "TEAM FLAME",
        text: "ATEŞİN YOĞUNLUĞU!"
      },
      leaf: {
        icon: "🍃",
        title: "TEAM LEAF",
        text: "DOĞANIN GÜCÜ!"
      }
    }
  },

  id: {
    eventDate: "11 JUNI 2026 • 20:00 JAKARTA",
    titleTop: "Menuju",
    titleMain: "Zero Gravity",
    days: "hari",
    hours: "jam",
    minutes: "menit",
    seconds: "detik",
    credit: "Website dibuat oleh <b>PK XD PORTAL</b>",
    telegramBtn: "Telegram",
    youtubeBtn: "YouTube",
    feedbackChannel: "YouTube PK XD PORTAL",
    musicOn: "🔊 Musik",
    musicOff: "🔇 Matikan musik",
    started: "🚀 Zero Gravity dimulai",
    fanCountdown: "Hitung mundur penggemar untuk PK XD",
    disclaimer: "Ini adalah hitung mundur buatan penggemar. PK XD adalah game dari Afterverse. Situs ini bukan situs resmi dan tidak berafiliasi dengan Afterverse.",
    feedbackText: "Untuk peningkatan situs atau penambahan bahasa baru, tulis di sini:",
    downloadTitle: "Unduh / Perbarui PK XD",
    googlePlayBtn: "Google Play",
    appStoreBtn: "App Store",
    languageLabel: "Bahasa",
    downloadLabel: "Unduh",
    shareLabel: "Bagikan",
    countdownMode: "Hitung Mundur",
    progressMode: "Progres",
    progressPassed: "Berlalu",
    progressLeft: "Tersisa",
    progressText: "Progres menuju event",
    shareCopied: "Link disalin!",

    teams: {
      volts: {
        icon: "⚡",
        title: "TEAM VOLTS",
        text: "ENERGI PETIR MURNI!"
      },
      flame: {
        icon: "🔥",
        title: "TEAM FLAME",
        text: "INTENSITAS API!"
      },
      leaf: {
        icon: "🍃",
        title: "TEAM LEAF",
        text: "KEKUATAN ALAM!"
      }
    }
  },

  es: {
    eventDate: "11 JUNIO 2026 • 07:00 MEXICO CITY",
    titleTop: "Hasta",
    titleMain: "Zero Gravity",
    days: "días",
    hours: "horas",
    minutes: "minutos",
    seconds: "segundos",
    credit: "Sitio creado por <b>PK XD PORTAL</b>",
    telegramBtn: "Telegram",
    youtubeBtn: "YouTube",
    feedbackChannel: "YouTube PK XD PORTAL",
    musicOn: "🔊 Música",
    musicOff: "🔇 Apagar música",
    started: "🚀 Zero Gravity comenzó",
    fanCountdown: "Cuenta regresiva hecha por fans para PK XD",
    disclaimer: "Esta es una cuenta regresiva hecha por fans. PK XD es un juego de Afterverse. Este sitio no es oficial y no está afiliado con Afterverse.",
    feedbackText: "Para mejorar el sitio o agregar más idiomas, escribe aquí:",
    downloadTitle: "Descargar / Actualizar PK XD",
    googlePlayBtn: "Google Play",
    appStoreBtn: "App Store",
    languageLabel: "Idioma",
    downloadLabel: "Descargar",
    shareLabel: "Compartir",
    countdownMode: "Cuenta regresiva",
    progressMode: "Progreso",
    progressPassed: "Pasó",
    progressLeft: "Falta",
    progressText: "Progreso hasta el evento",
    shareCopied: "¡Enlace copiado!",

    teams: {
      volts: {
        icon: "⚡",
        title: "TEAM VOLTS",
        text: "¡ENERGÍA PURA DEL RAYO!"
      },
      flame: {
        icon: "🔥",
        title: "TEAM FLAME",
        text: "¡INTENSIDAD DEL FUEGO!"
      },
      leaf: {
        icon: "🍃",
        title: "TEAM LEAF",
        text: "¡FUERZA DE LA NATURALEZA!"
      }
    }
  },

  hi: {
    eventDate: "11 जून 2026 • 18:30 NEW DELHI",
    titleTop: "शुरू होने तक",
    titleMain: "Zero Gravity",
    days: "दिन",
    hours: "घंटे",
    minutes: "मिनट",
    seconds: "सेकंड",
    credit: "<b>PK XD PORTAL</b> द्वारा बनाया गया",
    telegramBtn: "Telegram",
    youtubeBtn: "YouTube",
    feedbackChannel: "PK XD PORTAL YouTube",
    musicOn: "🔊 संगीत",
    musicOff: "🔇 संगीत बंद करें",
    started: "🚀 Zero Gravity शुरू हो गया",
    fanCountdown: "PK XD के लिए फैन काउंटडाउन",
    disclaimer: "यह एक फैन द्वारा बनाया गया काउंटडाउन है। PK XD Afterverse का एक गेम है। यह वेबसाइट आधिकारिक नहीं है और Afterverse से संबद्ध नहीं है।",
    feedbackText: "वेबसाइट सुधार या नई भाषाएँ जोड़ने के लिए यहाँ लिखें:",
    downloadTitle: "PK XD डाउनलोड / अपडेट करें",
    googlePlayBtn: "Google Play",
    appStoreBtn: "App Store",
    languageLabel: "भाषा",
    downloadLabel: "डाउनलोड",
    shareLabel: "शेयर",
    countdownMode: "काउंटडाउन",
    progressMode: "प्रगति",
    progressPassed: "बीता",
    progressLeft: "बाकी",
    progressText: "इवेंट तक प्रगति",
    shareCopied: "लिंक कॉपी हो गया!",

    teams: {
      volts: {
        icon: "⚡",
        title: "TEAM VOLTS",
        text: "शुद्ध बिजली ऊर्जा!"
      },
      flame: {
        icon: "🔥",
        title: "TEAM FLAME",
        text: "आग की तीव्रता!"
      },
      leaf: {
        icon: "🍃",
        title: "TEAM LEAF",
        text: "प्रकृति की शक्ति!"
      }
    }
  }
};

const timer = document.getElementById("timer");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const popup = document.getElementById("teamPopup");
const popupIcon = document.getElementById("popupIcon");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

const langToggle = document.getElementById("langToggle");
const languageMenu = document.getElementById("languageMenu");

const downloadToggle = document.getElementById("downloadToggle");
const downloadMenu = document.getElementById("downloadMenu");

const shareBtn = document.getElementById("shareBtn");

const countdownModeBtn = document.getElementById("countdownModeBtn");
const progressModeBtn = document.getElementById("progressModeBtn");
const progressPanel = document.getElementById("progressPanel");
const progressFill = document.getElementById("progressFill");
const progressPercent = document.getElementById("progressPercent");
const progressText = document.getElementById("progressText");

function updateCountdown() {
  const now = new Date();
  const distance = targetDate.getTime() - now.getTime();

  if (distance <= 0) {
    if (countdownInterval) clearInterval(countdownInterval);

    timer.innerHTML = `
      <div class="started">
        ${translations[currentLang].started}
      </div>
    `;

    updateProgress(0);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");

  updateAtmosphere(days);
  updateProgress(distance);

  if (lastSeconds !== seconds) {
    secondsEl.classList.remove("tick");
    void secondsEl.offsetWidth;
    secondsEl.classList.add("tick");
    lastSeconds = seconds;
  }
}

function updateProgress() {
  const now = new Date().getTime();
  const start = eventStartDate.getTime();
  const end = targetDate.getTime();

  const total = end - start;
  const passed = now - start;

  let percent = Math.round((passed / total) * 100);
  percent = Math.max(0, Math.min(100, percent));

  progressFill.style.width = percent + "%";
  progressPercent.textContent = percent + "%";
  progressText.textContent = translations[currentLang].progressText;
}

function updateAtmosphere(daysLeft) {
  document.body.classList.remove(
    "near-100",
    "near-75",
    "near-50",
    "near-25",
    "near-7",
    "near-1"
  );

  if (daysLeft <= 100) document.body.classList.add("near-100");
  if (daysLeft <= 75) document.body.classList.add("near-75");
  if (daysLeft <= 50) document.body.classList.add("near-50");
  if (daysLeft <= 25) document.body.classList.add("near-25");
  if (daysLeft <= 7) document.body.classList.add("near-7");
  if (daysLeft <= 1) document.body.classList.add("near-1");
}

function setLanguage(lang) {
  currentLang = translations[lang] ? lang : "en";
  localStorage.setItem("selectedLang", currentLang);

  const dict = translations[currentLang];

  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (dict[key]) {
      element.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("#languageMenu .lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });

  musicToggle.innerHTML = isPlaying ? dict.musicOff : dict.musicOn;
  progressText.textContent = dict.progressText;

  languageMenu.classList.remove("open");
  downloadMenu.classList.remove("open");
}

function openPopup(team) {
  const data = translations[currentLang].teams[team];

  if (!data) return;

  popup.className = "team-popup active " + team;
  popup.setAttribute("aria-hidden", "false");

  popupIcon.textContent = data.icon;
  popupTitle.textContent = data.title;
  popupText.textContent = data.text;

  document.body.classList.remove("team-volts", "team-flame", "team-leaf");
  document.body.classList.add("team-" + team);
}

function closeTeamPopup() {
  popup.className = "team-popup";
  popup.setAttribute("aria-hidden", "true");
  document.body.classList.remove("team-volts", "team-flame", "team-leaf");
}

document.querySelectorAll(".team-btn").forEach((button) => {
  button.addEventListener("click", () => {
    openPopup(button.dataset.team);
  });
});

document.querySelectorAll("#languageMenu .lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

closePopup.addEventListener("click", closeTeamPopup);

langToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  languageMenu.classList.toggle("open");
  downloadMenu.classList.remove("open");
});

downloadToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  downloadMenu.classList.toggle("open");
  languageMenu.classList.remove("open");
});

document.addEventListener("click", (event) => {
  const clickedInsidePopup = popup.contains(event.target);
  const clickedTeamButton = event.target.closest(".team-btn");
  const clickedInsideLang = event.target.closest(".language-wrapper");
  const clickedInsideDownload = event.target.closest(".download-wrapper");

  if (
    popup.classList.contains("active") &&
    !clickedInsidePopup &&
    !clickedTeamButton
  ) {
    closeTeamPopup();
  }

  if (!clickedInsideLang) {
    languageMenu.classList.remove("open");
  }

  if (!clickedInsideDownload) {
    downloadMenu.classList.remove("open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeTeamPopup();
    languageMenu.classList.remove("open");
    downloadMenu.classList.remove("open");
  }
});

musicToggle.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    musicToggle.classList.add("active");
    musicToggle.innerHTML = translations[currentLang].musicOff;
    isPlaying = true;
  } else {
    music.pause();
    musicToggle.classList.remove("active");
    musicToggle.innerHTML = translations[currentLang].musicOn;
    isPlaying = false;
  }
});

countdownModeBtn.addEventListener("click", () => {
  timer.classList.remove("hidden");
  progressPanel.classList.remove("active");

  countdownModeBtn.classList.add("active");
  progressModeBtn.classList.remove("active");
});

progressModeBtn.addEventListener("click", () => {
  timer.classList.add("hidden");
  progressPanel.classList.add("active");

  progressModeBtn.classList.add("active");
  countdownModeBtn.classList.remove("active");
});

shareBtn.addEventListener("click", async () => {
  const url = window.location.href;

  try {
    if (navigator.share) {
      await navigator.share({
        title: document.title,
        url: url
      });
    } else {
      await navigator.clipboard.writeText(url);
      alert(translations[currentLang].shareCopied);
    }
  } catch (error) {
    await navigator.clipboard.writeText(url);
    alert(translations[currentLang].shareCopied);
  }
});

const savedLang = localStorage.getItem("selectedLang") || "en";

setLanguage(savedLang);
updateCountdown();

countdownInterval = setInterval(updateCountdown, 1000);
