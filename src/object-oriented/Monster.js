export default class Monster {
  constructor(name, level, type, svgElement) {
    this.name = name;
    this.level = level;
    this.type = type;
    this.svgElement = svgElement;
  }

  levelUp () {
    this.level = this.level + 1;
  }
}
