import { beforeEach, describe, expect, it } from "vitest"
import { Inventory } from "./Inventory.js"

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
})
