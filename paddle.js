import { gameSettings, gameState, paddleSettings } from "./global.js";

function createPaddle({
  x,
  y,
  width = paddleSettings.size.width,
  height = paddleSettings.size.height,
  radius = paddleSettings.radius,
  color = paddleSettings.color,
  speed = paddleSettings.speed,
}) {
  const state = { x, y, width, height, color, radius, speed };

  function draw(ctx) {
    ctx.fillStyle = state.color;
    ctx.beginPath();

    ctx.roundRect(state.x, state.y, state.width, state.height, state.radius);

    ctx.fill();
  }

  function adjustBounds() {
    const buffer = 10;
    if (state.y <= buffer) {
      state.y = buffer;
    } else if (state.y >= gameSettings.size.height - state.height - buffer) {
      state.y = gameSettings.size.height - state.height - buffer;
    }
  }

  function update(keys, config, delta) {
    if (keys[config.up]) {
      state.y -= state.speed * delta;
    }
    if (keys[config.down]) {
      state.y += state.speed * delta;
    }
    adjustBounds();
  }

  return { state, draw, update };
}

export { createPaddle };
