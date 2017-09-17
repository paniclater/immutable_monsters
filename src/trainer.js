import { updateObject } from './utils';
import starterMonsters from './monsterData';

const trainer = (name, alignment) => ({
  name,
  alignment,
  collection: starterMonsters
});
const addLevel = (level, monster) => level + monster.level;
const battle = (a, b) => {
  const levelA = a.collection.reduce(addLevel, 0);
  const levelB = b.collection.reduce(addLevel, 0);
  const separator = '~~~';

  if (levelA === levelB) return 'It\'s a TIE';

  return levelA > levelB
    ? `${a.name.toLowerCase()} rulez ${separator} ${b.name.toLowerCase()} droolz`
    : `${b.name.toLowerCase()} is hero  ${separator} ${a.name.toLowerCase()} is zero`;
};

const levelUp = times => monster => updateObject(monster, { level: monster.level + times });


export { battle, levelUp, trainer };
