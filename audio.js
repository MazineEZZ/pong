function createAudio() {
  const music = new Audio("assets/music.wav");
  music.loop = true;
  music.volume = 0;

  const hit = new Audio("assets/hit.wav");
  const wall = new Audio("assets/wall.wav");
  const win = new Audio("assets/win.wav");

  function playHit() {
    hit.volume = 0.4;
    hit.play();
  }

  function playWall() {
    wall.volume = 0.4;
    wall.play();
  }

  function playWin() {
    win.volume = 0.4;
    win.play();
  }

  return { music, playHit, playWall, playWin };
}

export { createAudio };
