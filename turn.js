export default class Turn {
  constructor() {
    this.roundNumber = 0;
  }

  startTurn = () => {
    alert(`Round ${this.roundNumber}`);
    this.roundNumber += 1;
    console.log(`You are now reaching round ${this.roundNumber}`);
    if (this.roundNumber === 10) {
      console.log("This is the last round ! Give it your all !");
    }
    
    if (this.roundNumber <= 10) {
      // faire une méthode qui concentre les actions de tours avec each turn do (si c'est vraiment avec ça lol)
    }
    
  }

  
  
  
}
