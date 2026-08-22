import { createDOM } from "./utils.js";
import { gameState, paddleSettings } from "./global.js";

function createPaddle({
  x,
  y,
  width = paddleSettings.size.width,
  height = paddleSettings.size.height,
  color = paddleSettings.color,
}) {
  const speed = paddleSettings.speed;
  const state = { x, y, width, height, speed, color };

  function draw(ctx) {
    ctx.fillStyle = state.color;
    ctx.fillRect(state.x, state.y, state.width, state.height);
  }

  return { state, draw };
}

export { createPaddle };
