import { gameSettings } from "./global.js";

function createBarrier({ y, color = gameSettings.barrierColor }) {
  const state = { y, color };
  state.radius = 5;
  state.width = gameSettings.size.width - 80;
  state.height = gameSettings.barrierHeight;
  state.x = gameSettings.size.width / 2 - state.width / 2;

  function draw(ctx) {
    ctx.fillStyle = state.color;
    ctx.beginPath();

    ctx.roundRect(state.x, state.y, state.width, state.height, state.radius);

    ctx.fill();
  }

  return { state, draw };
}

export { createBarrier };
