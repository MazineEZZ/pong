const gameSettings = {
  size: {
    width: 800,
    height: 550,
  },
  bgColor: "#000",
};

const paddleSettings = {
  size: {
    width: 40,
    height: 80,
  },
  speed: 200,
  color: "white",
};

const gameState = {
  getCanvas() {
    return document.getElementById("main-canvas");
  },
};

export { gameSettings, gameState, paddleSettings };
