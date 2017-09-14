const trainer = ({name, alignment}) => ({
  name,
  alignment,
  collection: []
});

const addLevel = (a, b) => a + b.level;
const battle = (a, b) => {
  const levelA = a.collection.reduce(addLevel, 0);
  const levelB = b.collection.reduce(addLevel, 0);

  if (levelA === levelB) return 'It\'s a TIE';

  return levelA > levelB
    ? `${a.name} RULEZ ${b.name} DRULEZ`
    : `${b.name} IS THE TOPS ${a.name} IS THE BOTTOM`;
};

const levelUp = monster => monster.level = monster.level + 1;


export { battle, levelUp, trainer };
