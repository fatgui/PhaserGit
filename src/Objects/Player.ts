import * as Assets from '../assets';
import Bullet  from './Bullet';

export default class Player extends Phaser.Sprite  {
    private speed = 2;
    private bullets;
    private bulletDelay = 200;
    private FrameSpeed = 5;
    health = 400;

    private direction = 'down';
    private lastBulletShotAt = 0;

    private shootButtonPressed = 0;

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, Assets.Spritesheets.SpritesheetsPlayer161622.getName(), 0);
        this.anchor.setTo(0.5, 0);
        this.animations.add('idleBack', [0, 1, 2, 3], this.FrameSpeed , true);
        this.animations.add('idleFront', [4, 5, 6, 7], this.FrameSpeed , true);
        this.animations.add('walkBack', [8, 9, 10, 11], this.FrameSpeed , true);
        this.animations.add('walkFront', [12, 13, 14, 15], this.FrameSpeed , true);
        this.animations.add('walkSide', [16, 17, 18, 19], this.FrameSpeed , true);
        this.animations.add('idleSide', [20, 21, 22, 23], this.FrameSpeed, true);
        game.add.existing(this);

        this.animations.play('idleFront');

        this.bullets = game.add.group();
    }

    update() {


        // Player Movement
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {

            this.x -= this.speed / 2;
            this.animations.play('walkSide');
            if (this.scale.x === 1) {
                this.scale.x = -1;
            }

            this.direction = 'left';

        } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {

            this.x += this.speed / 2;
            this.animations.play('walkSide');
            if (this.scale.x === -1) {
                this.scale.x = 1;
            }
            this.direction = 'right';

        } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
            this.y -= this.speed;
            this.animations.play('walkBack');

            this.direction = 'up';

         } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
            this.y += this.speed;
            this.animations.play('walkFront');

            this.direction = 'down';
        } else {
            this.staticDirection();
        }
        // Shot
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            this.shoot();
        }


    }

    shoot() {
       if (this.shootButtonPressed < 300) {
          this.shootButtonPressed += 8;
        return;
       }
        this.shootButtonPressed = 0;
        this.bullets.add(new Bullet(this.game, this.x, this.y, this.direction));
    }


    staticDirection() {
        switch (this.direction) {
            case 'down' : this.animations.play('idleFront'); break;
            case 'up' : this.animations.play('idleBack'); break;
            case 'left' :  this.animations.play('idleSide'); break;
            case 'right' :  this.animations.play('idleSide'); break;
        }
    }
}
