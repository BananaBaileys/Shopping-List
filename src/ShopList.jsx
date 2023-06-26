import { ListItem } from "./ListItem"

export function ShopList( {todos, toggleTodo, deleteTodo} ) {
            return (
            <ul className="list">
                {todos.length === 0 && "No items  --  your fridge better be full"}  
                {/* "No items"" when thereare no list */}
                {todos.map(todo => {
                return (
                    <ListItem {...todo} key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    />
                )
                })}   

                
            </ul>
        )
    }