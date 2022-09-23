import { createContext, useState } from "react"
import "./App.css"
import TodoList from "./TodoList"

export const AppContext = createContext()

function App() {
    const [todos, setTodos] = useState([
        {
            id: 0,
            name: "First todo",
        },
    ])

    console.log("From app file", todos)

    return (
        <AppContext.Provider
            value={{
                todos,
                setTodos,
            }}>
            <div>
                <TodoList />
            </div>
        </AppContext.Provider>
    )
}

export default App
