function Villager() {
    this.id = 0
    this.village = 0
    this.health = 100
    
    this.strenght = 0
    this.dexterity = 20 // Modifier + 5
    
    this.state = 0 // idle = 0, engage = 1, fight = 2
    this.initiative = 0;
    this.opponents = []
}

Villager.prototype.display = function () {
    console.log(
        "Villager id: " + this.id + "\n" + 
        "Village: " + this.village + "\n" +
        "Health : " + this.health + "\n" +
        "Strenght : " + this.strenght + "\n" +
        "Dexterity : " + this.dexterity + "\n" +
        "State : " + this.state + "\n" +
        "Initiative : " + this.initiative)
}

Villager.prototype.engage = function (villager) {
    if (villager == null) throw Error("Villager is Null.")
    this.opponents.push(villager)
}

Villager.prototype.fight = function () {

}

Villager.prototype.getModifier = function () {
    return 5
}

Villager.prototype.isEngage = function () {
    return this.state == 1 || this.state == 2
}

module.exports = Villager