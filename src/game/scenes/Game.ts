import { Scene } from 'phaser';
import { EventBus } from '../EventBus';
import UnitManager from '../managers/UnitManager';
import AnimationManager from '../managers/AnimationManager';
import GameMap from '../map/GameMap';

export class Game extends Scene {
    private unitManager: UnitManager;
    private animationManager: AnimationManager;
    private map: GameMap;

    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.setPath('assets');

        this.unitManager = new UnitManager();
        this.animationManager = new AnimationManager(this);
        this.map = new GameMap(this, );

        /* this.load.image('star', 'star.png');
        this.load.image('background', 'bg.png');
        this.load.image('logo', 'logo.png'); */
    }

    create ()
    { 
        EventBus.emit('current-scene-ready', this);
    }
}