import Monster from './Monster';
//svgs
import legs from '../svg/legs.svg';
import floaty from '../svg/floaty.svg';
import pointy from '../svg/pointy.svg';
import eyes from '../svg/eyes.svg';

const starterMonsters = [
  new Monster('Legs', 1, legs),
  new Monster('floaty', 1, floaty),
  new Monster('pointy', 1, pointy),
  new Monster('eyes', 1, eyes)
];

export default class Collection {
  constructor(monsters = starterMonsters) {
    this.monsters = monsters;
  }
}