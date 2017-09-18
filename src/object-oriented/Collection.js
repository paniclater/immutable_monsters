import Monster from './Monster';
//svgs
import legs from '../svg/legs.svg';
import floaty from '../svg/floaty.svg';
import pointy from '../svg/pointy.svg';
import eyes from '../svg/eyes.svg';

const starterMonsters = [
  new Monster('tippety', 1, 'stompey', legs),
  new Monster('floaty', 1, 'ghouley', floaty),
  new Monster('pointy', 1, 'spookey', pointy),
  new Monster('gazey', 1, 'ghostey', eyes)
];

export default class Collection {
  constructor(monsters = starterMonsters) {
    this.monsters = monsters;
  }
}