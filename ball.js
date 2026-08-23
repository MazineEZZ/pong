import { ballSettings, gameState } from "./global.js";

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
  state.direction = -1;

  function draw(ctx) {
    ctx.fillStyle = state.color;
    ctx.beginPath();

    ctx.roundRect(state.x, state.y, state.width, state.height, state.radius);

    ctx.fill();
  }

  function move(delta) {
    state.x += state.speed * delta * state.direction;
  }

  function collision() {
    if (
      state.x + state.width - gameState.p2.state.x - gameState.p2.state.width <
      0
    ) {
      state.direction = 1;
    }

    if (
      state.x + state.width - gameState.p1.state.x - gameState.p1.state.width >
      0
    ) {
      state.direction = -1;
    }

    console.log(
      gameState.p2.state.y < state.y &&
        state.y < gameState.p2.state.y + gameState.p2.state.height,
    );
  }

  return { state, draw, move, collision };
}

export { createBall };
