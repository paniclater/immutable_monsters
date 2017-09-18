import starterMonsters from './monsterData';

export default (name, alignment, collection = [...starterMonsters]) => ({
  name,
  alignment,
  collection
});
