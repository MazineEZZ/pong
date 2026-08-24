import { gameSettings, gameState, paddleSettings } from "./global.js";
import { createPaddle } from "./paddle.js";
import { createBall } from "./ball.js";
import { createBarrier } from "./barrier.js";
import { createCenterLine } from "./centerLine.js";
import {
  centerPaddleY,
  createDOM,
  startPosition,
  centerBall,
} from "./utils.js";
import { renderScore } from "./score.js";
import { setUpInput, keys } from "./signals.js";
import { renderMessage } from "./message.js";

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
  document.body.replaceChildren();
  const gameContainer = renderGame();

  const scoreP1 = renderScore("p1", true);
  const scoreP2 = renderScore("p2", false);

  gameContainer.appendChild(scoreP1);
  gameContainer.appendChild(scoreP2);

  document.body.appendChild(gameContainer);
}

function update(dt) {
  gameState.ball.collisionCheck();

  if (keys[" "] && !gameState.started) {
    gameState.ball.start(-1, 0);
    gameState.started = true;
  }

  gameState.ball.update(dt);
  gameState.p1.update(keys, gameSettings.keys.p1, dt);
  gameState.p2.update(keys, gameSettings.keys.p2, dt);
  updateScore();
  isGameOver();
}

function showMessage(message) {
  const gameContainer = document.getElementById("game-container");
  const msgBox = renderMessage(message);
  gameContainer.appendChild(msgBox);
}

function resetGame() {
  initGame();
  gameLoop();
}

function isGameOver() {
  if (gameState.scoreP1 >= 1) {
    gameState.isGameOver = true;
    showMessage("Right Side player won!");
    setTimeout(() => {
      resetGame();
    }, 1000);
  }
  if (gameState.scoreP2 >= 5) {
    gameState.isGameOver = true;
    showMessage("Left Side player won");
    setTimeout(() => {
      resetGame();
    }, 1000);
  }
}

function updateScore() {
  const scoreP1 = document.getElementById("p1");
  const scoreP2 = document.getElementById("p2");

  scoreP1.textContent = gameState.scoreP1;
  scoreP2.textContent = gameState.scoreP2;
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
  const barrier1 = createBarrier({
    y: gameSettings.barrierYOffset,
  });
  const barrier2 = createBarrier({
    y:
      gameSettings.size.height -
      gameSettings.barrierHeight -
      gameSettings.barrierYOffset,
  });
  const centerLine = createCenterLine();

  gameState.p1 = paddle1;
  gameState.p2 = paddle2;
  gameState.b1 = barrier1;
  gameState.b2 = barrier2;
  gameState.ball = ball;

  gameState.scoreP1 = 0;
  gameState.scoreP2 = 0;
  gameState.started = false;
  gameState.isGameOver = false;

  setUpInput();

  const canvas = gameState.getCanvas();
  const ctx = canvas.getContext("2d");

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    paddle1.draw(ctx);
    paddle2.draw(ctx);
    barrier1.draw(ctx);
    barrier2.draw(ctx);
    ball.draw(ctx);
    centerLine.draw(ctx);
  }

  let lastTime = null;
  function loop(timestamp) {
    if (lastTime === null) lastTime = timestamp;
    // To make the game aligned with all devices
    const delta = (timestamp - lastTime) / 1000;

    console.log(delta);
    lastTime = timestamp;

    if (!gameState.isGameOver) {
      update(delta);
      draw();
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

export { initGame, gameLoop };
