const sumLevelReducer = (level, monster) => level + monster.level;

export default (a, b) => {
  const levelA = a.collection.reduce(sumLevelReducer, 0);
  const levelB = b.collection.reduce(sumLevelReducer, 0);
  const separator = '~~~';

  if (levelA === levelB) return 'It\'s a TIE';

  return levelA > levelB
    ? `${a.name.toLowerCase()} rulez ${separator} ${b.name.toLowerCase()} droolz`
    : `${b.name.toLowerCase()} is hero  ${separator} ${a.name.toLowerCase()} is zero`;
};