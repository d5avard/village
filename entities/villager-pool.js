var Villager = require("./villager")
var Tools = require("./tools")

function VillagerPool() {
    this.villagers = null
    this.id = 0

    this.init = function (nbVillagers) {
        this.villagers = new Array(nbVillagers)
        for (i=0;i < nbVillagers;i++) {
            let villager = new Villager()
            villager.id = this.newId()
            this.villagers[i] = villager
        }
        // let iterator = this.getVillagerIterator()
        // for (const villager of iterator) {
        //     villager = new Villager()
        //     villager.id = this.newId()
        // }
    }

    this.newId = function() {
        return this.id++
    }

    this.display = function () {
        this.villagers.forEach(function (villager) {
            console.log("Villager: " + villager.id + " Village: " + villager.village +  " Health : " + villager.health +  " Initiative : " + villager.initiative)
        })
    }

    this.findIdleVillager = function () {
        return this.villagers.find(villager => villager.state == 0)
    }

    this.findOpponent = function (villageAgainst) {
        this.villagers.find(function (villager) {
            return villager.oppnents.length < 1 && villager.village == villageAgainst
        })
    }

    this.findVillagerWithoutVillage = function () {
        return this.villagers.find(villager => villager.village == 0)
    }

    this.getVillagerIterator = function () {
        return this.villagers[Symbol.iterator]()
    }

    this.rollInitiative = function () {
        this.villagers.forEach(function (villager) {
            villager.initiative = Tools.getRandomInt(20) + villager.getModifier()
        })
    }

    this.sortByInitiative = function(a, b) {
        this.villagers.sort(function (a, b) {
            return b.initiative - a.initiative
        })
    }
}

module.exports = VillagerPool