import { Scene } from "phaser"

class AnimationManager {
    private scene: Phaser.Scene

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.createAnimations();
    }

    private createAnimations(): void {
        // Animations to be created
    }
}

export default AnimationManager;