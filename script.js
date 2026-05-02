const targetDate = new Date("2026-06-11T13:00:00Z");

const timer = document.getElementById("timer");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let lastSeconds = null;

function updateCountdown() {
  const now = new Date();
  const distance = targetDate.getTime() - now.getTime();

  if (distance <= 0) {
    clearInterval(countdownInterval);

    timer.innerHTML = `
      <div class="started">
        🚀 Невесомость началась
      </div>
    `;

    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  updateAtmosphere(days);
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");

  if (lastSeconds !== seconds) {
    secondsEl.classList.remove("tick");
    void secondsEl.offsetWidth;
    secondsEl.classList.add("tick");
    lastSeconds = seconds;
  }
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

const teamData = {
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
};

const popup = document.getElementById("teamPopup");
const popupIcon = document.getElementById("popupIcon");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");
const teamGlow = document.getElementById("teamGlow");

function openPopup(team) {
  const data = teamData[team];

  if (!data) return;

  popup.className = "team-popup active " + team;
  popup.setAttribute("aria-hidden", "false");

  popupIcon.textContent = data.icon;
  popupTitle.textContent = data.title;
  popupText.textContent = data.text;

  document.body.className = "team-" + team;
}

function closeTeamPopup() {
  popup.className = "team-popup";
  popup.setAttribute("aria-hidden", "true");
  document.body.className = "";
}

document.querySelectorAll(".team-btn").forEach((button) => {
  button.addEventListener("click", () => {
    openPopup(button.dataset.team);
  });
});

closePopup.addEventListener("click", closeTeamPopup);

document.addEventListener("click", (event) => {
  const clickedInsidePopup = popup.contains(event.target);
  const clickedButton = event.target.closest(".team-btn");

  if (
    popup.classList.contains("active") &&
    !clickedInsidePopup &&
    !clickedButton
  ) {
    closeTeamPopup();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeTeamPopup();
  }
});

// =======================
// MUSIC PLAYER
// =======================

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    musicToggle.classList.add("active");
    musicToggle.textContent = "🔇 Выключить музыку";
    isPlaying = true;
  } else {
    music.pause();
    musicToggle.classList.remove("active");
    musicToggle.textContent = "🔊 Музыка Невесомости";
    isPlaying = false;
  }
});

// =======================
// EVENT ATMOSPHERE
// =======================

function updateAtmosphere(daysLeft) {
  const hero = document.querySelector(".hero");
  const particles = document.querySelector(".particles");

  if (!hero || !particles) return;

  if (daysLeft <= 100) {
    hero.style.boxShadow = `
      0 0 110px rgba(0,120,255,0.30),
      0 0 140px rgba(238,107,243,0.22),
      inset 0 0 60px rgba(255,255,255,0.05)
    `;
  }

  if (daysLeft <= 30) {
    particles.style.opacity = "0.65";
    hero.style.transform = "scale(1.005)";
  }

  if (daysLeft <= 7) {
    hero.style.animation = "heroPulse 3s ease-in-out infinite";
  }

  if (daysLeft <= 1) {
    hero.style.animation = "heroPulseFast 1.8s ease-in-out infinite";
  }
}
