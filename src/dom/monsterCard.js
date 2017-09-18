export default function monsterCard({ svg, name, level, type }) {
  const card = document.createElement('div');
  card.classList.add('monster-card');

  const svgContainer = document.createElement('div');
  svgContainer.innerHTML = svg;
  svgContainer.classList.add('monster-svg');

  const stats= document.createElement('div');
  stats.classList.add('stats');

  const title = document.createElement('h1');
  title.innerHTML = name;
  stats.appendChild(title);

  const subtitle = document.createElement('h2');
  subtitle.innerHTML = `Type: ${type}`
  stats.appendChild(subtitle);


  const levels = document.createElement('div');
  levels.classList.add('levels-container');

  const levelTextContainer = document.createElement('div');
  const levelText = document.createElement('h2');
  levelText.innerHTML = 'Level:'
  levelTextContainer.appendChild(levelText);
  levels.appendChild(levelTextContainer);

  const levelBlockContainer = document.createElement('div');
  levelBlockContainer.classList.add('level-block-container');
  for (var i = 0; i < level; i++) {
    var l = document.createElement('div');
    l.innerHTML = i + 1;
    l.classList.add('level-block');
    levelBlockContainer.appendChild(l);
  }
  levels.appendChild(levelBlockContainer);

  stats.appendChild(levels);
  card.appendChild(svgContainer);
  card.appendChild(stats);
  return card;
}