import { Fruit } from "./Fruit.js"

export class Inventory {
  constructor(private items: Record<string, Fruit[]> = {}) {}

  add(date: Date, element: Fruit) {
    const dateKey = date.toLocaleDateString()
    const dateKeyExists = Boolean(this.items[dateKey])

    if (dateKeyExists) this.items[dateKey].push(element)
    else this.items[dateKey] = [element]
  }

  project(date: Date) {
    const dateKey = date.toLocaleDateString()

    return this.items[dateKey] ?? []
  }
}
