//styles
import '../reset.css';
import '../style.css';
//classes
import Monster from './Monster'
import Trainer from './Trainer'
import Battle from './Battle'
import render from '../render'

const me = new Trainer('Ryan', 'Good');
const drake = new Trainer('Drake', 'Evil');
const battle = new Battle(me, drake);

render('TIME TO BATTLE', 'RYAN V DRAKE');
//render('TIME TO BATTLE', 'RYAN\'S COLLECTION', me.collection.monsters)
//render('TIME TO BATTLE', 'DRAKE\'S COLLECTION', drake.collection.monsters)
render('RESULTS', battle.winner());