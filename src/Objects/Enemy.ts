import * as Assets from '../assets';


export default class Player extends Phaser.Sprite {
    private speed = 3;
    private FrameSpeed = 4;
    health = 100;
    constructor(game: Phaser.Game) {
        super(game, game.rnd.integerInRange(100, 300), game.rnd.integerInRange(50, 200), Assets.Spritesheets.SpritesheetsPlayer161622.getName(), 0);
        game.add.existing(this);
    }


    update() {
    }
}