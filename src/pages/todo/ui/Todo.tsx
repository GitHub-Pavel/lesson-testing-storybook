import {useAtom} from "jotai"
import {useState} from "react"
import {todosAtom} from "@/shared/store"
import {Layout, Loader} from "@/shared/ui"
import {TodoInterface} from "@/shared/types"
import {Search} from "@/widgets/search"
import {TodoList} from "@/widgets/todo-list"
import {AddForm, AddFormSchemaType} from "@/widgets/add-form"
import styles from './todo.module.scss'

export const Todo = () => {
    const [todos, setTodos] = useAtom(todosAtom)
    const [searched, setSearched] = useState(todos)
    const [isSearching, setIsSearching] = useState(false)

    const searchFilter = (value: string, todo: TodoInterface) => todo.label.includes(value)
    const handleSubmit = ({name}: AddFormSchemaType) => {
        const prevTodo = todos[todos.length-1]
        const nextId = prevTodo ? prevTodo.id+1 : 0
        setTodos([...todos, {
            id: nextId,
            label: name,
            isComplete: false,
        }])
    }

    return (
        <Layout className={styles.layout}>
            <Search
                filterCallback={searchFilter}
                onSearching={setIsSearching}
                onSearched={setSearched}
                items={todos}
            />
            <Loader isLoading={isSearching} className={styles.grid}>
                <AddForm onSubmit={handleSubmit} />
                <TodoList list={[searched, setTodos]} />
            </Loader>
        </Layout>
    )
}