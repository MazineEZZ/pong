import { paddleSettings, gameSettings, ballSettings } from "./global.js";

function createDOM({
  kind = "div",
  type = "",
  id = "",
  classArr = [],
  text = "",
  alt = "",
  src = "",
  same = false,
  // CSS
  width = "",
  height = "",
  bgColor = "",
} = {}) {
  const element = document.createElement(kind);

  if (id) element.id = id;
  if (same && id) element.classList.add(id);
  if (type) element.type = type;
  if (alt) element.alt = alt;
  if (src) element.src = src;
  if (text) element.textContent = text;
  classArr.forEach((cls) => element.classList.add(cls));

  // CSS
  if (width) element.style.width = width + "px";
  if (height) element.style.height = height + "px";
  if (bgColor) element.style.backgroundColor = bgColor;

  return element;
}

function centerPaddleY() {
  return gameSettings.size.height / 2 - paddleSettings.size.height / 2;
}

function startPosition(start, isLeft) {
  return isLeft
    ? start
    : gameSettings.size.width - paddleSettings.size.width - start;
}

function centerBall(isYAxis = false) {
  if (isYAxis)
    return gameSettings.size.height / 2 - ballSettings.size.height / 2;
  return gameSettings.size.width / 2 - ballSettings.size.height / 2;
}

function toDegree(degree) {
  return (degree * 180) / Math.PI;
}

export { createDOM, centerPaddleY, startPosition, centerBall, toDegree };
