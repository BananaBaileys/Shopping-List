import { useState } from "react"
import { NewForm } from "./NewForm"
import { ShopList } from "./ShopList"
import "./style.css"

export default function App() {

  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed } // creat brand new state cus state is immutable 
        }
        return todo
      })
    })
  }


  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      
      <NewForm onSubmit={addTodo} />
      {/* if it is capatialized letter, React knows it is a customer component that was created */}

      <h1 className="header">Shop List</h1>
      <ShopList todos={todos}
      toggleTodo={toggleTodo} deleteTodo={deleteTodo}
      />
      
    </>
  )
}