const timer = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    updateSeconds: function () {
      timer.seconds >= 59
        ? timer.minutes >= 59
          ? (timer.hours++, (timer.minutes = 0), (timer.seconds = 0))
          : (timer.minutes++, (timer.seconds = 0))
        : timer.seconds++;
      return timer.seconds;
    },
  };
  const timeDisplayer = document.querySelector(".time-displayer");
  let timerID;
  function playOrPause(button) {
    if (button.textContent.trim() === "play_arrow") {
      button.textContent = "pause";
      timerID = setInterval(() => {
        timeDisplayer.children[2].textContent =
          timer.updateSeconds() < 10 ? "0" + timer.seconds : timer.seconds;
        timeDisplayer.children[1].textContent =
          timer.minutes < 10 ? "0" + timer.minutes : timer.minutes;
        timeDisplayer.children[0].textContent =
          timer.hours < 10 ? "0" + timer.hours : timer.hours;
      }, 1000);
    } else {
      button.textContent = "play_arrow";
      clearInterval(timerID);
    }
  }
  function stop() {
    if (timerID) {
      clearInterval(timerID);
    }
    document.querySelector(".controls button").textContent = "play_arrow";
    timer.seconds = 0;
    timer.minutes = 0;
    timeDisplayer.children[0].textContent = "00";
    timeDisplayer.children[1].textContent = "00";
    timeDisplayer.children[2].textContent = "00";
  }