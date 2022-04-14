import Character from "./character.js";

export default class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20) {
    super(hp, dmg, mana);
    this.heroName = "Carl";
  }

  shadowHit = (victim) => {
    //this.shadowHit = false;
    if (this.mana >= 20) {
      this.shadowHit = true;
      console.log("DAMN ! That's Shadow Hit ! Carl uses a special move !");
      this.dealDamage(victim, dmg = 7);
      console.log("Until next round, no one will be able to inflict damages to Carl !");
    }

    else {
      this.shadowHit = false;
    }
  }
  
  takeDamage = (damage) => {
    if (this.shadowHit) {
      console.log("Thanks to Shadow Hit, Carl isn't taking any damage !");
      return;
    }
    
    super.takeDamage(damage);
  
  }
}

//let newAssassin = new Assassin();
//console.log(newAssassin);