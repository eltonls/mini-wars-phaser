import { GameObjects, Scene } from "phaser";
import UnitStats from "../../utils/types/UnitStats";
import UnitType from "../../utils/types/UnitType";


class Unit {
    private stats: UnitStats;
    private type: UnitType;
    private sprite: Phaser.GameObjects.Sprite;

    constructor(scene: Scene, x: number, y: number, texture: string, unitType: UnitType, stats: UnitStats) {
        this.sprite = new GameObjects.Sprite(scene, x, y, texture);
        this.type = unitType;
        this.stats = stats;
    }

    public moveTo(x: number, y: number) {
        this.sprite.x = x;
        this.sprite.y = y;
    }

    public getCoordinates(): { x: number, y: number } {
        return { x: this.sprite.x, y: this.sprite.y }
    }
}

export default Unit;