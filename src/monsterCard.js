export function monsterCard(monsterSvg) {
  const card = document.createElement('div');
  card.classList.add('monster-card');

  const svg = document.createElement('div');
  svg.innerHTML = monsterSvg;
  svg.classList.add('monster-svg');

  const stats= document.createElement('div');
  stats.classList.add('stats');

  const title = document.createElement('h1');
  title.innerHTML = 'Spooky Toes';
  stats.appendChild(title);

  const type = document.createElement('h2');
  type.innerHTML = 'Type: Spooker'
  stats.appendChild(type);


  const levels = document.createElement('div');
  levels.classList.add('levels-container');

  const levelTextContainer = document.createElement('div');
  const levelText = document.createElement('h2');
  levelText.innerHTML = 'Level:'
  levelTextContainer.appendChild(levelText);
  levels.appendChild(levelTextContainer);

  const levelBlockContainer = document.createElement('div');
  levelBlockContainer.classList.add('level-block-container');
  for (var i = 0; i < 3; i++) {
    var l = document.createElement('div');
    l.innerHTML = i + 1;
    l.classList.add('level-block');
    levelBlockContainer.appendChild(l);
  }
  levels.appendChild(levelBlockContainer);

  stats.appendChild(levels);
  card.appendChild(svg);
  card.appendChild(stats);
  return card;
}