export default class Character {
  constructor(hp, dmg, mana, heroName) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.heroName = heroName;
    this.hasStatus = "playing";
  }

  takeDamage = (damage) => {
    this.hp -= damage;
    console.log(`${this.heroName} got hit !`) 
    console.log(`${this.heroName}It hurts !! いたい !!!`) 
    console.log(`${this.heroName} looses ${damage} hp... getting closer to death ! The character only has ${this.hp} left, might be the last round ?`);
    if (this.hp <= 0) {
      this.hasStatus = "loser"; 
      this.hp = 0;
      console.log("YOU F****** LOSER ! I HAVE BET MY HOUSE ON YOU ! GAME OVER FOR YOUR ASS !");
    }   
  }

  dealDamage = (victim, dmg = this.dmg) => {
    victim.takeDamage(dmg);
    console.log(`Oof, ${victim.heroName} got hit by ${this.heroName}, inflicting ${this.dmg} to the foe !`)
    if (victim.hasStatus === "loser") {
      this.mana += 20;
    }
  }

  noMoreMana = () => {
    if (this.mana <= 0) {
      console.log("No more mana dog, show some muscle now !");
    }
  }

}

// let newCar = new Character(5, 6, 7);
// console.log(newCar);