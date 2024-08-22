import {FC} from "react"
import {Todo} from "../todo/Todo"
import {ListInterface} from "./list.interfaces"
import styles from './list.module.scss'

export const List: FC<ListInterface> = ({list}) => {
    const [todos, setTodos] = list
    const handleRemove = (id: number) => () => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const handleComplete = (id: number) => (isCompleted: boolean) => {
        setTodos(todos.map(todo => {
            const copiedTodo = {...todo}
            if (id === todo.id) {
                copiedTodo.isComplete = isCompleted
            }
            return copiedTodo
        }))
    }

    return (
        <ul className={styles.list}>
            {todos.map((todo) => (
                <Todo
                    onComplete={handleComplete(todo.id)}
                    onRemove={handleRemove(todo.id)}
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </ul>
    )
}