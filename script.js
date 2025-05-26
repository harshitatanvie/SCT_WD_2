let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;

document.getElementById("start").onclick = () => {
  if (interval) return;
  interval = setInterval(updateTime, 1000);
};

document.getElementById("pause").onclick = () => {
  clearInterval(interval);
  interval = null;
};

document.getElementById("reset").onclick = () => {
  clearInterval(interval);
  interval = null;
  [seconds, minutes, hours] = [0, 0, 0];
  display.innerText = "00:00:00";
  document.getElementById("laps").innerHTML = "";
};

document.getElementById("lap").onclick = () => {
  if (!interval) return;
  const lapItem = document.createElement("li");
  lapItem.textContent = display.innerText;
  document.getElementById("laps").appendChild(lapItem);
};

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');

  display.innerText = `${h}:${m}:${s}`;
}
