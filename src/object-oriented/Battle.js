export default class Battle {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
  }

  winner() {
    let sum1;
    let sum2;
    let winner;
    let loser;

    for (let i = 0; i < this.trainer1.collection.monsters.length; i++) {
      sum1 += this.trainer1.collection.monsters[i];
    }

    for (let i = 0; i < this.trainer2.collection.monsters.length; i++) {
      sum2 += this.trainer2.collection.monsters[i];
    }

    if (sum1 === sum2) return 'It Is A Tie, When There Are No Winners Everyone Is A Loser.';

    return (sum1 > sum2) ?
      `${this.trainer1.name} RULEZ ${this.trainer2.name} DRULES` :
      `${this.trainer2.name} IS THE HERO ${this.trainer1.name} IS THE ZERO`;
  }
}