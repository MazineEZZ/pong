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

  let collisions = [];
  function collisionCheck() {
    if (
      gameState.p2.state.y < state.y &&
      state.y < gameState.p2.state.y + gameState.p2.state.height &&
      gameState.p2.state.x < state.x &&
      state.x < gameState.p2.state.x + gameState.p2.state.width
    ) {
      state.direction = 1;
      collisions.push(gameState.p2.state.x + " " + gameState.p2.state.y);
    }

    if (
      gameState.p1.state.y < state.y &&
      state.y < gameState.p1.state.y + gameState.p1.state.height &&
      gameState.p1.state.x < state.x &&
      state.x < gameState.p1.state.x + gameState.p1.state.width
    ) {
      state.direction = -1;
    }
    console.log(collisions[0]);
  }

  return { state, draw, move, collisionCheck };
}

export { createBall };
