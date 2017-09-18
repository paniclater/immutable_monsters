import Monster from './Monster';
//svgs
import legs from '../svg/legs.svg';
import floaty from '../svg/floaty.svg';
import pointy from '../svg/pointy.svg';
import eyes from '../svg/eyes.svg';

const starterMonsters = [
  new Monster('tippety', 1, 'spooketer', legs),
  new Monster('floaty', 1, 'spookemer', floaty),
  new Monster('pointy', 1, 'spookeezer', pointy),
  new Monster('gazey', 1, 'spookaser', eyes)
];

export default class Collection {
  constructor(monsters = starterMonsters) {
    this.monsters = monsters;
  }
}