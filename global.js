const gameSettings = {
  size: {
    width: 800,
    height: 550,
  },
  barrierHeight: 15,
  barrierXOffset: 80,
  barrierYOffset: 20,
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
  speed: 340,
  radius: 5,
  color: "#fff",
};

const ballSettings = {
  size: {
    width: 20,
    height: 20,
  },
  speed: 400,
  radius: 20,
  color: "#fff",
};

const gameState = {
  getCanvas() {
    return document.getElementById("main-canvas");
  },
};

export { gameSettings, gameState, paddleSettings, ballSettings };
