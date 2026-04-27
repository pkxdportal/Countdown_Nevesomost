// ========================================
// COUNTDOWN
// 11 июня 2026 — 16:00 МСК = 13:00 UTC
// ========================================

const targetDate = new Date("2026-06-11T13:00:00Z");

const timer = document.getElementById("timer");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

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
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();

const countdownInterval = setInterval(updateCountdown, 1000);

// ========================================
// TEAM POPUP
// ========================================

const teamData = {
  volts: {
    title: "⚡ TEAM VOLTS",
    text: "ЧИСТАЯ ЭНЕРГИЯ МОЛНИИ! Я полон радости и энергии!"
  },

  flame: {
    title: "🔥 TEAM FLAME",
    text: "ИНТЕНСИВНОСТЬ ПЛАМЕНИ! Я тёплый и яростный!"
  },

  leaf: {
    title: "🍃 TEAM LEAF",
    text: "СИЛА ВНУТРИ КАЖДОГО ЛИСТА! Я праведный и сильный, как природа!"
  }
};

const popup = document.getElementById("teamPopup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

function openPopup(team) {
  const data = teamData[team];

  if (!data) return;

  popup.className = "team-popup active " + team;
  popup.setAttribute("aria-hidden", "false");

  popupTitle.textContent = data.title;
  popupText.textContent = data.text;
}

function closeTeamPopup() {
  popup.className = "team-popup";
  popup.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".team-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const team = button.dataset.team;
    openPopup(team);
  });
});

closePopup.addEventListener("click", closeTeamPopup);

// закрытие по клику вне popup
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

// закрытие ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeTeamPopup();
  }
});
