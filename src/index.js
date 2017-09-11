import './reset.css';
import './style.css';
import LongLegs from './longlegs.svg';
import { monsterCard } from './monsterCard.js';

const container = document.createElement('div');
container.classList.add('container');

for (let i = 0; i < 10; i++) {
  container.appendChild(monsterCard(LongLegs));
}
document.body.appendChild(container);