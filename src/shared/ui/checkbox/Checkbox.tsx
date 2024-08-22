import {FC} from "react"
import {clsx} from "clsx"
import styles from "./checkbox.module.scss"
import {CheckboxInterface} from "./checkbox.intefaces"

export const Checkbox: FC<CheckboxInterface> = ({label, className, ...props}) => {
    return (
        <label className={clsx(styles.label, className)}>
            <div className={styles.box}>
                <input type="checkbox" {...props} />
            </div>
            <div>{label}</div>
        </label>
    )
}