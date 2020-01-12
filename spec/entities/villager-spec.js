describe("Villager", function() {
    var Villager = require("../../entities/villager")

    it("Is engaged", function() {
        let villager = new Villager(1)
        villager.state = 1
        expect(villager.isEngage()).toBe(true);

        villager.state = 2
        expect(villager.isEngage()).toBe(true);
    });

    it("Is not engaged", function() {
        let villager = new Villager(1)
        villager.state = 0
        expect(villager.isEngage()).toBe(false);
    });
})