import { describe, test } from "vitest"
import { render } from "@testing-library/react"
import Button from "./Button"

describe("<Button/>", () => {
    test("renders button", () => {
        render(<Button text="Log in" />)
    })
})