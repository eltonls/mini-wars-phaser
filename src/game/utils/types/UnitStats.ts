class UnitStats {
    private evasion: number;
    private defense: number;
    private hit: number;
    private damage: number;
    private health: number;
    private movement: number;

    constructor(evasion: number, defense: number, hit: number, damage: number, health: number, movement: number) {
        this.evasion = evasion;
        this.defense = defense;
        this.hit = hit;
        this.damage = damage;
        this.health = health;
        this.movement = movement;
    }

    getEvasion() { return this.evasion; }
    getDefense() { return this.defense; }
    getHit() { return this.hit; }
    getDamage() { return this.damage; }
    getHealth() { return this.health; }
    getMovement() { return this.movement; }

    setEvasion(evasion: number) { this.evasion = evasion; }
    setDefense(defense: number) { this.defense = defense; }
    setHit(hit: number) { this.hit = hit; }
    setDamage(damage: number) { this.damage = damage; }
    setHealth(health: number) { this.health = health; }
    setMovement(movement: number) { this.movement = movement; }
}

export default UnitStats;
