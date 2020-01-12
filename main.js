var VillagerPool = require("./entities/villager-pool")

function Village(id, villagerPool) {
    this.villagerPool = villagerPool
    this.id = id
    // this.villagers = []
    // this.nbVillagers = 100

    this.init = function (nbVillagers) {
        for (i=0;i < nbVillagers;i++) {
            let villager = this.villagerPool.findVillagerWithoutVillage()
            villager.village = this.id
        }
    }

    this.findAllVillager = function () {

    }
    
    // this.findIdleVillager = function () {
    //     return this.villagers.find(villager => villager.state == 0)
    // }

    // this.display = function () {
    //     this.villagers.forEach(function (element, index) {
    //         console.log("Fighter: " + index + " Health : " + element.health)
    //     })
    // }
}



function Fighter() {
}

function Fight() {
    this.id = 0
    this.fighters1 = []
    this.fighters2 = []
    this.round = 0
    this.state = 0

    this.fight = function() {
        this.round += 1

        // figther1 = getRandomInt(10)
        // figther2 = getRandomInt(10)
    
        // if (figther1 > figther2) {
        //     fight.fighters2[0].health = 0
        // } else if (figther1 < figther2) {
        //     fight.fighters1[0].health = 0
        // }
    }
}

var villagerPool = new VillagerPool()
villagerPool.init(200)
villagerPool.display()

// var village1 = new Village(1, villagerPool)
// village1.init(100)

// var village2 = new Village(2, villagerPool)
// village2.init(100)

// Le combat débute
// Lancer l'intiative des combattants
// villagerPool.rollInitiative()
// villagerPool.sortByInitiative()

// var iterator = villagerPool.getVillagerIterator()
// for (const villager of iterator) {
//     // if (villager) { break }
//     // if (!villager.isEngage()) { villager.engage() } 
//     // if (villager.isEngage()) { villager.fight() }
//     villager.display()
//     // iterator.next()
// }




// villagerPool
// villagerPool.display()
// villager.display()


// // Init fights
// fights = []
// for (i=0;i < 100;i++) {
//     fight = new Fight()
    
//     villager = village1.findIdleVillager()
//     villager.state = 1
//     fight.fighters1.push(villager)
    
//     villager = village2.findIdleVillager()
//     villager.state = 1
//     fight.fighters2.push(villager)
    
//     fights[i] = fight
// }

// fights.forEach(function(fight) {
//     fight.fight()
// })

// village1.display()
// village2.display()

