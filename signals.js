import { gameState } from "./global.js";

let keys = {};

function setUpInput() {
  document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
  });
  document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
  });
}

export { setUpInput, keys };
