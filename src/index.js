//styles
import './reset.css';
import './style.css';
//modules
import { battle, levelUp, trainer } from './trainer.js';
import render from './render';


const me = trainer('Ryan', 'Good');
const drake = trainer('Drake', 'Evil');

me.collection.forEach(levelUp(2));
drake.collection = drake.collection.map(m => Object.assign({}, m, { level: 5 }));

render('Catching Cute Monsters', 'With Immutable Patterns')
render('', 'RYAN\'S COLLECTION', me.collection)
render('', 'DRAKE\'S COLLECTION', drake.collection)
render(battle(me, drake));
