import Collection from './Collection';

export default class Trainer {
  constructor(name, alignment) {
    this.name = name;
    this.alignment = alignment;
    this.collection = new Collection();
  }
}