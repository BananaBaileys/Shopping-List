import { useState } from "react"
import { NewForm } from "./NewForm"
import "./style.css"

export default function App() {

  const [todos, setTodos] = useState([])

  

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
      
      <NewForm.jsx />
      {/* if it is capatialized letter, React knows it is a customer component that was created */}

      <h1 className="header">Shop List</h1>
      <ul className="list">
        {todos.length === 0 && "No items"}  
         {/* "No items"" when thereare no list */}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} 
                onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)}
              className="btn btn-danger">Delete</button>
            </li>
          )
        })}   

        
      </ul>
    </>
  )
}