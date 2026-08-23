const gameSettings = {
  size: {
    width: 800,
    height: 550,
  },
  bgColor: "#000",
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
  color: "white",
};

const ballSettings = {
  size: {
    width: 20,
    height: 20,
  },
  speed: 400,
  radius: 20,
  color: "white",
};

const gameState = {
  getCanvas() {
    return document.getElementById("main-canvas");
  },
};

export { gameSettings, gameState, paddleSettings, ballSettings };
