// 11 июня 2026, 16:00 МСК = 13:00 UTC
const targetDate = new Date("2026-06-11T13:00:00Z");

function updateCountdown() {
  const now = new Date();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("timer").innerHTML = `
      <div class="started">🚀 Невесомость началась</div>
    `;
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

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

document.querySelectorAll(".team-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const team = button.dataset.team;

    popup.className = "team-popup active " + team;
    popupTitle.textContent = teamData[team].title;
    popupText.textContent = teamData[team].text;
  });
});

closePopup.addEventListener("click", () => {
  popup.className = "team-popup";
});
