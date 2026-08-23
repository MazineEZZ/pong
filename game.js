import { gameSettings, gameState, paddleSettings } from "./global.js";
import { createPaddle } from "./paddle.js";
import { createBall } from "./ball.js";
import {
  centerPaddleY,
  createDOM,
  startPosition,
  centerBall,
} from "./utils.js";
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
  gameState.ball.collisionCheck();

  gameState.ball.move(dt);
  gameState.p1.update(keys, gameSettings.keys.p1, dt);
  gameState.p2.update(keys, gameSettings.keys.p2, dt);
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
  const ball = createBall({
    x: centerBall(),
    y: centerBall(true),
  });

  gameState.p1 = paddle1;
  gameState.p2 = paddle2;
  gameState.ball = ball;

  setUpInput();

  const canvas = gameState.getCanvas();
  const ctx = canvas.getContext("2d");

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    paddle1.draw(ctx);
    paddle2.draw(ctx);
    ball.draw(ctx);
  }

  let lastTime = null;
  function loop(timestamp) {
    if (lastTime === null) lastTime = timestamp;
    // To make the game aligned with all devices
    const delta = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    update(delta);
    draw();

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

export { initGame, gameLoop };
