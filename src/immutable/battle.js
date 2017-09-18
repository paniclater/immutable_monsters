const sumLevelReducer = (level, monster) => level + monster.level;

export default (trainer1, trainer2) => {
  const sum1 = trainer1.collection.reduce(sumLevelReducer, 0);
  const sum2 = trainer2.collection.reduce(sumLevelReducer, 0);
  const separator = '~~~';

  if (sum1 === sum2) return 'It\'s a TIE';

  return sum1 > sum2
    ? `${trainer1.name.toLowerCase()} rulez ${separator} ${trainer2.name.toLowerCase()} droolz`
    : `${trainer2.name.toLowerCase()} is hero  ${separator} ${trainer1.name.toLowerCase()} is zero`;
};