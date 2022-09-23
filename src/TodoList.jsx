import React, { useState, useContext } from "react"
import { AppContext } from "./App"

function TodoList() {
    const [todo, setTodo] = useState("")
    const { todos, setTodos } = useContext(AppContext)

    const [jokes, setJokes] = useState([])

    const getJoke = async () => {
        const resp = await fetch("https://api.chucknorris.io/jokes/random")
        const data = await resp.json()

        setJokes((prevJokes) => {
            return [
                ...prevJokes,
                {
                    id: data.id,
                    value: data.value,
                    icon_url: data.icon_url,
                },
            ]
        })
    }

    console.log("jokes", jokes)

    return (
        <div>
            <input
                type="text"
                value={todo}
                onChange={(event) => {
                    setTodo(event.target.value)
                }}
            />
            <button
                onClick={() => {
                    const lastTodo = todos[todos.length - 1]
                    const newTodo = {
                        name: todo,
                        id: lastTodo.id + 1,
                    }
                    setTodos((prevTodos) => {
                        return [...prevTodos, newTodo]
                    })
                    setTodo("")
                }}>
                Add
            </button>

            <button onClick={getJoke}>Get Random Joke</button>
            <ul>
                {todos.map(({ id, name }) => {
                    return <li key={id}>{name}</li>
                })}
            </ul>

            <h2>Jokes</h2>
            <ul>
                {jokes.map(({ id, value, icon_url }) => {
                    return <li key={id}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default TodoList
