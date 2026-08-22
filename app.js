import { renderGame } from "./render.js";

function initGame() {
  const gameContainer = renderGame();

  document.body.appendChild(gameContainer);
}

export { initGame };
