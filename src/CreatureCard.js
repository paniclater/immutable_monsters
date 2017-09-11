export function creatureCard(monsterSvg) {
  var d = document.createElement('div');
  d.classList.add('monsterCard');
  d.innerHTML = monsterSvg;

  return d;
}