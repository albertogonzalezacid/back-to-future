import { describe, expect, it } from "vitest"
import { Inventory } from "./Inventory.js"

describe("Inventory", () => {
  it("can be created", () => {
    expect(new Inventory()).not.toBeUndefined()
  })

  it("is empty", () => {
    const now = new Date()
    const inventory = new Inventory()

    inventory.project(now)
  })
})
