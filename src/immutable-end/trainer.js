import starterMonsters from './monsterData';

export default (name, alignment) => ({
  name,
  alignment,
  collection: [...starterMonsters]
});
