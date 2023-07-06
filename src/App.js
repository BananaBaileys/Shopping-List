import { useEffect, useState } from "react"
import { NewForm } from "./NewForm"
import { ShopList } from "./ShopList"
import "./style.css"

export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue) 
    // checking the local storage to see if the value exists
    // if it doesn't it defaults to an enpty array
  })

  useEffect( () => {
      localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos]
  // in react, hook needs to be at the top of the function
  )

  // run this function everytime when the object in our array in the 2nd property change
  // in this case, anytime our todos change, we call this function 
  // that takes our todos and store them inside local storage

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
          return { ...todo, completed } // create brand new state cus state is immutable 
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