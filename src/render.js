import monsterCard from './monsterCard';

export default function render (
  titleText = 'Catching Cute Monsters',
  subtitleText = 'With Immutable Patterns',
  monsters = []) {
  const header = document.createElement('header');
  header.classList.add('header');

  const title = document.createElement('h1');
  title.innerHTML = titleText;

  const subtitle = document.createElement('h2');
  subtitle.innerHTML = subtitleText;

  header.appendChild(title);
  header.appendChild(subtitle);

  const container = document.createElement('div');
  container.classList.add('container');
  monsters.forEach((monster => container.appendChild(monsterCard(monster))));

  document.body.appendChild(header);
  document.body.appendChild(container);
}