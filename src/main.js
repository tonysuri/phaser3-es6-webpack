//=================================================================================================//
import 'phaser';
import BootScene from './Scene/BootScene';
import PreloaderScene from './Scene/PreloaderScene';
import TitleScene from './Scene/TitleScene';
import config from './config';
//=================================================================================================//


//=================================================================================================//
var game;

function resize() {
  var canvas = document.getElementById('game');
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var windowRatio = windowWidth / windowHeight;
  var gameRatio = game.config.width / game.config.height;
  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + 'px';
    canvas.style.height = (windowWidth / gameRatio) + 'px';
  }
  else {
    canvas.style.width = (windowHeight * gameRatio) + 'px';
    canvas.style.height = windowHeight + 'px';
  }
}

window.onload = function() {
  game = new Phaser.Game({
    type: Phaser.AUTO,
    canvas: document.getElementById('game'),
    width: config.GAME_WIDTH,
    height: config.GAME_HEIGHT,
    scene: [
      BootScene,
      PreloaderScene,
      TitleScene,
    ],
  });

  resize();
  window.addEventListener('resize', resize, false);
}
//=================================================================================================//
