import { gameSettings } from "./global.js";
import { createDOM } from "./utils.js";

function renderMessage(message) {
  const msgContainer = createDOM({ kind: "p", text: message });

  const fontSize = 60;
  msgContainer.style.fontSize = fontSize + "px";
  msgContainer.style.top = gameSettings.size.height / 3 + "px";
  msgContainer.style.left = gameSettings.size.width / 5 + "px";
  msgContainer.style.textAlign = "center";
  msgContainer.style.color = "red";

  return msgContainer;
}

export { renderMessage };
