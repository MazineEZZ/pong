import { gameSettings } from "./global.js";

function createCenterLine() {
  const state = {};
  state.radius = 5;
  state.width = gameSettings.centerLineWidth;
  state.height = gameSettings.size.height - gameSettings.barrierHeight * 2 - 10;
  state.x = gameSettings.size.width / 2 - state.width / 2;
  state.y = 20;
  state.color = gameSettings.barrierColor;

  function draw(ctx) {
    ctx.fillStyle = state.color;
    ctx.beginPath();

    ctx.roundRect(state.x, state.y, state.width, state.height, state.radius);

    ctx.fill();
  }

  return { state, draw };
}

export { createCenterLine };
