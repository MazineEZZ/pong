import { gameSettings, gameState, paddleSettings } from "./global.js";
import { createPaddle } from "./paddle.js";
import { centerPaddleY, createDOM, startPosition } from "./utils.js";
import { setUpInput, keys } from "./signals.js";

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

function update(dt) {
  const speed = paddleSettings.speed * dt;

  if (keys["ArrowUp"]) {
    gameState.p1.state.y -= speed;
  }
  if (keys["ArrowDown"]) {
    gameState.p1.state.y += speed;
  }
  if (keys["z"]) {
    gameState.p2.state.y -= speed;
  }
  if (keys["s"]) {
    gameState.p2.state.y += speed;
  }
}

function gameLoop() {
  const paddle1 = createPaddle({
    x: startPosition(10),
    y: centerPaddleY(),
  });
  const paddle2 = createPaddle({
    x: startPosition(10, true),
    y: centerPaddleY(),
  });

  gameState.p1 = paddle1;
  gameState.p2 = paddle2;

  setUpInput();

  const canvas = gameState.getCanvas();
  const ctx = canvas.getContext("2d");

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    paddle1.draw(ctx);
    paddle2.draw(ctx);
  }

  let lastTime = 0;
  function loop(timestamp) {
    // To make the game aligned with all devices
    const delta = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    draw();
    update(delta);

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

export { initGame, gameLoop };
