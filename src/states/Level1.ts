import  Player from '../Objects/Player';
import  Enemy from '../Objects/Enemy';


export default class Level1 extends Phaser.State {
        player: Player;
        enemies;
        create() {
            this.player = new Player(this.game, 130, 284);

            this.enemies = this.game.add.physicsGroup(Phaser.Physics.ARCADE);

            for (let i = 0; i < 5; i++) {
              this.enemies.create(new Enemy(this.game));
              this.game.physics.arcade.collide(this.player,  this.enemies.getAt(i), this.collisionHandler, null, this);

            }

            console.log(this.enemies.getAt(0));

        }

        update() {
           // this.enemies.getAt(0)
            // this.game.physics.arcade.moveToObject(this.enemies.getAt(i), this.player, 30);
            
        }

        collisionHandler() {
            this.player.damage(50);
            let text = 'Hit';
            this.game.add.text(this.player.x + 10, this.player.y + 10, text);
        }
}
