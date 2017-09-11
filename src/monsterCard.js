export function monsterCard(monsterSvg) {
  const card = document.createElement('div');
  card.classList.add('monsterCard');
  card.innerHTML = monsterSvg;

  return card;
}