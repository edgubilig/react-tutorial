import { useState } from "react"

export function useCustomHook(initial, number) {
    const [count, setCount] = useState(initial)

    function add() {
        setCount((prevState) => {
            return prevState + number
        })
    }

    return [count, add]
}
