import Monster from './Monster'
import Trainer from './Trainer'
import Battle from './Battle'
//svgs
import legs from '../svg/legs.svg';
import floaty from '../svg/floaty.svg';
import pointy from '../svg/pointy.svg';
import eyes from '../svg/eyes.svg';

const me = new Trainer('Ryan', 'Good');
const drake = new Trainer('Drake', 'Evil');

console.log(me.collection.monsters)
console.log(drake.collection.monsters)

const battle = new Battle(me, drake);

console.log(battle.winner());

for (let i = 0; i < me.collection.monsters.length; i++) {
  me.collection.monsters[i].levelUp();
}

const revenge = new Battle(me, drake);

console.log(revenge.winner());

for (let i = 0; i < me.collection.monsters.length; i++) {
  console.log(me.collection.monsters[i] === drake.collection.monsters[i]);
}