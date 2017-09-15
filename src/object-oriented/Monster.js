export default class Monster {
  constructor(name, level, svg) {
    this.name = name;
    this.level = level;
    this.svg = svg;
  }

  levelUp () {
    this.level = this.level + 1;
  }
}
