import {ChangeEvent, FC} from "react"
import {TodoPropsInterface} from "./todo.interfaces"
import {Checkbox, Remove} from "@/shared/ui"
import styles from './todo.module.scss'

export const Todo: FC<TodoPropsInterface> = ({todo, onRemove, onComplete}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => onComplete(e.currentTarget.checked)
    return (
        <div className={styles.todo}>
            <Checkbox
                label={todo.label}
                onChange={handleChange}
                checked={todo.isComplete}
            />
            <Remove onRemove={onRemove} />
        </div>
    )
}