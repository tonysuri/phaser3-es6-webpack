export default class TitleScene extends Phaser.Scene {
//=================================================================================================//
constructor(test) {
  super({key:'TitleScene'});
}

create() {
  this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'logo');
  this.cameras.main.fadeIn(200);
}
//=================================================================================================//
}
