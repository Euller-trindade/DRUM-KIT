"use strict";

const sons = {
  A: "teemo_4.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "Bass1.mp3",
  G: "kick.wav",
  H: "ride.wav",
  J: "snare.wav",
  K: "tink.wav",
  L: "tom.wav",
};

const criarDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
  const audio = new Audio(`./sounds/${sons[letra]}`);
  audio.play();
};

const adicionarEfeito = (letra) =>
  document.getElementById(letra).classList.add("active");
const removeEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removeActive = () => div.classList.remove("active");
  div.addEventListener("transitionend", removeActive);
};

const ativarDiv = (evento) => {
  let letra = "";
  if (evento.type == "click") {
    letra = evento.target.id;
  } else {
    letra = evento.key.toUpperCase();
  }

  const letraPermitida = sons.hasOwnProperty(letra);
  if (letraPermitida) {
    adicionarEfeito(letra);
    tocarSom(letra);
    removeEfeito(letra);
  }
};

exibir(sons);
document.getElementById("container").addEventListener("click", ativarDiv);

window.addEventListener("keyup", ativarDiv);
