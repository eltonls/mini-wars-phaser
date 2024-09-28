import { GameObjects, Scene } from "phaser";
import { TileType } from "../utils/types/TileType";

class Tile extends Phaser.GameObjects.Sprite {
    private tileType: TileType;
    private movementCost: number;
    private isOccupied: boolean;
    public x: number;
    public y: number;

    constructor(scene: Scene, type: TileType, texture: string, movementCost: number, x: number, y: number) {
        super(scene, x, y, texture);
        this.tileType = type;
        this.movementCost = movementCost;
        this.isOccupied = false;
        this.x = x;
        this.y = y;
        this.init();
    }

    private init(): void {
        this.scene.add.existing(this);
        this.setInteractive();
        this.on("pointerdown", this.onTileClicked.bind(this));
    }

    private onTileClicked(): void {
        // Handle tile click event
        // This could be used for unit selection, movement, or displaying tile info
        console.log(`Tile clicked at (${this.x}, ${this.y})`);
        // Emit an event or call a method in your game scene to handle the click
    }

    public highlight() {
        this.setTint();
    }

    public removeHighlight() {
        this.clearTint();
    }
}

export default Tile;
