import {ComponentProps, forwardRef} from "react"
import styles from './field.module.scss'

export const Field = forwardRef<HTMLInputElement, ComponentProps<'input'>>((props, ref) => {
    return <input className={styles.field} {...props} ref={ref} />
})