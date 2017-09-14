import './reset.css';
import './style.css';
import legs from './svg/legs.svg';
import floaty from './svg/floaty.svg';
import pointy from './svg/pointy.svg';
import eyes from './svg/eyes.svg';

import { monsterCard } from './monsterCard.js';

const header = document.createElement('header');
header.classList.add('header');

const title = document.createElement('h1');
title.innerHTML = 'Catching Cute Monsters';

const subtitle = document.createElement('h2');
subtitle.innerHTML = 'With Immutable Patterns From Functional Programming';

header.appendChild(title);
header.appendChild(subtitle);

const container = document.createElement('div');
container.classList.add('container');
const monsters = [
  { svgElement: legs, name: 'Leggy', level: 1 },
  { svgElement: floaty, name: 'Floaty', level: 2 },
  { svgElement: pointy, name: 'Pointy', level: 3 },
  { svgElement: eyes, name: 'Bally', level: 4 }
];
monsters.forEach((monster => container.appendChild(monsterCard(monster))));

document.body.appendChild(header);
document.body.appendChild(container);