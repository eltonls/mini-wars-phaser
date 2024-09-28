import Unit from "../entities/units/Unit";


class UnitManager {
    private units: Unit[]

    constructor() {
        this.units = [];
    }

    public addUnit(unit: Unit) {
        this.units.push(unit);
    }

    public removeUnit(unit: Unit) {
        // Test this
        this.units = this.units.filter((currentUnit) => {
            currentUnit !== unit;
        })
    }

    public getUnitAt(x: number, y: number): Unit | undefined {
        this.units.forEach((unit: Unit) => {
            if(unit.getCoordinates().x === x && unit.getCoordinates().y === y) {
                return unit;
            }
        }) 

        return undefined;
    }
}

export default UnitManager;