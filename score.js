import { gameSettings } from "./global.js";
import { createDOM } from "./utils.js";

function renderScore(id, isRight) {
  const scoreContainer = createDOM({ kind: "p", id: id, text: "0" });

  const fontSize = 60;
  const offset = isRight ? 50 : -20;
  scoreContainer.style.fontSize = fontSize + "px";
  scoreContainer.style.top = "-25px";
  scoreContainer.style.left =
    gameSettings.size.width / 2 - fontSize / 2 + offset + "px";

  return scoreContainer;
}

export { renderScore };
