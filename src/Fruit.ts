export class Fruit {
  private constructor(private readonly value: string) {}

  static create(fruit: string) {
    return new Fruit(fruit)
  }
}
