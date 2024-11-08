import { Fruit } from "./Fruit.js"

export class Inventory {
  constructor(private items: Record<string, Fruit[]> = {}) {}

  add(date: Date, element: Fruit) {
    if (this.items[date.toLocaleDateString()]) this.items[date.toLocaleDateString()].push(element)
    else this.items[date.toLocaleDateString()] = [element]
  }

  project(date: Date) {
    return this.items[date.toLocaleDateString()] ?? []
  }
}
