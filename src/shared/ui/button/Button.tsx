import {FC} from "react"
import {ButtonPropsInterface} from "./button.interfaces"
import styles from './button.module.scss'

export const Button: FC<ButtonPropsInterface> = ({text, ...props}) => {
    return (
        <button className={styles.btn} {...props}>{text}</button>
    )
}