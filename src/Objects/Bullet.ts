import * as Assets from '../assets';
export default class Bullet extends Phaser.Sprite {

    bulletSpeed = 5;
    direction: string ;
    FrameSpeed = 3;
    constructor(game: Phaser.Game, x: number, y: number, direction: string) {
        super(game, x, y, Assets.Spritesheets.SpritesheetsFireball646464.getName(), 0);

        this.animations.add('leftFireBall',  [0, 1, 2, 3, 4, 5, 6, 7], this.FrameSpeed , true);
        this.animations.add('leftUpFireBall', [8, 9, 10, 11, 12, 13, 14, 15], this.FrameSpeed , true);
        this.animations.add('upFireBall', [16, 17, 18, 19, 20, 21, 22, 23], this.FrameSpeed , true);
        this.animations.add('rightUpFireBall', [24, 25, 26, 27, 28, 29, 30, 31], this.FrameSpeed , true);
        this.animations.add('rightFireBall', [32, 33, 34, 35, 36, 37, 38, 39], this.FrameSpeed , true);
        this.animations.add('rightDownFireBall', [40, 41, 42, 43, 44, 45, 46, 47], this.FrameSpeed, true);
        this.animations.add('downFireBall', [48, 49, 50, 51, 52, 53, 54, 55], this.FrameSpeed, true);
        this.animations.add('leftDownFireBall', [56, 57, 58, 59, 60, 61, 62, 63], this.FrameSpeed, true);
        this.anchor.setTo(0.5, 0);

        this.scale.set(1, 1);
        this.checkWorldBounds = true;
        this.outOfBoundsKill = true;
        game.add.existing(this);
        this.direction = direction;
        
        this.animations.play(direction + 'FireBall');
    }

    update() {
        if (this.direction == 'up') {
            this.y -= this.bulletSpeed;
        }
        else if (this.direction == 'down') {
            this.y += this.bulletSpeed;
        }
        else if (this.direction == 'left') {
            this.x -= this.bulletSpeed;
        }
        else if (this.direction == 'right') {
            this.x += this.bulletSpeed;
        }
    }
}