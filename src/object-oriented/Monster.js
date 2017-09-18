export default class Monster {
  constructor(name, level, type, svg) {
    this.name = name;
    this.level = level;
    this.type = type;
    this.svg = svg;
  }

  levelUp() {
    this.level = this.level + 1;
  }
}
