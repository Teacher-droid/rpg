import Character from "./character.js";

export default class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40) {
    super(hp, dmg, mana);
    this.heroName = "Grace";
  }

  darkVision = (victim) => {
    //this.darkVision = true;
    if (this.mana >= 20) {
      this.darkVision = true;
      console.log("DAMN ! That's Dark Vision ! Grace uses a special move !");
      this.dealDamage(victim, dmg = 5);
    }

    else {
      this.darkVision = false;
    }

    takeDamage = (damage) => {
      if (this.darkVision) {
        console.log("Thanks to Dark Vision, the Grace will take 2 damages less !")
        damage -= 2;
        super.takeDamage(damage);
      }
    }
  }
}

//let newFighter = new Fighter();
//console.log(newFighter);