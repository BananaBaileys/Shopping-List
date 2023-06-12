import { useState } from "react"
import "./style.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })
    
  }



  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Shopping Check List</label>
          <input value={newItem} 
          onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Shop List</h1>
      <ul className="list">
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} />
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          )
        })}   

        
      </ul>
    </>
  )
}