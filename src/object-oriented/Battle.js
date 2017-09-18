export default class Battle {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
  }

  winner() {
    let sumLevel1 = 0;
    let sumLevel2 = 0;

    for(let i = 0; i < this.trainer1.collection.monsters.length; i++) {
      sumLevel1 = sumLevel1 + this.trainer1.collection.monsters[i].level;
    }

    for(let i =0; i < this.trainer2.collection.monsters.length; i++) {
      sumLevel2 = sumLevel2 + this.trainer2.collection.monsters[i].level;
    }

    if (sumLevel1 === sumLevel2) return 'It is a tie, when there are no WINNERS there are only LOSERS';

    return (sumLevel1 > sumLevel2) ?
      `${this.trainer1.name} is the HERO, ${this.trainer2.name} is the ZERO` :
      `${this.trainer2.name} is the HERO, ${this.trainer1.name} is the ZERO`;


  }
}