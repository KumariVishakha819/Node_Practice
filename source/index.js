const super_hero = require("./super_hero");
let hero1 = new super_hero();
console.log(hero1.getName());
hero1.setName("Superman");
console.log(hero1.getName());

let hero2 = require("./super_hero");
hero2 = new super_hero();
console.log(hero2.getName());
