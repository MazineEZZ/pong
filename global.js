const gameSettings = {
  size: {
    width: 1000, // 800
    height: 600, // 550
  },
  barrierHeight: 15,
  barrierXOffset: 80,
  barrierYOffset: 20,
  centerLineWidth: 5,
  bgColor: "#000",
  barrierColor: "#fff",
  keys: {
    p1: {
      up: "o",
      down: "l",
    },
    p2: {
      up: "z",
      down: "s",
    },
  },
};

const paddleSettings = {
  size: {
    width: 20,
    height: 80,
  },
  speed: 450,
  radius: 5,
  color: "#fff",
};

const ballSettings = {
  size: {
    width: 20,
    height: 20,
  },
  speed: 600,
  radius: 20,
  waitTime: 1000,
  color: "yellow",
};

const gameState = {
  getCanvas() {
    return document.getElementById("main-canvas");
  },
};

export { gameSettings, gameState, paddleSettings, ballSettings };
