import { useState } from "react"

const Test = ({ data }) => {

    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count - 1)
    }

    return (
        <>
            <h2>Test {data}</h2>
            <p>count {count}</p>
            <button onClick={add}> + </button>
        </>
    )
}
export default Test