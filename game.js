import { gameSettings, gameState } from "./global.js";
import { createPaddle } from "./paddle.js";
import { createDOM } from "./utils.js";

function renderGame() {
  const gameContainer = createDOM({
    id: "game-container",
    same: true,
    width: gameSettings.size.width,
    height: gameSettings.size.height,
    bgColor: gameSettings.bgColor,
  });

  const canvas = createDOM({
    kind: "canvas",
    id: "main-canvas",
  });
  canvas.width = gameSettings.size.width;
  canvas.height = gameSettings.size.height;

  gameContainer.appendChild(canvas);

  return gameContainer;
}

function initGame() {
  const gameContainer = renderGame();

  document.body.appendChild(gameContainer);
}

function gameLoop() {
  initGame();

  const paddle1 = createPaddle({
    x: 10,
    y: gameSettings.size.height / 2 - 80 / 2,
  });
  const paddle2 = createPaddle({
    x: gameSettings.size.width - 50,
    y: gameSettings.size.height / 2 - 80 / 2,
  });

  const canvas = gameState.getCanvas();
  const ctx = canvas.getContext("2d");

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    paddle1.draw(ctx);
    paddle2.draw(ctx);
  }

  draw();
}

export { gameLoop };
