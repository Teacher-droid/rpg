import Character from "./character.js";

export default class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200) {
    super(hp, dmg, mana);
    this.heroName = "Moana";
  }

  heal = () => {
    //this.heal = false;
    if (this.mana >= 25) {
      this.heal = true;
      console.log("DAMN ! That's a Heal ! Moana uses a special move !");
      console.log('Moana : "Fuck yall, ama heal myself ! YOLO !" ');
      if (this.hp > 2) {
        this.hp += 8;
        console.log(`You're wasting your power bro ! Moana gets some health back, having now ${this.hp} hp !`);
      }
      
      else {
        this.hp += 8;
        console.log(`Moana gets 8 hp back, having now ${this.hp} hp !`);
      }
    }

    else {
      this.heal = false;
    }
  }
}

//let newMonk = new Monk();
//console.log(newMonk);