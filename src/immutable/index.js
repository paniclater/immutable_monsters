//styles
import '../reset.css';
import '../style.css';
//modules
import battle from './battle';
import levelUp from './levelUp';
import trainer from './trainer'
import render from '../dom/render';

render('Catching Cute Monsters', 'With Immutable Patterns');
//make some trainers
const me = trainer('Ryan', 'Evil');
const drake = trainer('Drake', 'Good');
drake.collection = drake.collection.map(monster => levelUp(3, monster));
render('Ryan', '', me.collection);
render('Drake', '', drake.collection);
//render trainers & battle!
render(battle(drake, me))
