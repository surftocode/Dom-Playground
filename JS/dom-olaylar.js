let eventCounter = document.getElementById("count-event");
let singleClickBtn = document.getElementById("btn-click");
let doubleClickBtn = document.getElementById("btn-dblClick");
let rightClickBtn = document.getElementById("btn-rightClick");
let toplamTiklama = document.querySelector("#count");
let logList = document.getElementById("log-list");
let xCoord = document.getElementById("coord-x");
let yCoord = document.getElementById("coord-y");
let mousebox = document.querySelector(".mouse-box");
let colors = document.getElementById("colors");
let range = document.getElementById("speed-range");
let checkbox = document.getElementById("checkbox");
let rangeSpan = document.getElementById("range-span");
let draggableItems = document.querySelectorAll(".drag-item");
let dragZones = document.querySelectorAll(".drag-zone");

let tiklama = 0;
let events = 0;

//CLİCK EVENTS
function singleClicked(e) {
  tiklama++;
  events++;
  toplamTiklama.innerHTML = tiklama;
  eventCounter.innerHTML = events;
  const item = document.createElement("div");
  item.textContent = "Tek tıklandı!";
  logList.append(item);

  return;
}

function doubleClicked(e) {
  tiklama++;
  events++;
  toplamTiklama.innerHTML = tiklama;
  eventCounter.innerHTML = events;
  const item2 = document.createElement("div");
  item2.textContent = "Çift tıklandı!";
  logList.append(item2);
  return;
}

function rightClicked(e) {
  e.preventDefault();
  tiklama++;
  events++;
  toplamTiklama.innerHTML = tiklama;
  eventCounter.innerHTML = events;
  const item3 = document.createElement("div");
  item3.textContent = "Sağ tıklandı!";
  logList.append(item3);
  return;
}

singleClickBtn.addEventListener("click", singleClicked);
doubleClickBtn.addEventListener("dblclick", doubleClicked);
rightClickBtn.addEventListener("contextmenu", rightClicked);

//INPUT EVENTS
let input = document.getElementById("keyboard-input");

function inputMoves(e) {
  events++;
  eventCounter.innerHTML = events;
  const item = document.createElement("div");
  item.textContent = `${e.key} tıklandı!`;
  logList.prepend(item);
  return;
}

function inputFocus(e) {
  events++;
  eventCounter.innerHTML = events;
  const item = document.createElement("div");
  item.textContent = "Inputa odaklanıldı!";
  logList.prepend(item);
  return;
}

function inputBlur(e) {
  events++;
  eventCounter.innerHTML = events;
  const item = document.createElement("div");
  item.textContent = "Input odağından çıkıldı!";
  logList.prepend(item);
  return;
}
input.addEventListener("keydown", inputMoves);
input.addEventListener("focus", inputFocus);
input.addEventListener("blur", inputBlur);

//MOUSE EVENTS
function moveMouse(e) {
  // events++;
  // eventCounter.innerHTML=events;
  const item = document.createElement("div");
  logList.prepend(item);
  xCoord.innerHTML = e.clientX;
  yCoord.innerHTML = e.clientY;
  return;
}

function enterMouse(e) {
  events++;
  eventCounter.innerHTML = events;
  const item = document.createElement("div");
  item.textContent = "Mouse kutuya girdi!";
  logList.prepend(item);
  return;
}

function leaveMouse(e) {
  events++;
  eventCounter.innerHTML = events;
  const item = document.createElement("div");
  item.textContent = "Mouse kutudan çıktı!";
  logList.prepend(item);
  return;
}

function clickMouse(e) {
  events++;
  eventCounter.innerHTML = events;
  const item = document.createElement("div");
  item.textContent = "Tıklandı!";
  logList.prepend(item);
  return;
}

mousebox.addEventListener("mousemove", moveMouse);
mousebox.addEventListener("mouseenter", enterMouse);
mousebox.addEventListener("mouseleave", leaveMouse);
mousebox.addEventListener("click", clickMouse);

//FORM EVENTS
function selectColor(e) {
  events++;
  eventCounter.innerHTML = events;
  const item = document.createElement("div");
  item.textContent = `${e.target.value} rengi seçildi!`;
  logList.prepend(item);
  return;
}

function seeRange(e) {
  events++;
  eventCounter.innerHTML = events;
  const item = document.createElement("div");
  item.textContent = `${e.target.value} range değeri girildi!`;
  logList.prepend(item);
  rangeSpan.innerHTML = e.target.value;
  return;
}

function checkBox(e) {
  events++;
  eventCounter.innerHTML = events;
  const item = document.createElement("div");
  if (e.target.checked) {
    item.textContent = "congs! You checked the box 🎉";
  } else {
    item.textContent = "oops! You unchecked the box 🎈";
  }
  logList.prepend(item);
}

colors.addEventListener("change", selectColor);
range.addEventListener("input", seeRange);
checkbox.addEventListener("click", checkBox);

//DRAG-DROP
function dragIt(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

function dragOverIt(e) {
  e.preventDefault();
}

function dropped(e) {
  events++;
  eventCounter.innerHTML = events;
  const id = e.dataTransfer.getData("text/plain");
  const element = document.getElementById(id);
  e.currentTarget.appendChild(element);
  const item = document.createElement("div");
  item.textContent = "yayyy!You drop and drag it";
  logList.prepend(item);
}

draggableItems.forEach((item) => {
  item.addEventListener("dragstart", dragIt);
});
dragZones.forEach((dragZone) => {
  dragZone.addEventListener("dragover", dragOverIt);
});

dragZones.forEach((dragZone) => {
  dragZone.addEventListener("drop", dropped);
});

let scroll = document.getElementById("scroll");
let scrollSpan = document.querySelector(".scroll-span");

function scrollElem(e) {
  events++;
  eventCounter.innerHTML = events;
  scrollSpan.innerHTML = e.target.scrollTop;
  const item = document.createElement("div");
  item.textContent = `${e.target.scrollTop}px kadar kaydırıldı!`;
  logList.prepend(item);
  console.log(e.target)
}

scroll.addEventListener("scroll", scrollElem);
