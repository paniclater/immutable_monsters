//styles
import './reset.css';
import './style.css';
//svgs
import legs from './svg/legs.svg';
import floaty from './svg/floaty.svg';
import pointy from './svg/pointy.svg';
import eyes from './svg/eyes.svg';
//modules
import { battle, levelUp, trainer } from './trainer.js';
import { monsterCard } from './monsterCard.js';

//dom initialization biz
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

//main event

const starterMonsters = [
  { svgElement: legs, name: 'Leggy', level: 1 },
  { svgElement: floaty, name: 'Floaty', level: 1 },
  { svgElement: pointy, name: 'Pointy', level: 1 },
  { svgElement: eyes, name: 'Bally', level: 1 }
];

const Me = trainer('Ryan', 'Good');
const Drake = trainer('Drake', 'Evil');

Me.collection = starterMonsters;
Drake.collection = starterMonsters;

//Me.collection.forEach(levelUp);
//Me.collection.forEach(levelUp);
//Me.collection.forEach(levelUp);

const monsters = starterMonsters;
//const monsters = Me.collection;

//TODO: separate dom manipulation from data mapping?
monsters.forEach((monster => container.appendChild(monsterCard(monster))));
//title.innerHTML = 'RESULTS ARE IN:';
//subtitle.innerHTML = battle(Me, Drake);

//add everything to the document
document.body.appendChild(header);
document.body.appendChild(container);