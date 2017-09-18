//styles
import '../reset.css';
import '../style.css';
//modules
import battle from './battle';
import levelUp from './levelUp';
import trainer from './trainer'
import render from '../dom/render';


const me = trainer('Ryan', 'Good');
const drake = trainer('Drake', 'Evil');

drake.collection = drake.collection.map(monster => levelUp(3, monster));
me.collection = me.collection.map(monster => ({...monster, name: monster.name.toUpperCase() }))
me.collection = me.collection.filter(monster => monster.type === 'spooketer');
me.collection = [...me.collection, ...drake.collection, ...drake.collection ];


//render('Catching Cute Monsters', 'With Immutable Patterns')
render('', 'RYAN\'S COLLECTION', me.collection)
//render('', 'DRAKE\'S COLLECTION', drake.collection)
//render(battle(drake, me));
