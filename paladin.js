import Character from "./character.js";

export default class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160) {
    super(hp, dmg, mana);
    this.heroName = "Ulder";
  }

  healingLight = (victim) => {
    //this.healingLight = true;
    if (this.mana >= 40) {
      this.healingLight = true;
      console.log("DAMN ! That's Healing Light ! Ulder uses a special move !");      
      this.dealDamage(victim, dmg = 4);
      if (this.hp >= 11) {
        this.hp += 5;
        console.log(`You're wasting your power bro ! Ulder gets some health back, having now ${this.hp} hp !`);
      }

      else {
        this.hp += 5;
        console.log(`Ulder gets 5 hp back, having now ${this.hp} hp !`);
      }
    }

    else {
      this.healingLight = false;
    }
  }
}

//let newPaladin = new Paladin();
//console.log(newPaladin);