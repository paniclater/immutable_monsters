//styles
import '../reset.css';
import '../style.css';
//classes
import Monster from './Monster'
import Trainer from './Trainer'
import Battle from './Battle'
import render from '../dom/render'

render('Catching Cute Monsters', 'With Object Oriented Patterns', []);

const me = new Trainer('Ryan', 'Chaotic Evil');
const drake = new Trainer('Drake', 'Lawful Good');


for (var i = 0; i < 4; i++) {
  for (var j = 0; j < me.collection.monsters.length; j++) {
    me.collection.monsters[j].levelUp();
  }
}

render('Ryan\'s Collection', '', me.collection.monsters);
render('Drake\'s Collection', '', drake.collection.monsters);

const battle = new Battle(me, drake);
render(battle.winner(), '', []);

