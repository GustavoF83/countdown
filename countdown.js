const getRemainingTime = (deadline) => {
  const now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
    remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainTime,
  };
};

const countdown = (deadline, elem, finalMessage) => {
  const countdownLabel = document.getElementById(elem);

  const timerUpdate = setInterval(() => {
    const remainTimeValues = getRemainingTime(deadline);
    const {
      remainDays,
      remainHours,
      remainMinutes,
      remainSeconds,
      remainTime,
    } = remainTimeValues;
    countdownLabel.innerHTML = `${remainDays}d:${remainHours}h:${remainMinutes}m:${remainSeconds}s`;

    if (remainTime <= 1) {
      clearInterval(timerUpdate);
      countdownLabel.innerHTML = finalMessage;
    }
  }, 1000);
};

const convertir = () => {
  const fechaPura = document.getElementsByName("texto")[0].value;
  if (fechaPura) {
    countdown(fechaPura, "clock", "¡EL CONTEO HA FINALIZADO!");
  } else {
    alert("No has introducido ninguna fecha");
  }
};
