import { ballSettings, gameSettings, gameState } from "./global.js";

function createBall({
  x,
  y,
  width = ballSettings.size.width,
  height = ballSettings.size.height,
  radius = ballSettings.radius,
  color = ballSettings.color,
  speed = ballSettings.speed,
}) {
  const state = { x, y, width, height, color, radius, speed };
  state.direction = 0;
  state.vy = 0;
  state.vx = -state.speed * state.direction;

  function draw(ctx) {
    ctx.fillStyle = state.color;
    ctx.beginPath();

    ctx.roundRect(state.x, state.y, state.width, state.height, state.radius);

    ctx.fill();
  }

  function inCollision(a, b) {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }

  function calcDeviation(paddle) {
    const paddleCenterY = paddle.y + paddle.height / 2;
    const ballCenterY = state.y + state.height / 2;
    const value = (ballCenterY - paddleCenterY) / (paddle.height / 2); // -1 to +1 range
    return Math.max(-1, Math.min(1, value)); // Incase the deviation gets out of range
  }

  function bounce({ obj, dir = state.direction, isBarrier = false }) {
    const deviation = calcDeviation(obj);
    let maxAngle = isBarrier ? Math.PI / 6 : Math.PI / 3;
    const angle = deviation * maxAngle;
    state.direction = dir;
    state.vx = state.direction * state.speed * Math.cos(angle);
    state.vy = state.speed * Math.sin(angle);
  }

  function start(direction, angle) {
    state.direction = direction;
    state.vx = state.direction * state.speed * Math.cos(angle);
    state.vy = state.speed * Math.sin(angle);
  }

  function collisionCheck() {
    if (inCollision(state, gameState.p2.state)) {
      bounce({ obj: gameState.p2.state, dir: 1 });
    }
    if (inCollision(state, gameState.p1.state)) {
      bounce({ obj: gameState.p1.state, dir: -1 });
    }
    if (inCollision(state, gameState.b1.state)) {
      bounce({ obj: gameState.b1.state, isBarrier: true });
    }
    if (inCollision(state, gameState.b2.state)) {
      bounce({ obj: gameState.b2.state, isBarrier: true });
    }
  }

  function update(delta) {
    state.x += state.vx * delta;
    state.y += state.vy * delta;
    isLeft();
  }

  function isLeft() {
    if (state.x <= 0 || state.x >= gameSettings.size.width) {
      state.x = gameSettings.size.width / 2 - state.width / 2;
      state.y = gameSettings.size.height / 2 - state.height / 2;
      state.vx = 0;
      state.vy = 0;
      setTimeout(() => {
        state.vx = state.speed * state.direction;
      }, 800);
    }
  }

  return { state, draw, update, collisionCheck, start };
}

export { createBall };
