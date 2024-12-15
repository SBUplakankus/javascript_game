import Game from '../engine/game.js';
import Renderer from '../engine/renderer.js';
import Confiner from '../engine/confiner.js';
import Platform from './platform.js';
import Player from './player.js';
import Collectible from './collectible.js';
import Checkpoint from './checkpoint.js';
import Enemy from './enemy.js';
import PlayerUI from './PlayerUI.js';
import HealthBar from './healthBar.js'
class Level extends Game
{
    constructor(canvasId)
    {
        super(canvasId);
        let healthBar = new HealthBar(this.canvas.width-150, 10, 140, 10);
        
        const player = new Player(10, this.canvas.height - 100,50, 50, healthBar);
        
        this.camera.confiner = new Confiner(0,0,5000,this.canvas.height);
        this.camera.target = player;
        this.addGameObject(player);
        
        const platforms = [
                    new Platform(0, this.canvas.height-40, 200, 20, "green"),
                    new Platform(300, this.canvas.height-40, 200, 20, "green"),
                    new Platform(600, this.canvas.height-80, 200, 60, "green"),
            new Platform(1000, this.canvas.height-60, 200, 20, "green"),
            new Platform(1400, this.canvas.height-90, 200, 20, "green"),
            new Platform(1800, this.canvas.height-20, 200, 20, "green"),
            new Platform(2000, this.canvas.height-20, 200, 20, "green"),
            new Platform(2300, this.canvas.height-60, 200, 20, "green"),
            new Platform(2600, this.canvas.height-90, 200, 20, "green"),
            new Platform(2900, this.canvas.height-50, 200, 20, "green"),
            new Platform(3300, this.canvas.height-40, 200, 80, "green"),
            new Platform(3700, this.canvas.height-60, 200, 80, "green"),
            new Platform(4000, this.canvas.height-50, 200, 80, "blue")
        ];
        
        for(const platform of platforms)
        {
            this.addGameObject(platform);
        }
        
        const Collectibles = [
            new Collectible(375,this.canvas.height-100),
            new Collectible(475,this.canvas.height-100),
            new Collectible(975,this.canvas.height-90),
            new Collectible(1475,this.canvas.height-110),
            new Collectible(1975,this.canvas.height-80),
            new Collectible(2275,this.canvas.height-120),
            new Collectible(2575,this.canvas.height-130),
            new Collectible(2975,this.canvas.height-140),
           
        ];
        
        for(const coll of Collectibles)
        {
            this.addGameObject(coll);
        }
        
        const enemies = [
            new Enemy(300, 100),
            new Enemy(700, 100),
            new Enemy(1700, 100),
            new Enemy(2200, 100),
            new Enemy(3500, 100)
            
        ];
        
        for(let enemy of enemies)
        {
            console.log(enemy);
            let hb = new HealthBar(enemy.x, enemy.y-15,enemy.getComponent(Renderer).width, 10 );
            enemy.setHealthBar(hb);
            this.addGameObject(hb);
            this.addGameObject(enemy);
        }
        let ui = new PlayerUI(10,10);
        
     
        this.addGameObject(ui);
        //ui.addGameObject(healthBar, this.canvas.width-200, 10);
        this.addGameObject(new Checkpoint(450, this.canvas.height-100, 20,40, 'blue'));
    }
}
export default Level

