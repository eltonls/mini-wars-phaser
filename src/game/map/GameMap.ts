import { TileType } from "../utils/types/TileType";
import Tile from "./Tile";

class GameMap {
    private tiles: Tile[][];

    constructor(scene: Phaser.Scene, mapData: number[][]) {
        this.tiles = this.createTiles(scene, mapData);
    }

    private createTiles(scene: Phaser.Scene, mapData: number[][]): Tile[][] {
        // To be implemented
    }

    public changeTile(x: number, y: number, tileType: TileType) {
        // TODO: Create a logic to change the tile
    }

    // TODO: Pathfinding algorithm Djikstra
}

export default GameMap;
