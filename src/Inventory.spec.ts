import { beforeEach, describe, expect, it } from "vitest"
import { Inventory } from "./Inventory.js"
import { Fruit } from "./Fruit.js"

describe("Inventory", () => {
  let inventory: Inventory

  beforeEach(() => {
    inventory = new Inventory()
  })

  it("can be created", () => {
    expect(inventory).not.toBeUndefined()
  })

  it("is empty", () => {
    const now = new Date()

    expect(inventory.project(now)).toEqual([])
  })

  it("adds an element", () => {
    const now = new Date()
    const element = Fruit.create("🍐")

    inventory.add(now, element)

    expect(inventory.project(now)).toEqual([element])
  })

  it("adds several elements for the same day", () => {
    const now = new Date()
    const elements = [Fruit.create("🍐"), Fruit.create("🍉"), Fruit.create("🥝")]

    elements.forEach((element) => inventory.add(now, element))

    expect(inventory.project(now)).toEqual(elements)
  })

    it("adds several elements for the different days", () => {
      const now = new Date()
      const tomorrow = new Date("2024-11-09")
      const elementsNow = [Fruit.create("🍐"), Fruit.create("🍉"), Fruit.create("🥝")]
      const elementsTomorrow = [Fruit.create("🍇")]

      elementsNow.forEach((element) => inventory.add(now, element))
      elementsTomorrow.forEach((element) => inventory.add(tomorrow, element))

      expect(inventory.project(now)).toEqual(elementsNow)
      expect(inventory.project(tomorrow)).toEqual(elementsTomorrow)
    })
})
